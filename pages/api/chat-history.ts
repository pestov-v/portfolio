import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../src/lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret } = req.query;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    const { sessionId } = req.query;

    // Single session
    if (sessionId && typeof sessionId === "string") {
      const data = await redis.get<string>(`chat:session:${sessionId}`);
      if (!data) return res.status(404).json({ error: "Session not found" });
      return res.json(typeof data === "string" ? JSON.parse(data) : data);
    }

    // List all sessions (newest first)
    const sessionIds = await redis.zrange("chat:sessions", 0, 99, { rev: true });
    const sessions = [];

    for (const id of sessionIds) {
      const data = await redis.get<string>(`chat:session:${id}`);
      if (data) {
        const parsed = typeof data === "string" ? JSON.parse(data) : data;
        sessions.push({
          sessionId: id,
          messageCount: parsed.messages?.length || 0,
          model: parsed.model,
          updatedAt: parsed.updatedAt,
          preview: parsed.messages?.[0]?.content?.slice(0, 100) || "",
        });
      }
    }

    return res.json(sessions);
  }

  if (req.method === "DELETE") {
    const { sessionId } = req.query;
    if (sessionId && typeof sessionId === "string") {
      await redis.del(`chat:session:${sessionId}`);
      await redis.zrem("chat:sessions", sessionId);
      return res.json({ ok: true });
    }
    return res.status(400).json({ error: "sessionId required" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
