import Head from "next/head";

const SITE_URL = "https://pestov.pro";
const PROFILE_IMAGE = `${SITE_URL}/img/profile/profile.jpg`;

/**
 * Person schema — describes Volodymyr Pestov as a professional person.
 * https://schema.org/Person
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Volodymyr Pestov",
  givenName: "Volodymyr",
  familyName: "Pestov",
  jobTitle: "Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer with 7+ years of experience building high-performance fintech platforms. Expertise in scalable React/TypeScript architectures, leading development teams, and mentoring engineers.",
  url: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: PROFILE_IMAGE,
    width: 400,
    height: 400,
  },
  email: "pestov.volodymyr@gmail.com",
  telephone: "+380970097343",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nesebar",
    addressCountry: "BG",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Yuriy Fedkovych Chernivtsi National University",
    description: "Master's Equivalent in Applied Mathematics",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "CSS",
    "SCSS",
    "UI/UX Design",
    "REST API",
    "PostgreSQL",
    "Redux",
    "TailwindCSS",
  ],
  sameAs: [
    "https://github.com/pestov-v",
    "https://www.linkedin.com/in/volodymyr-pestov/",
    "https://www.facebook.com/pestov.v",
    "https://t.me/pestov_v",
  ],
};

/**
 * WebSite schema — describes the portfolio website itself.
 * https://schema.org/WebSite
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Volodymyr Pestov — Senior Full-Stack Developer",
  description:
    "Portfolio of Volodymyr Pestov — Senior Full-Stack Developer with 7+ years of experience in fintech, React, TypeScript.",
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en", "uk", "bg", "pl", "it", "fr"],
};

/**
 * ProfilePage schema — the main portfolio page.
 * https://schema.org/ProfilePage
 */
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Volodymyr Pestov — Senior Full-Stack Developer",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

/**
 * ItemList of portfolio projects.
 * https://schema.org/ItemList
 */
const projectsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#projects`,
  name: "Portfolio Projects",
  description: "Web development and design projects by Volodymyr Pestov",
  author: { "@id": `${SITE_URL}/#person` },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Aurinia — E-commerce Platform",
        description:
          "Modern e-commerce platform with advanced product management, checkout process, and admin panel.",
        url: "https://aurinia.com.ua",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: ["React", "TypeScript", "E-commerce", "UI/UX"],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "OschadPay — Payment Processing System",
        description:
          "Enterprise-grade payment processing platform for financial institutions with end-to-end transaction lifecycle management.",
        url: "https://pestov-v.github.io/OschadPay/",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: ["React", "TypeScript", "Redux", "FinTech", "POS"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Onboarding — No-Code Form Builder",
        description:
          "No-Code questionnaire management system based on JSON Schema and React with 30+ field types.",
        url: "https://pestov-v.github.io/onboarding/",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: [
          "React",
          "TypeScript",
          "JSON Schema",
          "No-Code",
          "Form Builder",
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Credit Factory — Corporate Finance Web Application",
        description:
          "Comprehensive corporate finance management system with user roles, product management, and regulatory compliance.",
        url: "https://pestov-v.github.io/cfweb/",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: ["React", "TypeScript", "Finance", "Enterprise"],
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Hostel Management System",
        description:
          "Full-stack hostel booking system with real-time availability, guest management, and reservation tracking.",
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "Booking",
        ],
      },
    },
  ],
};

/**
 * BreadcrumbList for page navigation structure.
 * https://schema.org/BreadcrumbList
 */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Experience",
      item: `${SITE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Skills",
      item: `${SITE_URL}/#skills`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Projects",
      item: `${SITE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contact",
      item: `${SITE_URL}/#mail`,
    },
  ],
};

export const StructuredData = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      key="schema-person"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      key="schema-website"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      key="schema-profilepage"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      key="schema-projects"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      key="schema-breadcrumb"
    />
  </Head>
);
