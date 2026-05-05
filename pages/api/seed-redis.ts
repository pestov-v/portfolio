import type { NextApiRequest, NextApiResponse } from "next";

// Redis removed — FAQ context is now embedded in portfolio-context.ts
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(410).json({ message: "Endpoint removed. Redis replaced with Supabase." });
}
