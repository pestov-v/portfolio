import { addImagePath } from "./helpers";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
  additionalInfo?: string;
}
export type TProjects = IProject[];
export type Projects = IProject[]; // FIXME: delete type

export const _projects: Projects = [
  {
    id: 18,
    title: "Aurinia - E-commerce Platform",
    description:
      "Modern e-commerce platform with advanced product management, checkout process, and admin panel.",
    href: "https://aurinia.com.ua",
    image: "aurinia",
    alt: "Aurinia E-commerce Platform",
    additionalInfo:
      "Full-featured online store with material management and comprehensive order processing",
  },
  {
    id: 17,
    title: "CFWeb - Corporate Finance Web Application",
    description:
      "Comprehensive corporate finance management system with user roles, product management, and regulatory compliance features.",
    href: "https://pestov-v.github.io/cfweb/",
    image: "cfweb",
    alt: "CFWeb Corporate Finance Application",
    additionalInfo:
      "Enterprise-level financial management platform with advanced user management and compliance tools",
  },
  {
    id: 16,
    title: "OschadPay - Payment Processing System",
    description:
      "Advanced payment processing and terminal management system for financial institutions.",
    href: "https://pestov-v.github.io/OschadPay/",
    image: "oschadpay",
    alt: "OschadPay Payment System",
    additionalInfo:
      "Complete payment solution with transaction monitoring, terminal management, and financial reporting",
  },
  {
    id: 15,
    title: "Onboarding - Questionnaire Management System",
    description:
      "Comprehensive questionnaire and form management system with templates, categories, and field configuration.",
    href: "https://pestov-v.github.io/onboarding/",
    image: "onboarding",
    alt: "Onboarding Questionnaire Management System",
    additionalInfo:
      "Enterprise-level form builder with template management, category organization, and advanced field customization",
  },
  // {
  //   id: 13,
  //   title: "Forex-broker",
  //   description: "App for active trading & long-term investing.",
  //   href: "https://i88.io",
  //   image: "i88",
  //   alt: "Forex-broker",
  //   additionalInfo: "Login: pestov.v@yahoo.com; Password: 12345678",
  // },
  // {
  //   id: 12,
  //   title: "Online market",
  //   description: "Simple online market on Next.js with MongoDB",
  //   href: "https://market-pestov-v.vercel.app/",
  //   image: "market",
  //   alt: "Online market",
  // },
  {
    id: 11,
    title: "Youtube Clone",
    description: "Mini youtube clone with search, video list, and video player",
    href: "https://clone-a72b1.web.app/",
    image: "youtube",
    alt: "Youtube Clone",
  },
  {
    id: 10,
    title: "Covid-19 tracker",
    description: "Tracker for covid-19",
    href: "https://nakryt.github.io/covid-19-tracker/",
    image: "covid-19-tracker",
    alt: "Covid-19 tracker",
  },
  {
    id: 9,
    title: "Facebook Clone",
    description: "Demo facebook-clone with React and firebase",
    href: "https://facebook-clone-a4fee.web.app/",
    image: "facebook",
    alt: "Facebook App",
  },
  // {
  //   id: 8,
  //   title: "What's App Clone",
  //   description: "Demo WhatsApp-clone with React and firebase",
  //   href: "https://whats-app-clone-7599c.web.app/",
  //   image: "whatsapp",
  //   alt: "What's App",
  // },
  // {
  //   id: 7,
  //   title: "Simple Blog",
  //   description: "Simple social blog with React, Express, MongoDB and GraphQL",
  //   href: "https://blogmerng.herokuapp.com/",
  //   image: "blog-merng",
  //   alt: "Social blog",
  // },
  // {
  //   id: 6,
  //   title: "Simple Amazona",
  //   description: "Online market like amazon with React, Express and MongoDB",
  //   href: "https://simple-amazona.herokuapp.com/",
  //   image: "amazona",
  //   alt: "amazona mart",
  // },
  {
    id: 6,
    title: "Matrix table",
    description: "Simple generated matrix table with React",
    href: "https://pestov-v.github.io/matrix-table/",
    image: "matrix-table",
    alt: "Matrix table",
  },
  {
    id: 5,
    title: "ABZ-test task",
    description:
      "Delivered pixel-perfect layouts with a strong focus on performance optimization",
    href: "https://nakryt.github.io/test/",
    image: "abz-test",
    alt: "abz-agency test",
  },
  // {
  //   id: 4,
  //   title: "Todo application",
  //   description: "React todo application with database on firebase",
  //   href: "https://todo-998f4.web.app/",
  //   image: "todo-app",
  //   alt: "todo application",
  // },
  // {
  //   id: 3,
  //   title: "Quiz application",
  //   description: "React quiz application with database on firebase",
  //   href: "https://quiz-36da1.web.app/quiz/-M-pVyWbXPA2yCL4xf0d",
  //   image: "quiz",
  //   alt: "quiz application",
  // },
  // {
  //   id: 2,
  //   title: "Simple bootstrap app",
  //   description: "Simple site with bootstrap",
  //   href: "https://simplebootstrapsite.web.app/",
  //   image: "bootstrap-app",
  //   alt: "bootstrap application",
  // },
  // {
  //   id: 1,
  //   title: "Simple menu",
  //   description: "Simple menu for restaurant",
  //   href: "https://nakryt.github.io/simple-menu/",
  //   image: "simple-menu",
  //   alt: "menu application",
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
}

export const SKILLS: ISkill[] = [
  { title: "html", percent: 92, color: COLORS.secondary },
  { title: "css", percent: 87, color: COLORS.success },
  { title: "JavaScript", percent: 90, color: COLORS.info },
  { title: "nodejs", percent: 71, color: COLORS.warning },
  { title: "react", percent: 88, color: COLORS.danger },
  { title: "react native", percent: 63, color: COLORS.secondary },
  { title: "nextjs", percent: 85, color: COLORS.primary },
  { title: "nestjs", percent: 78, color: COLORS.info },
  { title: "java", percent: 54, color: COLORS.success },
  { title: "angular", percent: 48, color: COLORS.danger },
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
