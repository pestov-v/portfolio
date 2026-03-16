import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../src/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { eventType, eventData } = req.body;

    if (!eventType) {
      return res.status(400).json({ error: "eventType required" });
    }

    // Geolocation from Vercel headers
    const country = (req.headers["x-vercel-ip-country"] as string) || null;
    const city = (req.headers["x-vercel-ip-city"] as string) || null;
    const userAgent = req.headers["user-agent"] || null;
    const referrer = (req.headers["referer"] as string) || null;

    await supabase.from("analytics_events").insert({
      event_type: eventType,
      event_data: eventData || {},
      country,
      city: city ? decodeURIComponent(city) : null,
      user_agent: userAgent,
      referrer,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Failed to track event" });
  }
}
