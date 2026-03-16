import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { Redis } from "@upstash/redis";
import { PORTFOLIO_CONTEXT } from "../../src/lib/portfolio-context";

export const config = {
  runtime: "edge",
};

const models = {
  "gemini-2.5-flash": google("gemini-2.5-flash"),
  "gemini-2.5-pro": google("gemini-2.5-pro"),
  "gemini-2.0-flash": google("gemini-2.0-flash"),
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const { messages, model = "gemini-2.5-flash", sessionId } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Messages array is required" }), {
        status: 400,
      });
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "GOOGLE_GENERATIVE_AI_API_KEY not configured" }),
        { status: 500 }
      );
    }

    // Load additional context from Redis (dynamic FAQ)
    let dynamicContext = "";
    try {
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      });
      const faq = await redis.get<string>("portfolio:faq");
      if (faq) dynamicContext = `\n\n## Additional FAQ\n${faq}`;
    } catch {
      // Redis unavailable — proceed without dynamic context
    }

    const selectedModel =
      models[model as keyof typeof models] || models["gemini-2.5-flash"];

    const result = streamText({
      model: selectedModel,
      messages,
      system: PORTFOLIO_CONTEXT + dynamicContext,
      onFinish: async ({ text }) => {
        if (sessionId && text) {
          try {
            const redis = new Redis({
              url: process.env.UPSTASH_REDIS_REST_URL!,
              token: process.env.UPSTASH_REDIS_REST_TOKEN!,
            });
            await Promise.all([
              redis.set(
                `chat:session:${sessionId}`,
                JSON.stringify({
                  sessionId,
                  messages: [...messages, { role: "assistant", content: text }],
                  model,
                  updatedAt: new Date().toISOString(),
                }),
                { ex: 60 * 60 * 24 * 30 }
              ),
              redis.zadd("chat:sessions", {
                score: Date.now(),
                member: sessionId,
              }),
            ]);
          } catch {
            // Redis write failed — non-critical
          }
        }
      },
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    const isQuotaError =
      error?.message?.includes("quota") ||
      error?.message?.includes("insufficient_quota");

    return new Response(
      JSON.stringify({
        error: isQuotaError ? "API quota exceeded" : "Internal server error",
        details: isQuotaError
          ? "The API quota has been exceeded. Please try a different model."
          : error?.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
