import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Use service-level access via server-side client with anon key
  // RLS blocks anon SELECT, so we use the secret key for admin reads
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { days = 30 } = req.query;
  const since = new Date();
  since.setDate(since.getDate() - Number(days));

  const { data: events, error } = await supabase
    .from("analytics_events")
    .select("*")
    .gte("created_at", since.toISOString())
    .order("created_at", { ascending: false })
    .limit(1000);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Aggregate stats
  const stats = {
    totalPageViews: 0,
    totalProjectClicks: 0,
    totalResumeDownloads: 0,
    byCountry: {} as Record<string, number>,
    byCity: {} as Record<string, number>,
    projectClicks: {} as Record<string, number>,
    recentEvents: events?.slice(0, 50) || [],
  };

  for (const e of events || []) {
    if (e.event_type === "page_view") stats.totalPageViews++;
    if (e.event_type === "project_click") {
      stats.totalProjectClicks++;
      const name = e.event_data?.projectName || "unknown";
      stats.projectClicks[name] = (stats.projectClicks[name] || 0) + 1;
    }
    if (e.event_type === "resume_download") stats.totalResumeDownloads++;
    if (e.country) {
      stats.byCountry[e.country] = (stats.byCountry[e.country] || 0) + 1;
    }
    if (e.city) {
      stats.byCity[e.city] = (stats.byCity[e.city] || 0) + 1;
    }
  }

  return res.json(stats);
}
