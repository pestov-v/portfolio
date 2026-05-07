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
    id: 19,
    translationKey: "collabpulse",
    title: "CollabPulse - Micro-collaboration Platform",
    description:
      "Modern micro-collaboration platform with advanced product management, checkout process, and admin panel.",
    href: "https://collabpulse.io",
    image: "collabpulse",
    alt: "CollabPulse Micro-collaboration Platform",
    additionalInfo:
      "Full-featured micro-collaboration platform with advanced product management, checkout process, and admin panel",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "NestJS",
      "Postgres",
    ],
    caseStudy: {
      challenge:
        "Teams working on short-lived projects had no lightweight tool for coordination. Traditional project management software was too heavy — creating a project, assigning tasks, and tracking micro-deliverables required too much setup. Collaboration happened across scattered chats and threads with no unified pulse on team activity or progress.",
      solution:
        "Built a micro-collaboration platform where teams can spin up focused workspaces in seconds, assign micro-tasks, and track activity in real time. Integrated a product management layer and checkout flow so teams can package and monetise their collaborative output. The admin panel gives full visibility into workspaces, members, and billing from a single control surface.",
      result:
        "Coordination overhead reduced significantly — teams go from idea to active workspace in under a minute. Monetisation of collaboration services enabled directly within the platform, eliminating the need for third-party billing tools. Admin panel consolidates workspace health, user management, and revenue tracking in one place.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NestJS",
        "Postgres",
      ],
      diagrams: [
        {
          chart: `graph TD
    A[Team Member] -->|Creates workspace| B(CollabPulse Core)

    subgraph "Collaboration Layer"
    B --> C[Workspace Engine]
    C --> D[Micro-task Board]
    C --> E[Activity Pulse Feed]
    D <-->|Real-time sync| E
    end

    subgraph "Monetisation Layer"
    C --> F[Product Catalogue]
    F --> G[Checkout Flow]
    G --> H[Order Confirmation]
    end

    subgraph "Admin Layer"
    B --> I[Admin Panel]
    I --> J[Workspace Registry]
    I --> K[User Management]
    I --> L[Revenue Dashboard]
    end`,
          caption:
            "Platform architecture: a collaboration layer handles real-time micro-task coordination, a monetisation layer enables product packaging and checkout, and the admin panel provides full operational visibility across all workspaces.",
        },
      ],
    },
  },
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
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "NestJS",
      "Postgres",
    ],
    caseStudy: {
      challenge:
        "A materials retailer was managing inventory, orders, and customer data across spreadsheets and disconnected tools. Product listings required manual updates, the checkout process was handled externally, and the admin had no real-time view of stock levels or order status — leading to fulfilment errors and lost sales.",
      solution:
        "Delivered a full-stack e-commerce platform with a product catalogue supporting rich material descriptions, pricing tiers, and image management. Built a multi-step checkout with order validation and confirmation emails. The admin panel covers the complete order lifecycle — from placement through fulfilment — alongside inventory management, category configuration, and sales reporting.",
      result:
        "Inventory sync made manual stock updates obsolete — catalogue changes reflect instantly in the storefront. Order processing errors dropped to near zero through structured checkout validation. Admin gained real-time visibility into stock levels, pending orders, and revenue without leaving the platform.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NestJS",
        "Postgres",
      ],
      diagrams: [
        {
          chart: `graph TD
    A[Customer] -->|Browses catalogue| B(Storefront)

    subgraph "Shopping Flow"
    B --> C[Product Page]
    C --> D[Cart]
    D --> E[Checkout]
    E --> F[Order Confirmation]
    end

    subgraph "Backend Processing"
    F --> G[Order Service]
    G --> H[Inventory Update]
    G --> I[Email Notification]
    end

    subgraph "Admin Panel"
    J[Admin] --> K[Product Management]
    J --> L[Order Management]
    J --> M[Inventory Dashboard]
    K <-->|Sync| H
    L <-->|Tracks| G
    end`,
          caption:
            "End-to-end e-commerce flow: the customer journey from catalogue browsing through checkout triggers automated backend processing, while the admin panel provides real-time control over products, orders, and inventory.",
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
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "TailwindCSS",
      "Postgres",
      "TypeORM",
    ],
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
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Ant Design",
      "REST API",
      "Node.js",
    ],
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
    technologies: [
      "React",
      "TypeScript",
      "JSON Schema",
      "React Hook Form",
      "React Window",
    ],
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
    id: 21,
    translationKey: "jsontojsx",
    title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
    description:
      "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating and editing components through natural language prompts.",
    href: "https://create-components-gules.vercel.app",
    image: "jsontojsx",
    alt: "JSONtoJSX Schema Engine Playground",
    additionalInfo:
      "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests",
    technologies: ["Next.js", "TypeScript", "Mantine", "Turborepo", "Vitest"],
    caseStudy: {
      challenge:
        "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces — with no direct path from a high-level component description to deployable code. Generating forms in particular is error-prone: AI tools produce markup without state management, missing <form> elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
      solution:
        "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type that encodes field definitions alongside the UI tree. The engine has two output paths: a live React renderer for instant preview, and a TSX codegen pipeline that emits fully typed interfaces, useState hooks, curried handleChange callbacks, and handleSubmit functions from the same schema. An AI playground integrates three LLM providers (Gemini, OpenAI, Anthropic), supports multi-variant generation with a picker UI, and includes prompt-based editing. All identifiers interpolated into generated code are validated to prevent code injection.",
      result:
        "From a single natural language prompt to a running React preview and copy-pasteable production TSX in seconds — including complete form state management. The schema engine pipeline is covered by 174 automated tests. The Form node type handles all Mantine v7 input variants: event-based, value-direct, and checked inputs, with the correct onChange signature for each.",
      technologies: ["Next.js", "TypeScript", "Mantine", "Turborepo", "Vitest"],
      diagrams: [
        {
          chart: `graph TD
    A[Natural Language Prompt] -->|AI Playground| B(Multi-provider AI Layer)

    subgraph "AI Layer"
    B --> C{Gemini / OpenAI / Anthropic}
    C -->|Single mode| D[Schema JSON]
    C -->|Variants mode| E[3 Schema Variants]
    E -->|User picks| D
    end

    subgraph "Schema Engine"
    D --> F[Schema Validator]
    F --> G{Output Path}
    G -->|Live preview| H[React Renderer]
    G -->|Code export| I[TSX Codegen]
    end

    subgraph "React Renderer"
    H --> J[Component Registry]
    J --> K[FormProvider Context]
    K --> L[Controlled Inputs]
    end

    subgraph "TSX Codegen"
    I --> M[TS Interface]
    I --> N[useState Hook]
    I --> O[handleChange + handleSubmit]
    M & N & O --> P[Production TSX File]
    end`,
          caption:
            "Schema engine pipeline: a natural language prompt flows through an AI layer into a validated JSON schema, which branches into a live React renderer for instant preview and a TSX codegen pipeline that emits fully typed, stateful component code ready for production.",
        },
      ],
    },
  },
  {
    id: 20,
    translationKey: "aurabeauty",
    title: "Aura Beauty Salon — AI Booking Platform",
    description:
      "Premium beauty salon landing with an AI-powered booking assistant that handles appointments through natural conversation, master availability checking, and instant confirmation.",
    href: "https://beauty-template-v1.vercel.app",
    image: "aura-beauty",
    alt: "Aura Beauty Salon AI Booking Platform",
    additionalInfo:
      "Multi-theme salon platform with Gemini AI booking agent, Supabase auth, master scheduling, and Telegram notifications",
    technologies: [
      "Next.js",
      "Supabase",
      "Gemini AI",
      "TypeScript",
      "TailwindCSS",
    ],
    caseStudy: {
      challenge:
        "Beauty salons rely on phone or manual form bookings — a friction-heavy process that loses clients who want to book outside business hours. Staff spend significant time fielding routine scheduling calls, and there is no intelligent layer to handle availability conflicts, master preferences, or disambiguation when multiple specialists share a name.",
      solution:
        "Built a full-stack salon platform with an agentic AI booking assistant powered by Gemini. The assistant conducts natural multi-turn conversations in Ukrainian and English, resolves service synonyms, interprets relative dates and times, checks real-time master availability from Supabase, handles disambiguation when multiple masters share a first name, and confirms bookings atomically with Telegram notifications to the owner — all without human involvement.",
      result:
        "Clients book 24/7 through a conversational UI in under two minutes. The AI agent reduces front-desk scheduling load to near zero for routine appointments. Master availability conflicts are eliminated through real-time slot locking. Salon owners receive instant Telegram alerts for every new booking.",
      technologies: [
        "Next.js",
        "Supabase",
        "Gemini AI",
        "TypeScript",
        "TailwindCSS",
      ],
      diagrams: [
        {
          chart: `graph TD
    A[Client] -->|Starts chat| B(AI Booking Agent)

    subgraph "Conversation Layer"
    B --> C[Gemini 2.5 Flash]
    C -->|Collects service, date, time, name, phone| C
    C -->|Master name mentioned| D{Disambiguation}
    D -->|Multiple matches| E[Ask for full name]
    D -->|Single match| F[Check Availability]
    end

    subgraph "Availability Layer"
    F --> G[Supabase — bookings table]
    G -->|Slot free| H[Emit __BOOK__]
    G -->|Slot taken| I[Suggest alternatives]
    end

    subgraph "Confirmation Layer"
    H --> J[Atomic slot reservation]
    J --> K[Booking record saved]
    K --> L[Telegram notification]
    K --> M[Success UI to client]
    end`,
          caption:
            "Agentic booking loop: Gemini drives the conversation, detects ambiguous master names, checks live Supabase availability, and atomically reserves the slot — triggering a Telegram alert to the owner on confirmation.",
        },
      ],
    },
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
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "TailwindCSS",
      "Postgres",
      "TypeORM",
    ],
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
    technologies: [
      "React",
      "Express",
      "TypeScript",
      "TailwindCSS",
      "Postgres",
      "TypeORM",
    ],
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
  // {
  //   id: 10,
  //   translationKey: "webstudio",
  //   title: "Web-studio",
  //   description: "Web-studio for creating websites.",
  //   href: "https://web-studio-smoky.vercel.app",
  //   image: "web-studio",
  //   alt: "Web-studio",
  //   additionalInfo:
  //     "Landing page for a digital agency with a modern UI/UX and smooth animations",
  //   technologies: ["Next.js", "TypeScript", "TailwindCSS"],
  // },
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
  {
    id: 4,
    translationKey: "freelance",
    company: "Freelance",
    period: "09/2019 - 03/2021",
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
