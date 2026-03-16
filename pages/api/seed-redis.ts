import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../src/lib/redis";

const FAQ_DATA = `
Q: What is Volodymyr's notice period?
A: Open to discussion, can start relatively quickly for the right opportunity.

Q: Does Volodymyr work with a team or solo?
A: He has experience both leading teams and working as an individual contributor. At Ukrpay he mentors junior developers.

Q: What is the preferred work format?
A: Remote-first, but open to hybrid or relocation discussions.

Q: What industries has Volodymyr worked in?
A: Fintech (payments, trading), Real Estate, E-commerce, SaaS, and various freelance projects across different domains.

Q: What languages does Volodymyr speak?
A: Ukrainian (native), English (professional), Russian (fluent).
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await redis.set("portfolio:faq", FAQ_DATA);
  return res.json({ ok: true, message: "FAQ seeded to Redis" });
}
