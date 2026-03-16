import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../src/lib/redis";
import { PORTFOLIO_CONTEXT } from "../../src/lib/portfolio-context";

const models = {
  "gemini-2.5-flash": google("gemini-2.5-flash"),
  "gemini-2.5-pro": google("gemini-2.5-pro"),
  "gemini-2.0-flash": google("gemini-2.0-flash"),
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages, model = "gemini-2.5-flash", sessionId } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return res
        .status(500)
        .json({ error: "GOOGLE_GENERATIVE_AI_API_KEY not configured" });
    }

    // Load additional context from Redis (dynamic FAQ)
    let dynamicContext = "";
    try {
      const faq = await redis.get<string>("portfolio:faq");
      if (faq) dynamicContext = `\n\n## Additional FAQ\n${faq}`;
    } catch {
      // Redis unavailable — proceed without dynamic context
    }

    const selectedModel =
      models[model as keyof typeof models] || models["gemini-2.5-flash"];

    const { text } = await generateText({
      model: selectedModel,
      messages,
      system: PORTFOLIO_CONTEXT + dynamicContext,
    });

    // Save chat history to Redis
    if (sessionId && text) {
      redis
        .set(
          `chat:session:${sessionId}`,
          JSON.stringify({
            sessionId,
            messages: [...messages, { role: "assistant", content: text }],
            model,
            updatedAt: new Date().toISOString(),
          }),
          { ex: 60 * 60 * 24 * 30 }
        )
        .catch(() => {});
      redis
        .zadd("chat:sessions", { score: Date.now(), member: sessionId })
        .catch(() => {});
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.send(text);
  } catch (error: any) {
    if (res.headersSent) return;

    const isQuotaError =
      error?.message?.includes("quota") ||
      error?.message?.includes("insufficient_quota");

    return res.status(500).json({
      error: isQuotaError ? "API quota exceeded" : "Internal server error",
      details: isQuotaError
        ? "The API quota has been exceeded. Please try a different model."
        : error?.message || "Unknown error",
    });
  }
}
