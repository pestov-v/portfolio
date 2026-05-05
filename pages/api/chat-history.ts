import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error(`Missing env: ${!url ? "NEXT_PUBLIC_SUPABASE_URL" : "SUPABASE_SECRET_KEY"}`);
  return createClient(url, key);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret } = req.query;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let supabase: any;
  try {
    supabase = getSupabase();
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }

  if (req.method === "GET") {
    const { sessionId } = req.query;

    // Single session
    if (sessionId && typeof sessionId === "string") {
      const { data, error } = await supabase
        .from("chat_sessions")
        .select("*")
        .eq("session_id", sessionId)
        .single();

      if (error || !data) return res.status(404).json({ error: "Session not found" });

      return res.json({
        sessionId: data.session_id,
        messages: data.messages,
        model: data.model,
        updatedAt: data.updated_at,
      });
    }

    // List all sessions (newest first)
    const { data: sessions, error } = await supabase
      .from("chat_sessions")
      .select("session_id, messages, model, updated_at")
      .order("updated_at", { ascending: false })
      .limit(100);

    if (error) return res.status(500).json({ error: error.message });

    return res.json(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (sessions || []).map((s: any) => ({
        sessionId: s.session_id,
        messageCount: s.messages?.length || 0,
        model: s.model,
        updatedAt: s.updated_at,
        preview: s.messages?.[0]?.content?.slice(0, 100) || "",
      }))
    );
  }

  if (req.method === "DELETE") {
    const { sessionId } = req.query;
    if (sessionId && typeof sessionId === "string") {
      await supabase.from("chat_sessions").delete().eq("session_id", sessionId);
      return res.json({ ok: true });
    }
    return res.status(400).json({ error: "sessionId required" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
