import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import type { NextApiRequest, NextApiResponse } from "next";

// Map of available Gemini models
const models = {
  "gemini-2.5-flash": google("gemini-2.5-flash"),
  "gemini-2.5-pro": google("gemini-2.5-pro"),
  "gemini-2.0-flash": google("gemini-2.0-flash"),
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("=== Chat API Request ===");
  console.log("Method:", req.method);

  if (req.method !== "POST") {
    console.log("❌ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("📥 Parsing request body...");
    const { messages, model = "gemini-2.5-flash" } = req.body;
    console.log("Selected model:", model);
    console.log("Messages count:", messages?.length);

    if (!messages || !Array.isArray(messages)) {
      console.log("❌ Invalid messages array");
      return res.status(400).json({ error: "Messages array is required" });
    }

    // Check API key
    console.log("🔑 Checking API key...");
    console.log(
      "GOOGLE_GENERATIVE_AI_API_KEY exists:",
      !!process.env.GOOGLE_GENERATIVE_AI_API_KEY
    );

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.log("❌ No API key found!");
      return res
        .status(500)
        .json({ error: "GOOGLE_GENERATIVE_AI_API_KEY not configured" });
    }

    // Get the selected model
    const selectedModel =
      models[model as keyof typeof models] || models["gemini-2.5-flash"];
    console.log("✅ Model initialized:", model);

    console.log("🚀 Calling streamText...");
    const result = await streamText({
      model: selectedModel,
      messages,
      system: `You are a helpful AI assistant on Volodymyr Pestov's portfolio website.
You can help visitors learn about Volodymyr's skills, experience, and projects.
Be professional, concise, and friendly.`,
    });

    console.log("✅ Stream created successfully");

    // Set headers for streaming
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    // Stream the text to the response
    for await (const textPart of result.textStream) {
      res.write(textPart);
    }

    console.log("✅ Stream completed");
    res.end();
  } catch (error: any) {
    console.error("❌ Chat API error:");
    console.error("Error type:", error?.constructor?.name);
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);

    // Check if response already sent
    if (res.headersSent) {
      console.error("Headers already sent, cannot send error response");
      return;
    }

    // Check if it's a quota error
    const isQuotaError =
      error?.message?.includes("quota") ||
      error?.message?.includes("insufficient_quota") ||
      error?.responseBody?.includes("insufficient_quota");

    let errorMessage = "Internal server error";
    let userMessage = error?.message || "Unknown error";

    if (isQuotaError) {
      errorMessage = "API quota exceeded";
      userMessage =
        "The API quota has been exceeded. Please check your billing settings or try a different model.";
      console.error(
        "💰 Quota error detected - user needs to add credits or switch models"
      );
    }

    return res.status(500).json({
      error: errorMessage,
      details: userMessage,
    });
  }
}
