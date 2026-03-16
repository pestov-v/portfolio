import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../src/lib/redis";

const FAQ_DATA = `
## General
Q: What is Volodymyr's notice period?
A: Open to discussion, can start relatively quickly for the right opportunity.

Q: Does Volodymyr work with a team or solo?
A: He has experience both leading teams and working as an individual contributor. At Ukrpay he mentors junior developers and established code review standards.

Q: What is the preferred work format?
A: Remote-first, but open to hybrid or relocation discussions.

Q: What industries has Volodymyr worked in?
A: Fintech (payments, trading), Real Estate, E-commerce, SaaS, and various freelance projects across different domains.

Q: What languages does Volodymyr speak?
A: Ukrainian (native), English (professional), Russian (fluent).

## Tech Stack & Experience
Q: What is Volodymyr's core tech stack?
A: React, TypeScript, Next.js, Redux on the frontend. Node.js, NestJS, PostgreSQL, REST API on the backend. Docker and Git for DevOps.

Q: How many years of commercial experience does he have?
A: Volodymyr has 6+ years of commercial experience, specializing in frontend-heavy full-stack development since 2019.

Q: Does he have experience with cloud platforms?
A: Yes, he has worked with Vercel for frontend deployments, and has experience with Docker-based deployments and serverless architectures.

Q: Has he worked with microservices or monolithic architecture?
A: He has experience in both. At Ukrpay he worked on a modular platform architecture (merchant management, credit factory, tax reporting as separate modules) and at Impltech built a real-time trading platform with WebSocket-based microservices.

## Terms & Logistics
Q: What is his expected salary range?
A: He is open to discussing competitive offers based on the project complexity and responsibilities. Please reach out directly to discuss specifics.

Q: Is he open to B2B or employment contracts?
A: Open to both B2B, Gig-contracts, or standard employment, depending on the location and legal entity.

Q: What is his current location and time zone?
A: Currently based in Nesebar, Bulgaria (UTC+2/+3). He is comfortable working with +/- 4 hours time zone difference.

## Soft Skills & Leadership
Q: What is his experience in mentoring and leadership?
A: At Ukrpay, he mentored junior developers and established code review standards. He also designed a reusable component library (40+ components) used across the entire engineering team, cutting feature development time by 40%.

Q: How does he handle conflict or tight deadlines?
A: Volodymyr prioritizes transparent communication and data-driven decision-making to balance quality with delivery speed.

## Achievements
Q: What is Volodymyr's most significant professional achievement?
A: At Ukrpay, he architected a merchant management platform serving 500+ merchants and processing 10,000+ daily transactions with zero downtime during 3x user growth. He also built a No-Code form builder that eliminated developer dependency for form creation, reducing time-to-market from weeks to hours.
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await redis.set("portfolio:faq", FAQ_DATA);
  return res.json({ ok: true, message: "FAQ seeded to Redis" });
}
