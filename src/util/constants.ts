import { addImagePath } from "./helpers";

export interface IDiagram {
  chart: string;
  caption: string;
}

export interface ICaseStudy {
  challenge: string;
  solution: string;
  result: string;
  technologies?: string[];
  screenshot?: string;
  diagrams?: IDiagram[];
}

export interface IProject {
  id: number;
  translationKey: string; // Translation key for projectsData
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
  additionalInfo?: string;
  technologies?: string[];
  caseStudy?: ICaseStudy;
}
export type TProjects = IProject[];

export const _projects: TProjects = [
  {
    id: 18,
    translationKey: "aurinia",
    title: "Aurinia - E-commerce Platform",
    description:
      "Modern e-commerce platform with advanced product management, checkout process, and admin panel.",
    href: "https://aurinia.com.ua",
    image: "suitcase",
    alt: "Aurinia E-commerce Platform",
    additionalInfo:
      "Full-featured online store with material management and comprehensive order processing",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Postgres"],
  },
  {
    id: 17,
    translationKey: "cfweb",
    title: "Credit Factory - Corporate Finance Web Application",
    description:
      "Comprehensive corporate finance management system with user roles, product management, and regulatory compliance features.",
    href: "https://pestov-v.github.io/cfweb/",
    image: "cfweb",
    alt: "CFWeb Corporate Finance Application",
    additionalInfo:
      "Enterprise-level financial management platform with advanced user management and compliance tools",
    technologies: ["React", "TypeScript", "Redux", "Ant Design", "REST API"],
  },
  {
    id: 16,
    translationKey: "oschadpay",
    title: "OschadPay - Payment Processing System",
    description:
      "Enterprise-grade payment processing platform for financial institutions. Enables end-to-end transaction lifecycle management, POS terminal provisioning, merchant and product control, and automated tax reporting.",
    href: "https://pestov-v.github.io/OschadPay/",
    image: "oschadpay",
    alt: "OschadPay Payment System",
    additionalInfo:
      "Transaction creation & monitoring · Tax-ready report generation · Merchant & product registry · Terminal provisioning & management · Financial analytics dashboard",
    technologies: ["React", "TypeScript", "Redux", "Ant Design", "REST API", "Node.js"],
    caseStudy: {
      challenge:
        "The bank operated dozens of payment terminals with no unified dashboard. Transaction creation was manual, merchant onboarding took days, product catalogues lived in spreadsheets, and generating tax-compliant reports required hours of data stitching across multiple systems.",
      solution:
        "Built a centralised web platform that covers the full payment operations workflow: create and track transactions in real time, register and manage merchants with their product catalogues, provision and monitor POS terminals remotely, and generate structured reports ready for tax authority submission — all from a single interface with role-based access control.",
      result:
        "Terminal onboarding time reduced from days to minutes. Tax report preparation automated — from hours of manual work to one-click generation. Full visibility into transactions, merchants, and terminal health through a real-time dashboard.",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Ant Design",
        "REST API",
        "Node.js",
      ],
    },
  },
  {
    id: 15,
    translationKey: "onboarding",
    title: "Onboarding - Questionnaire Management System",
    description:
      "Comprehensive questionnaire and form management system with templates, categories, and field configuration.",
    href: "https://pestov-v.github.io/onboarding/",
    image: "onboarding",
    alt: "Onboarding Questionnaire Management System",
    additionalInfo:
      "Enterprise-level form builder with template management, category organization, and advanced field customization",
    technologies: ["React", "TypeScript", "JSON Schema", "React Hook Form", "React Window"],
    caseStudy: {
      challenge:
        "The process of launching new payment products took weeks, as each new form required a full development, testing, and frontend deployment cycle.",
      solution:
        "Developed a custom No-Code system based on JSON Schema and React. Implemented a visual constructor with 30+ field types, complex conditional logic, and on-the-fly validation. Applied React virtualization for large forms (100+ fields) to maintain high performance.",
      result:
        "Complete elimination of developer dependency when creating forms. Time-to-Market reduced from several weeks to several hours.",
      technologies: [
        "React",
        "TypeScript",
        "JSON Schema",
        "React Hook Form",
        "React Window",
      ],
      diagrams: [
        {
          chart: `graph TD
    A[JSON Schema Definition] -->|Input| B(Form Engine Core)

    subgraph "Internal Processing"
    B --> C{Parser & Logic}
    C --> D[Field Registry]
    C --> E[Dependency Graph]
    E -->|Conditional Logic| D
    end

    D --> F[React Virtualized List]

    subgraph "UI Layer"
    F --> G[Field Component A]
    F --> H[Field Component B]
    F --> I[Field Component N...]
    end

    G & H & I --> J[Validation Engine]
    J -->|Valid Data| K[Final Submission JSON]`,
          caption:
            "Architecture diagram showing how JSON Schema is transformed into a functional interface. This approach enabled zero developer dependency for form creation, reducing Time-to-Market from weeks to hours.",
        },
      ],
    },
  },
  {
    id: 14,
    translationKey: "hostel",
    title: "Hostel management system",
    description:
      "Complete hostel management solution with room booking, guest registration, and administrative dashboard for accommodation facilities.",
    href: "https://aurinia-hostel.online",
    image: "hostel",
    alt: "Hostel management system",
    additionalInfo:
      "Full-stack booking system with real-time availability, guest management, and reservation tracking",
    technologies: ["Next.js", "NestJS", "TypeScript", "TailwindCSS", "Postgres", "TypeORM"],
  },
  {
    id: 13,
    translationKey: "deals",
    title: "Deal crm system",
    description:
      "Customer relationship management platform for tracking deals, managing client interactions, and monitoring sales pipeline progress.",
    href: "https://deals-front-production.up.railway.app",
    image: "deals",
    alt: "Deal crm system",
    additionalInfo:
      "Sales pipeline management with deal tracking, client database, and analytics dashboard",
    technologies: ["Next.js", "NestJS", "TypeScript", "TailwindCSS", "Postgres", "TypeORM"],
  },
  {
    id: 12,
    translationKey: "candidates",
    title: "CandidatesHub - Candidates crm system",
    description:
      "Recruitment management system for tracking job candidates, managing interview processes, and organizing hiring workflows.",
    href: "https://candidates-front-production.up.railway.app",
    image: "candidates",
    alt: "Candidates crm system",
    additionalInfo:
      "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics",
    technologies: ["React", "Express", "TypeScript", "TailwindCSS", "Postgres", "TypeORM"],
  },
  {
    id: 11,
    translationKey: "novus",
    title: "Novus - Web Development Agency",
    description:
      "Modern web development agency website with sleek design, smooth animations, and responsive layout.",
    href: "https://novus-theta.vercel.app/",
    image: "novus",
    alt: "Novus Web Development Agency",
    additionalInfo:
      "Creative agency landing page with modern animations and premium design",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: 10,
    translationKey: "webstudio",
    title: "Web-studio",
    description: "Web-studio for creating websites.",
    href: "https://web-studio-smoky.vercel.app",
    image: "web-studio",
    alt: "Web-studio",
    additionalInfo:
      "Landing page for a digital agency with a modern UI/UX and smooth animations",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];

export const projects = addImagePath(_projects);

export enum COLORS {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
  info = "info",
}

export type TColors = keyof typeof COLORS;

interface ISkill {
  title: string;
  delay?: number;
  percent: number;
  color: TColors;
  category: "frontend" | "backend" | "devops";
}

export const SKILLS: ISkill[] = [
  { title: "React", percent: 92, color: COLORS.danger, category: "frontend" },
  {
    title: "TypeScript",
    percent: 90,
    color: COLORS.info,
    category: "frontend",
  },
  {
    title: "Next.js",
    percent: 85,
    color: COLORS.primary,
    category: "frontend",
  },
  {
    title: "HTML/CSS",
    percent: 92,
    color: COLORS.secondary,
    category: "frontend",
  },
  { title: "Node.js", percent: 75, color: COLORS.success, category: "backend" },
  { title: "NestJS", percent: 78, color: COLORS.info, category: "backend" },
  {
    title: "PostgreSQL",
    percent: 70,
    color: COLORS.primary,
    category: "backend",
  },
  {
    title: "REST API",
    percent: 88,
    color: COLORS.secondary,
    category: "backend",
  },
  { title: "Redux", percent: 85, color: COLORS.danger, category: "frontend" },
  { title: "Git", percent: 90, color: COLORS.warning, category: "devops" },
  { title: "Docker", percent: 65, color: COLORS.info, category: "devops" },
];

export interface IExperience {
  id: number;
  translationKey: string;
  company: string;
  period: string;
  location: string;
}

export const EXPERIENCE: IExperience[] = [
  {
    id: 1,
    translationKey: "ukrpay",
    company: "Ukrpay",
    period: "01/2023 - Present",
    location: "Ukraine",
  },
  {
    id: 2,
    translationKey: "atlana",
    company: "Atlana",
    period: "03/2022 - 10/2022",
    location: "Ukraine",
  },
  {
    id: 3,
    translationKey: "impltech",
    company: "Impltech",
    period: "03/2021 - 02/2022",
    location: "Ukraine",
  },
];

export const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/nakrytvp",
    title: "Facebook",
  },
  { id: "github", href: "https://github.com/pestov-v", title: "GitHub" },
  {
    id: "linkedin",
    href: "http://linkedin.com/in/pestov-volodymyr-405011206/",
    title: "LinkedIn",
  },
  { id: "phone", href: "tel:+380970097343", title: "Call me" },
];
