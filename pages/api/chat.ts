import { google } from "@ai-sdk/google";
import { streamText } from "ai";
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

    const selectedModel =
      models[model as keyof typeof models] || models["gemini-2.5-flash"];

    const result = streamText({
      model: selectedModel,
      messages,
      system: PORTFOLIO_CONTEXT,
      onFinish: async ({ text }) => {
        if (sessionId && text) {
          try {
            const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
            const key = process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
            if (url && key) {
              await fetch(`${url}/rest/v1/chat_sessions`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "apikey": key,
                  "Authorization": `Bearer ${key}`,
                  "Prefer": "resolution=merge-duplicates",
                },
                body: JSON.stringify({
                  session_id: sessionId,
                  messages: [...messages, { role: "assistant", content: text }],
                  model,
                  updated_at: new Date().toISOString(),
                }),
              });
            }
          } catch {
            // non-critical
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
