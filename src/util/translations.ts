export interface Translation {
  // Header
  greeting: string;
  name: string;
  downloadCV: string;

  // Navigation
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;

  // About section
  aboutMe: string;
  aboutBgText: string;
  jobTitle: string;
  description: string;
  personalInfo: {
    name: string;
    birthday: string;
    degree: string;
    experience: string;
    phone: string;
    email: string;
    address: string;
    freelance: string;
    telegram: string;
    viber: string;
    whatsapp: string;
    facebook: string;
    github: string;
    linkedin: string;
  };

  // Personal values
  available: string;
  master: string;
  fiveYearsPlus: string;

  // Skills section
  mySkills: string;
  skillsBgText: string;

  // Experience section
  myExperience: string;
  experienceBgText: string;

  // Projects section
  portfolio: string;
  portfolioBgText: string;

  // Contact section
  contactMe: string;
  contactBgText: string;
  sendMeLetter: string;
  mailMe: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
  thankYouMessage: string;

  // Header (redesign)
  badgeAvailable: string;
  headerTitle: string;
  headerDescription: string;
  viewMyWork: string;
  yearsExp: string;
  projectsCount: string;
  coffee: string;

  // Footer
  letsWorkTogether: string;
  hireMe: string;
  letsWorkTogetherSubtitle: string;

  // About (redesign)
  whoIAm: string;

  // Experience (redesign)
  whereIveWorked: string;

  // Skills (redesign)
  mySkillsTitle: string;
  whatIBuildWith: string;
  frontend: string;
  backend: string;
  devops: string;

  // Projects (redesign)
  thingsIveBuilt: string;

  // Meta tags
  portfolioTitle: string;
  portfolioDescription: string;

  // Language switcher
  language: string;

  // Project modal
  projectModal: {
    caseStudy: string;
    challenge: string;
    solution: string;
    result: string;
    technologies: string;
    visitProject: string;
  };

  // Project case studies
  caseStudies: {
    collabpulse: {
      challenge: string;
      solution: string;
      result: string;
    };
    aurinia: {
      challenge: string;
      solution: string;
      result: string;
    };
    oschadpay: {
      challenge: string;
      solution: string;
      result: string;
    };
    onboarding: {
      challenge: string;
      solution: string;
      result: string;
    };
    aurabeauty: {
      challenge: string;
      solution: string;
      result: string;
    };
    jsontojsx: {
      challenge: string;
      solution: string;
      result: string;
    };
  };

  // Projects data
  projectsData: {
    aurinia: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    collabpulse: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    cfweb: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    oschadpay: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    onboarding: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    hostel: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    deals: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    candidates: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    webstudio: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    novus: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    aurabeauty: {
      title: string;
      description: string;
      additionalInfo: string;
    };
    jsontojsx: {
      title: string;
      description: string;
      additionalInfo: string;
    };
  };

  // Experience data
  experienceData: {
    ukrpay: {
      position: string;
      companyDescription: string;
      achievements: string[];
      tags: string[];
    };
    atlana: {
      position: string;
      companyDescription: string;
      achievements: string[];
      tags: string[];
    };
    impltech: {
      position: string;
      companyDescription: string;
      achievements: string[];
      tags: string[];
    };
    freelance: {
      position: string;
      companyDescription: string;
      achievements: string[];
      tags: string[];
    };
  };

  // Demo page
  demo: {
    title: string;
    subtitle: string;
    connected: string;
    disconnected: string;
    reconnecting: string;
    backToPortfolio: string;
    loadingChart: string;
    range: string;
    marketData: string;
    searchPlaceholder: string;
    all: string;
    gainers: string;
    losers: string;
    symbol: string;
    price: string;
    change24h: string;
    volume: string;
    marketCap: string;
    noResults: string;
    tryLiveDemo: string;
  };
}

export const translations: Record<
  "en" | "uk" | "bg" | "pl" | "it" | "fr",
  Translation
> = {
  en: {
    // Header
    greeting: "Hello, I'm",
    name: "Volodymyr Pestov",
    downloadCV: "Download CV",

    // Navigation
    about: "about",
    skills: "skills",
    experience: "experience",
    projects: "projects",
    contact: "mail me",

    // About section
    aboutMe: "About me",
    aboutBgText: "Aboutme",
    jobTitle: "Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer with 6+ years of experience building high-performance fintech platforms. Expertise in scalable React/TypeScript frontends and Node.js/NestJS backends with PostgreSQL. Proven track record of leading teams and delivering enterprise solutions end-to-end.",
    personalInfo: {
      name: "Name",
      birthday: "Birthday",
      degree: "Degree",
      experience: "Experience",
      phone: "Phone",
      email: "Email",
      address: "Address",
      freelance: "Freelance",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Available",
    master: "Master",
    fiveYearsPlus: "6+ years",

    // Skills section
    mySkills: "My Skills",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Work Experience",
    experienceBgText: "Experience",

    // Projects section
    portfolio: "portfolio",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Contact Me",
    contactBgText: "Contact",
    sendMeLetter: "Send me a letter",
    mailMe: "Mail me",
    namePlaceholder: "Name...",
    emailPlaceholder: "Email...",
    messagePlaceholder: "Your message...",
    sendButton: "Send",
    thankYouMessage: "Thank you for your message!",

    // Header (redesign)
    badgeAvailable: "available for work",
    headerTitle: "Who am I..?",
    headerDescription:
      "Building high-performance web applications with modern technologies and clean, maintainable architecture.",
    viewMyWork: "view my work",
    yearsExp: "YEARS EXP.",
    projectsCount: "PROJECTS",
    coffee: "COFFEE",

    // Footer
    letsWorkTogether: "Let's work together",
    hireMe: "hire me",
    letsWorkTogetherSubtitle:
      "Have a project in mind? I'd love to hear about it.",

    // About (redesign)
    whoIAm: "Who I am",

    // Experience (redesign)
    whereIveWorked: "Where I've worked",

    // Skills (redesign)
    mySkillsTitle: "My skills",
    whatIBuildWith: "What I build with",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Things I've built",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer with 6+ years of experience — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — portfolio of Volodymyr Pestov",

    // Language switcher
    language: "Language",

    // Project modal
    projectModal: {
      caseStudy: "Case Study",
      challenge: "Challenge",
      solution: "Solution",
      result: "Result",
      technologies: "Technologies",
      visitProject: "Visit Project",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "Teams working on short-lived projects had no lightweight tool for coordination. Traditional project management software was too heavy — creating a project, assigning tasks, and tracking micro-deliverables required too much setup. Collaboration happened across scattered chats and threads with no unified pulse on team activity or progress.",
        solution:
          "Built a micro-collaboration platform where teams can spin up focused workspaces in seconds, assign micro-tasks, and track activity in real time. Integrated a product management layer and checkout flow so teams can package and monetise their collaborative output. The admin panel gives full visibility into workspaces, members, and billing from a single control surface.",
        result:
          "Coordination overhead reduced significantly — teams go from idea to active workspace in under a minute. Monetisation of collaboration services enabled directly within the platform, eliminating the need for third-party billing tools. Admin panel consolidates workspace health, user management, and revenue tracking in one place.",
      },
      aurinia: {
        challenge:
          "A materials retailer was managing inventory, orders, and customer data across spreadsheets and disconnected tools. Product listings required manual updates, the checkout process was handled externally, and the admin had no real-time view of stock levels or order status — leading to fulfilment errors and lost sales.",
        solution:
          "Delivered a full-stack e-commerce platform with a product catalogue supporting rich material descriptions, pricing tiers, and image management. Built a multi-step checkout with order validation and confirmation emails. The admin panel covers the complete order lifecycle — from placement through fulfilment — alongside inventory management, category configuration, and sales reporting.",
        result:
          "Inventory sync made manual stock updates obsolete — catalogue changes reflect instantly in the storefront. Order processing errors dropped to near zero through structured checkout validation. Admin gained real-time visibility into stock levels, pending orders, and revenue without leaving the platform.",
      },
      oschadpay: {
        challenge:
          "The bank operated dozens of payment terminals with no unified dashboard. Transaction creation was manual, merchant onboarding took days, product catalogues lived in spreadsheets, and generating tax-compliant reports required hours of data stitching across multiple systems.",
        solution:
          "Built a centralised web platform that covers the full payment operations workflow: create and track transactions in real time, register and manage merchants with their product catalogues, provision and monitor POS terminals remotely, and generate structured reports ready for tax authority submission — all from a single interface with role-based access control.",
        result:
          "Terminal onboarding time reduced from days to minutes. Tax report preparation automated — from hours of manual work to one-click generation. Full visibility into transactions, merchants, and terminal health through a real-time dashboard.",
      },
      onboarding: {
        challenge:
          "The process of launching new payment products took weeks, as each new form required a full development, testing, and frontend deployment cycle.",
        solution:
          "Developed a custom No-Code system based on JSON Schema and React. Implemented a visual constructor with 30+ field types, complex conditional logic, and on-the-fly validation. Applied React virtualization for large forms (100+ fields) to maintain high performance.",
        result:
          "Complete elimination of developer dependency when creating forms. Time-to-Market reduced from several weeks to several hours.",
      },
      aurabeauty: {
        challenge:
          "Beauty salons rely on phone or manual form bookings — a friction-heavy process that loses clients who want to book outside business hours. Staff spend significant time fielding routine scheduling calls, and there is no intelligent layer to handle availability conflicts, master preferences, or disambiguation when multiple specialists share a name.",
        solution:
          "Built a full-stack salon platform with an agentic AI booking assistant powered by Gemini. The assistant conducts natural multi-turn conversations, checks real-time master availability from Supabase, handles disambiguation when multiple masters share a first name, and confirms bookings atomically with Telegram notifications to the owner.",
        result:
          "Clients book 24/7 through a conversational UI in under two minutes. The AI agent reduces front-desk scheduling load to near zero for routine appointments. Master availability conflicts are eliminated through real-time slot locking.",
      },
      jsontojsx: {
        challenge:
          "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces — with no direct path from a high-level description to deployable code. AI tools generate form markup without state management, missing form elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
        solution:
          "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type that encodes field definitions alongside the UI tree. The engine has two output paths: a live React renderer for instant preview, and a TSX codegen pipeline that emits fully typed interfaces, useState hooks, curried handleChange callbacks, and handleSubmit functions. An AI playground integrates three LLM providers, supports multi-variant generation, and includes prompt-based editing.",
        result:
          "From a single natural language prompt to a running React preview and production-ready TSX in seconds — including complete form state management. The Form node handles all Mantine v7 input variants with correct onChange signatures. The pipeline is covered by 174 automated tests.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - E-commerce Platform",
        description:
          "Modern e-commerce platform with advanced product management, checkout process, and admin panel.",
        additionalInfo:
          "Full-featured online store with material management and comprehensive order processing",
      },
      collabpulse: {
        title: "CollabPulse - Micro-collaboration Platform",
        description:
          "Modern micro-collaboration platform with advanced product management, checkout process, and admin panel.",
        additionalInfo:
          "Full-featured micro-collaboration platform with advanced product management, checkout process, and admin panel",
      },
      cfweb: {
        title: "Credit Factory - Corporate Finance Web Application",
        description:
          "Comprehensive corporate finance management system with user roles, product management, and regulatory compliance features.",
        additionalInfo:
          "Enterprise-level financial management platform with advanced user management and compliance tools",
      },
      oschadpay: {
        title: "OschadPay - Payment Processing System",
        description:
          "Enterprise-grade payment processing platform for financial institutions. Enables end-to-end transaction lifecycle management, POS terminal provisioning, merchant and product control, and automated tax reporting.",
        additionalInfo:
          "Transaction creation & monitoring · Tax-ready report generation · Merchant & product registry · Terminal provisioning & management · Financial analytics dashboard",
      },
      onboarding: {
        title: "Onboarding - Questionnaire Management System",
        description:
          "Comprehensive questionnaire and form management system with templates, categories, and field configuration.",
        additionalInfo:
          "Enterprise-level form builder with template management, category organization, and advanced field customization",
      },
      hostel: {
        title: "Hostel management system",
        description:
          "Complete hostel management solution with room booking, guest registration, and administrative dashboard for accommodation facilities.",
        additionalInfo:
          "Full-stack booking system with real-time availability, guest management, and reservation tracking · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "Deal crm system",
        description:
          "Customer relationship management platform for tracking deals, managing client interactions, and monitoring sales pipeline progress.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - Candidates crm system",
        description:
          "Recruitment management system for tracking job candidates, managing interview processes, and organizing hiring workflows.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Web-studio",
        description: "Web-studio for creating websites.",
        additionalInfo:
          "Landing page for a digital agency with modern UI/UX and smooth animations · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Web Development Agency",
        description:
          "Modern web development agency website with sleek design, smooth animations, and responsive layout.",
        additionalInfo:
          "Creative agency landing page with modern animations and premium design · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — AI Booking Platform",
        description:
          "Premium beauty salon landing with an AI-powered booking assistant that handles appointments through natural conversation, master availability checking, and instant confirmation.",
        additionalInfo:
          "Multi-theme salon platform with Gemini AI booking agent, Supabase auth, master scheduling, and Telegram notifications · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
        description:
          "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating and editing components through natural language.",
        additionalInfo:
          "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Full-Stack Developer",
        companyDescription:
          "Ukrpay is a leading Ukrainian fintech company specializing in end-to-end payment solutions for banks, financial institutions, and merchants. The company builds robust infrastructure for transaction processing, POS terminal management, and merchant ecosystems — powering thousands of daily financial operations across the country.",
        achievements: [
          "Architected merchant management platform serving 500+ merchants and processing 10,000+ daily transactions with zero downtime during 3x user growth.",
          "Designed and implemented a reusable component library with 40+ components, cutting feature development time by 40%.",
          "Optimized application bundle with code-splitting and lazy loading, improving initial page load by 35%.",
          "Platform scaled 3x with zero architecture rewrites.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription:
          "Atlana is a web development company specialized in providing tailored web solutions for business needs. Solid expertise covers wide range of successfully completed projects from startups to international government portals.",
        achievements: [
          "Built an end-to-end property listing platform with interactive Mapbox map, geolocation filters, and neighborhood-level search — enabling users to explore listings visually across the city.",
          "Implemented saved searches, property comparison, and user watchlists — increasing session depth and return visit rate for the platform.",
          "Achieved 95+ Lighthouse scores and 50% faster page loads via Next.js SSG, structured data markup, and image optimization.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription:
          "Impltech is a custom software development company delivering tailor-made digital products for clients across finance, trading, and tech industries. The team brings deep engineering expertise to build high-performance, data-intensive applications from the ground up.",
        achievements: [
          "Developed a real-time trading interface for a brokerage platform streaming live price feeds for 50+ instruments via WebSocket with sub-50ms UI latency.",
          "Built interactive candlestick charts with multiple timeframes, technical indicators, and drawing tools — delivering a professional-grade trading experience.",
          "Implemented a full order management system supporting market, limit, and stop orders with instant execution feedback and real-time portfolio P&L tracking.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Freelance Front-End Developer",
        companyDescription:
          "Independent freelance practice delivering custom web solutions for small and medium businesses across various industries. Focused on building responsive, performant websites and web apps from scratch — from design to deployment.",
        achievements: [
          "Developed an online booking system for a beauty salon with a real-time appointment calendar, client notifications, and an admin dashboard — replacing a fully manual workflow.",
          "Created a product catalogue web app for a wholesale supplier with dynamic filtering, search, and a PDF price-list export feature.",
          "Delivered a landing page funnel for a coaching business with integrated contact forms, analytics tracking, and A/B-tested CTA sections — increasing lead conversion by 30%.",
          "Built a personal portfolio and blog platform for a photographer with a custom image gallery, lazy loading, and SEO optimisation — achieving 90+ Lighthouse score.",
        ],
        tags: [
          "4 Projects Delivered",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Live Demo: Real-Time Crypto Dashboard",
      subtitle: "WebSocket · SVG Charts · Data Visualization",
      connected: "Connected",
      disconnected: "Disconnected",
      reconnecting: "Reconnecting...",
      backToPortfolio: "Back to Portfolio",
      loadingChart: "Loading chart data...",
      range: "Range",
      marketData: "Market Data",
      searchPlaceholder: "Search symbol...",
      all: "All",
      gainers: "Gainers",
      losers: "Losers",
      symbol: "Symbol",
      price: "Price",
      change24h: "24h Change",
      volume: "Volume",
      marketCap: "Market Cap",
      noResults: "No results found",
      tryLiveDemo: "Try Live Demo",
    },
  },

  uk: {
    // Header
    greeting: "Привіт, я",
    name: "Володимир",
    downloadCV: "Завантажити CV",

    // Navigation
    about: "про мене",
    skills: "навички",
    experience: "досвід",
    projects: "проекти",
    contact: "написати",

    // About section
    aboutMe: "Про мене",
    aboutBgText: "Aboutme",
    jobTitle: "Senior Full-Stack Розробник",
    description:
      "Senior Full-Stack розробник з 6+ роками досвіду створення високопродуктивних фінтех-платформ. Експертиза у масштабованих React/TypeScript фронтендах та Node.js/NestJS бекендах з PostgreSQL. Підтверджений досвід керівництва командами та розробки enterprise-рішень від ідеї до продакшну.",
    personalInfo: {
      name: "Ім'я",
      birthday: "День народження",
      degree: "Освіта",
      experience: "Досвід",
      phone: "Телефон",
      email: "Електронна пошта",
      address: "Адреса",
      freelance: "Фріланс",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Доступний",
    master: "Магістр",
    fiveYearsPlus: "6+ років",

    // Skills section
    mySkills: "Мої навички",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Досвід роботи",
    experienceBgText: "Досвід",

    // Projects section
    portfolio: "портфоліо",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Зв'язатися зі мною",
    contactBgText: "Контакти",
    sendMeLetter: "Напишіть мені",
    mailMe: "Mail me",
    namePlaceholder: "Ім'я...",
    emailPlaceholder: "Електронна пошта...",
    messagePlaceholder: "Ваше повідомлення...",
    sendButton: "Відправити",
    thankYouMessage: "Дякую за ваше повідомлення!",

    // Header (redesign)
    badgeAvailable: "доступний для роботи",
    headerTitle: "Хто я..?",
    headerDescription:
      "Розробка високопродуктивних веб-додатків із сучасними технологіями та чистою, підтримуваною архітектурою.",
    viewMyWork: "дивитись мої роботи",
    yearsExp: "РОКІВ ДОСВІДУ",
    projectsCount: "ПРОЕКТІВ",
    coffee: "КАВИ",

    // Footer
    letsWorkTogether: "Давайте працювати разом",
    hireMe: "найміть мене",
    letsWorkTogetherSubtitle:
      "Маєте проект на думці? Я хотів би почути про нього.",

    // About (redesign)
    whoIAm: "Хто я",

    // Experience (redesign)
    whereIveWorked: "Де я працював",

    // Skills (redesign)
    mySkillsTitle: "Мої навички",
    whatIBuildWith: "Чим я працюю",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Що я створив",

    // Meta tags
    portfolioTitle: "Володимир Пестов — Senior Full-Stack Розробник",
    portfolioDescription:
      "Senior Full-Stack розробник з 6+ роками досвіду — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — портфоліо Володимира Пестова",

    // Language switcher
    language: "Мова",

    // Project modal
    projectModal: {
      caseStudy: "Кейс",
      challenge: "Виклик",
      solution: "Рішення",
      result: "Результат",
      technologies: "Технології",
      visitProject: "Відвідати проект",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "Команди, які працювали над короткостроковими проектами, не мали легкого інструменту для координації. Традиційне ПЗ для управління проектами було надто важким — створення проекту, призначення завдань та відстеження мікро-результатів вимагало занадто багато налаштувань. Співпраця відбувалась в розрізнених чатах та потоках без єдиного погляду на активність та прогрес команди.",
        solution:
          "Створив платформу мікро-колабораціі, де команди можуть створювати сфокусовані робочі простори за секунди, призначати мікро-завдання та відстежувати активність в реальному часі. Інтегрував шар управління продуктами та checkout-процес, щоб команди могли упаковувати та монетизувати свої результати спільної роботи. Адміністративна панель надає повну видимість робочих просторів, членів та біллінгу з єдиного інтерфейсу.",
        result:
          "Накладні витрати на координацію суттєво скоротились — команди переходять від ідеї до активного робочого простору за менше однієї хвилини. Монетизація послуг співпраці ввімкнута прямо на платформі, усуваючи потребу в сторонніх інструментах біллінгу. Адміністративна панель консолідує здоров'я робочих просторів, управління користувачами та аналітику доходу в одному місці.",
      },
      aurinia: {
        challenge:
          "Розничний продавець матеріалів управляв інвентарем, замовленнями та даними клієнтів розрізнено через таблиці й відокремлені інструменти. Оновлення списків товарів вимагало ручної роботи, процес оформлення було делеговано зовні, а адміністратор не мав real-time виду на рівні запасів або статус замовлень — що призводило до помилок у виконанні та втрати продажів.",
        solution:
          "Розробив повнофункціональну платформу електронної комерції з каталогом товарів, що підтримує багаті описи матеріалів, рівні цін та управління зображеннями. Побудував багатоступеневий checkout з валідацією замовлень та листами підтвердження. Адміністративна панель охоплює повний життєвий цикл замовлень — від розміщення до виконання — разом з управлінням інвентарем, конфігурацією категорій та аналітикою продажів.",
        result:
          "Синхронізація інвентарю усунула ручні оновлення запасів — зміни каталогу миттєво відображаються на скажинці. Помилки обробки замовлень впали майже до нуля завдяки структурованій валідації checkout. Адміністратор отримав real-time видимість рівнів запасів, очікуючих замовлень та доходу без виходу з платформи.",
      },
      oschadpay: {
        challenge:
          "Банк керував десятками платіжних терміналів без єдиного дашборда. Створення транзакцій було ручним, онбординг мерчантів займав дні, каталоги товарів зберігалися в таблицях, а формування податкових звітів вимагало годин ручного зведення даних з різних систем.",
        solution:
          "Створив централізовану веб-платформу, що охоплює повний цикл платіжних операцій: створення та відстеження транзакцій в реальному часі, реєстрація та управління мерчантами з їх каталогами товарів, віддалене підключення та моніторинг POS-терміналів, генерація структурованих звітів для податкової — все з єдиного інтерфейсу з рольовим доступом.",
        result:
          "Час підключення терміналів скоротився з днів до хвилин. Підготовка податкових звітів автоматизована — з годин ручної роботи до одного кліку. Повна прозорість транзакцій, мерчантів та стану терміналів через real-time дашборд.",
      },
      onboarding: {
        challenge:
          "Процес запуску нових платіжних продуктів займав тижні, оскільки кожна нова форма вимагала повного циклу розробки, тестування та деплою фронтенду.",
        solution:
          "Розробив власну No-Code систему на базі JSON Schema та React. Впровадив візуальний конструктор з 30+ типами полів, складною умовною логікою та валідацією на льоту. Для роботи з великими формами (100+ полів) застосував віртуалізацію React для підтримки високої продуктивності.",
        result:
          "Повна ліквідація залежності від розробників при створенні форм. Час виходу продукту на ринок (Time-to-Market) скоротився з кількох тижнів до кількох годин.",
      },
      aurabeauty: {
        challenge:
          "Б'юті-салони залежали від телефонних дзвінків або ручних форм для запису — це гальмує клієнтів, які хочуть записатись поза робочим часом. Персонал витрачає значний час на рутинні дзвінки, а конфлікти розкладу та неоднозначність при збігу імен майстрів вирішуються вручну.",
        solution:
          "Розроблено повнофункціональну платформу для салону з агентним AI-асистентом на базі Gemini. Асистент веде природні діалоги, перевіряє доступність майстрів у реальному часі через Supabase, розмежовує майстрів з однаковими іменами та атомарно підтверджує запис з Telegram-сповіщенням власнику.",
        result:
          "Клієнти записуються 24/7 через розмовний UI менш ніж за дві хвилини. AI-агент зводить навантаження на адміністратора до мінімуму. Конфлікти доступності майстрів усунуті через блокування слотів у реальному часі.",
      },
      jsontojsx: {
        challenge:
          "Прототипування UI-компонентів вимагає перемикання між дизайн-інструментами, редакторами коду та AI-чатами — без прямого шляху від опису до готового коду. AI-інструменти генерують розмітку форм без стану, без тегу form та без контрольованих інпутів — код, який виглядає правильно, але не можна вставити в React-проект без суттєвого доопрацювання.",
        solution:
          "Розроблено schema engine, що стоїть між виводом AI та production-кодом. JSON-схема описує компоненти декларативно, включаючи тип Form, який кодує визначення полів разом з UI-деревом. Два шляхи виводу: живий React-рендерер для миттєвого прев'ю та codegen-пайплайн, що генерує типізовані інтерфейси, useState, handleChange та handleSubmit. AI-playground інтегрує три LLM-провайдери з мульти-варіантною генерацією та редагуванням за промптом.",
        result:
          "Від природномовного промпту до живого React-прев'ю та production-готового TSX за секунди — включно з повним управлінням станом форми. Form node обробляє всі варіанти Mantine v7 інпутів з правильними сигнатурами onChange. Пайплайн покритий 174 автотестами.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - Платформа електронної комерції",
        description:
          "Сучасна платформа електронної комерції з розширеним управлінням товарами, процесом оформлення замовлення та адміністративною панеллю.",
        additionalInfo:
          "Повнофункціональний інтернет-магазин з управлінням матеріалами та комплексною обробкою замовлень",
      },
      collabpulse: {
        title: "CollabPulse - Платформа мікро-колабораціі",
        description:
          "Сучасна платформа мікро-колабораціі з розширеним управлінням продуктами, процесом оформлення та адміністративною панеллю.",
        additionalInfo:
          "Повнофункціональна платформа мікро-колабораціі з розширеним управлінням продуктами, процесом оформлення та адміністративною панеллю",
      },
      cfweb: {
        title: "Credit Factory - Веб-додаток корпоративних фінансів",
        description:
          "Комплексна система управління корпоративними фінансами з користувацькими ролями, управлінням продуктами та функціями регуляторної відповідності.",
        additionalInfo:
          "Фінансова платформа корпоративного рівня з розширеним управлінням користувачами та інструментами відповідності",
      },
      oschadpay: {
        title: "OschadPay - Система обробки платежів",
        description:
          "Платформа обробки платежів корпоративного рівня для фінансових установ. Забезпечує наскрізне управління життєвим циклом транзакцій, підключення POS-терміналів, контроль мерчантів та продуктів, автоматизовану податкову звітність.",
        additionalInfo:
          "Створення та моніторинг транзакцій · Генерація податкових звітів · Реєстр мерчантів та продуктів · Підключення та управління терміналами · Дашборд фінансової аналітики",
      },
      onboarding: {
        title: "Onboarding - Система управління анкетами",
        description:
          "Комплексна система управління анкетами та формами з шаблонами, категоріями та налаштуванням полів.",
        additionalInfo:
          "Конструктор форм корпоративного рівня з управлінням шаблонами, організацією категорій та розширеним налаштуванням полів",
      },
      hostel: {
        title: "Система управління хостелом",
        description:
          "Повноцінне рішення для управління хостелом з бронюванням кімнат, реєстрацією гостей та адміністративним дашбордом для об'єктів розміщення.",
        additionalInfo:
          "Full-stack система бронювання з доступністю в реальному часі, управлінням гостями та відстеженням резервацій · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "CRM система для угод",
        description:
          "Платформа управління відносинами з клієнтами для відстеження угод, керування взаємодією з клієнтами та моніторингу прогресу воронки продажів.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - CRM система кандидатів",
        description:
          "Система управління рекрутингом для відстеження кандидатів на роботу, управління процесами співбесід та організації робочих процесів найму.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Веб-студія",
        description: "Веб-студія для створення веб-сайтів.",
        additionalInfo:
          "Лендінг для діджитал-агентства з сучасним UI/UX та плавними анімаціями · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Агентство веб-розробки",
        description:
          "Сучасний сайт агентства веб-розробки з елегантним дизайном, плавними анімаціями та адаптивною версткою.",
        additionalInfo:
          "Креативний лендінг агентства з сучасними анімаціями та преміум-дизайном · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — AI-платформа для запису",
        description:
          "Преміальний лендінг б'юті-салону з AI-асистентом для запису, який веде природні діалоги, перевіряє доступність майстрів та миттєво підтверджує запис.",
        additionalInfo:
          "Мультитемна платформа з Gemini AI-агентом, Supabase, розкладом майстрів та Telegram-сповіщеннями · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — Schema Engine з AI-Playground",
        description:
          "Schema-driven рушій генерації UI, який перетворює JSON-схеми компонентів у живі React-прев'ю та production-готовий TSX-код із AI-playground для генерації та редагування компонентів через природну мову.",
        additionalInfo:
          "Turborepo монорепо · JSON схема → React рендерер · TSX codegen зі станом форми · Мульти-провайдерна AI генерація · 174 тести · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Full-Stack Розробник",
        companyDescription:
          "Ukrpay — провідна українська фінтех-компанія, що спеціалізується на комплексних платіжних рішеннях для банків, фінансових установ та мерчантів. Компанія будує надійну інфраструктуру для обробки транзакцій, управління POS-терміналами та мерчант-екосистемами — забезпечуючи тисячі щоденних фінансових операцій по всій країні.",
        achievements: [
          "Архітектура платформи управління мерчантами, що обслуговує 500+ мерчантів та обробляє 10,000+ щоденних транзакцій з нульовим простоєм під час 3x зростання користувачів.",
          "Розробка та впровадження бібліотеки компонентів з 40+ компонентами, що скоротило час розробки функцій на 40%.",
          "Оптимізація бандлу додатку з code-splitting та lazy loading, покращення початкового завантаження сторінки на 35%.",
          "Платформа масштабована в 3x без перепроектування архітектури.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Front-End Розробник",
        companyDescription:
          "Atlana — веб-розробна компанія, спеціалізована на розробці кастомізованих веб-рішень для бізнес-потреб. Міцна експертиза охоплює широкий спектр успішно реалізованих проектів від стартапів до міжнародних державних порталів.",
        achievements: [
          "Розробив платформу об'яв нерухомості з інтерактивною картою Mapbox, геолокаційними фільтрами та пошуком на рівні кварталів — дозволяючи користувачам переглядати оголошення візуально по всьому місту.",
          "Реалізував збережені пошуки, порівняння об'єктів нерухомості та списки спостереження — збільшивши глибину сесій та кількість повторних відвідувань платформи.",
          "Досяг 95+ балів Lighthouse та пришвидшив завантаження сторінок на 50% за допомогою Next.js SSG, розмітки структурованих даних та оптимізації зображень.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Front-End Розробник",
        companyDescription:
          "Impltech — компанія з розробки кастомного програмного забезпечення, що створює цифрові продукти на замовлення для клієнтів у сферах фінансів, трейдингу та технологій. Команда поєднує глибоку інженерну експертизу для створення високопродуктивних, data-intensive додатків з нуля.",
        achievements: [
          "Розробив торговий інтерфейс реального часу для брокерської платформи, що транслює живі цінові потоки для 50+ інструментів через WebSocket із затримкою UI менше 50мс.",
          "Побудував інтерактивні свічкові графіки з кількома таймфреймами, технічними індикаторами та інструментами малювання — забезпечивши трейдинговий досвід професійного рівня.",
          "Реалізував повну систему управління ордерами з підтримкою ринкових, лімітних та стоп-ордерів із миттєвим зворотним зв'язком про виконання та відстеженням P&L портфеля в реальному часі.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Freelance Front-End Розробник",
        companyDescription:
          "Самостійна фріланс-практика — розробка кастомних веб-рішень для малого та середнього бізнесу в різних галузях. Фокус на створенні адаптивних, продуктивних сайтів та веб-додатків з нуля — від дизайну до деплою.",
        achievements: [
          "Створив систему онлайн-бронювання для салону краси з календарем запису в реальному часі, сповіщеннями клієнтів та адмін-панеллю — повністю замінив ручний процес.",
          "Розробив веб-додаток каталогу продукції для оптового постачальника з динамічною фільтрацією, пошуком та функцією експорту прайс-листа в PDF.",
          "Реалізував лендінг-воронку для коучингового бізнесу з формами зворотнього зв'язку, відстеженням аналітики та A/B-тестованими CTA-секціями — конверсія лідів зросла на 30%.",
          "Побудував портфоліо та блог-платформу для фотографа з кастомною галереєю зображень, lazy loading та SEO-оптимізацією — досягнуто 90+ балів Lighthouse.",
        ],
        tags: [
          "4 реалізованих проекти",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Жива демка: Криpto дашборд в реальному часі",
      subtitle: "WebSocket · SVG графіки · Візуалізація даних",
      connected: "Підключено",
      disconnected: "Відключено",
      reconnecting: "Підключення...",
      backToPortfolio: "Назад до портфоліо",
      loadingChart: "Завантаження графіка...",
      range: "Діапазон",
      marketData: "Ринкові дані",
      searchPlaceholder: "Пошук символу...",
      all: "Всі",
      gainers: "Зростання",
      losers: "Падіння",
      symbol: "Символ",
      price: "Ціна",
      change24h: "Зміна 24г",
      volume: "Обсяг",
      marketCap: "Ринкова капіталізація",
      noResults: "Результатів не знайдено",
      tryLiveDemo: "Спробувати живу демку",
    },
  },

  bg: {
    // Header
    greeting: "Здравей, аз съм",
    name: "Володимир",
    downloadCV: "Изтегли CV",

    // Navigation
    about: "за мен",
    skills: "умения",
    experience: "опит",
    projects: "проекти",
    contact: "пиши ми",

    // About section
    aboutMe: "За мен",
    aboutBgText: "Aboutme",
    jobTitle: "Senior Full-Stack Разработчик",
    description:
      "Senior Full-Stack разработчик с 6+ години опит в изграждането на високопроизводителни финтех платформи. Експертиза в мащабируеми React/TypeScript фронтенди и Node.js/NestJS бекенди с PostgreSQL. Доказан опит в ръководство на екипи и доставяне на корпоративни решения от идея до продукция.",
    personalInfo: {
      name: "Име",
      birthday: "Рожден ден",
      degree: "Образование",
      experience: "Опит",
      phone: "Телефон",
      email: "Електронна поща",
      address: "Адрес",
      freelance: "Фрийланс",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Наличен",
    master: "Магистър",
    fiveYearsPlus: "6+ години",

    // Skills section
    mySkills: "Моите умения",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Трудов опит",
    experienceBgText: "Опит",

    // Projects section
    portfolio: "портфолио",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Свържи се с мен",
    contactBgText: "Контакти",
    sendMeLetter: "Пиши ми",
    mailMe: "Mail me",
    namePlaceholder: "Име...",
    emailPlaceholder: "Електронна поща...",
    messagePlaceholder: "Твоето съобщение...",
    sendButton: "Изпрати",
    thankYouMessage: "Благодаря за съобщението!",

    // Header (redesign)
    badgeAvailable: "достъпен за работа",
    headerTitle: "Кой съм аз..?",
    headerDescription:
      "Разработка на високопроизводителни уеб приложения със съвременни технологии и чиста, поддържаема архитектура.",
    viewMyWork: "виж моята работа",
    yearsExp: "ГОДИНИ ОПИТ",
    projectsCount: "ПРОЕКТИ",
    coffee: "КАФЕ",

    // Footer
    letsWorkTogether: "Да работим заедно",
    hireMe: "наеми ме",
    letsWorkTogetherSubtitle: "Имаш проект на ум? Бих искал да чуя за него.",

    // About (redesign)
    whoIAm: "Кой съм аз",

    // Experience (redesign)
    whereIveWorked: "Където съм работил",

    // Skills (redesign)
    mySkillsTitle: "Моите умения",
    whatIBuildWith: "С какво работя",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Какво съм направил",

    // Meta tags
    portfolioTitle: "Володимир Пестов — Senior Full-Stack Разработчик",
    portfolioDescription:
      "Senior Full-Stack разработчик с 6+ години опит — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — портфолио на Володимир Пестов",

    // Language switcher
    language: "Език",

    // Project modal
    projectModal: {
      caseStudy: "Казус",
      challenge: "Предизвикателство",
      solution: "Решение",
      result: "Резултат",
      technologies: "Технологии",
      visitProject: "Посетете проекта",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "Екипи, работещи върху краткосрочни проекти, нямаха лекотежен инструмент за координация. Традиционният софтуер за управление на проекти беше твърде тежък — създаването на проект, приписване на задачи и проследяване на микро-доставки изискваше твърде много настройка. Сътрудничеството се случваше в разпръснати чатове и нишки без единствен поглед на активността на екипа или напредъка.",
        solution:
          "Построена е платформа за микро-сътрудничество, където екипи могат да създават фокусирани работни пространства за секунди, да приписват микро-задачи и да проследяват активността в реално време. Интегрирана е управленска функция и процес на плащане, така че екипите могат да пакетират и монетизират своята съвместна продукция. Административният панел дава пълна видимост върху работните пространства, членовете и фактурирането от един контролен повърхност.",
        result:
          "Преките разходи за координация са намалени значително — екипи преминават от идея до активно работно пространство за под една минута. Монетизацията на съвместни услуги е възможна директно в платформата, елиминирайки необходимостта от стороннишки инструменти за фактуриране. Административният панел консолидира здравето на работните пространства, управлението на потребители и проследяването на приходите на един място.",
      },
      aurinia: {
        challenge:
          "Един разпродавач на материали управляваше запаси, поръчки и данни на клиентите в електронни таблици и несвързани инструменти. Списъците с продукти изискваха ръчни актуализации, процесът на плащане беше обработван външно, а администраторът нямаше поглед в реално време на нивата на запаса или статуса на поръчките — което води до грешки при изпълнението и загубени продажби.",
        solution:
          "Доставена е пълнофункционална платформа за електронна търговия с каталог на продукти, поддържащ богати описания на материали, ценови нива и управление на изображения. Построен е многостепенен процес на плащане с валидиране на поръчките и потвърждени имейли. Административният панел покрива пълния жизнен цикъл на поръчките — от поставяне до изпълнение — наред с управлението на запаси, конфигурация на категории и отчитане на продажби.",
        result:
          "Синхронизирането на запаса направи ръчни актуализации излишни — промените в каталога се отразяват мигновено в магазина. Грешките при обработката на поръчки спаднаха почти до нула чрез структурирана валидация при плащане. Администраторът получи видимост в реално време на нивата на запаса, очакващи поръчки и приходи, без да напуска платформата.",
      },
      oschadpay: {
        challenge:
          "Банката управляваше десетки платежни терминали без единен контролен панел. Създаването на транзакции беше ръчно, въвеждането на търговци отнемаше дни, каталозите с продукти се съхраняваха в електронни таблици, а генерирането на отчети, съобразени с данъчното законодателство, изискваше часове на обработка на данни от множество системи.",
        solution:
          "Изградена е централизирана уеб платформа, която обхваща пълния работен процес на платежните операции: създаване и проследяване на транзакции в реално време, регистриране и управление на търговци с техните каталози с продукти, отдалечено осигуряване и наблюдение на POS терминали и генериране на структурирани отчети, готови за подаване до данъчните органи — всичко това от един интерфейс с контрол на достъпа, базиран на роли.",
        result:
          "Времето за въвеждане на терминали е намалено от дни на минути. Подготовката на данъчни отчети е автоматизирана — от часове на ръчна работа до генериране с едно щракване. Пълна видимост на транзакциите, търговците и състоянието на терминалите чрез табло за управление в реално време.",
      },
      onboarding: {
        challenge:
          "Процесът на стартиране на нови платежни продукти отнемаше седмици, тъй като всяка нова форма изискваше пълен цикъл на разработка, тестване и внедряване на фронтенда.",
        solution:
          "Разработена е персонализирана No-Code система, базирана на JSON Schema и React. Внедрен е визуален конструктор с над 30 типа полета, сложна условна логика и валидация в движение. Приложена е React виртуализация за големи форми (над 100 полета) за поддържане на висока производителност.",
        result:
          "Пълно премахване на зависимостта от разработчици при създаване на форми. Времето за пускане на продукт на пазара е намалено от няколко седмици на няколко часа.",
      },
      aurabeauty: {
        challenge:
          "Beauty salons rely on phone or manual form bookings — a friction-heavy process that loses clients who want to book outside business hours. Staff spend significant time on routine scheduling, and there is no intelligent layer to handle availability conflicts or master disambiguation.",
        solution:
          "Built a full-stack salon platform with an agentic AI booking assistant powered by Gemini. The assistant conducts natural multi-turn conversations, checks real-time master availability from Supabase, handles disambiguation when multiple masters share a first name, and confirms bookings atomically with Telegram notifications.",
        result:
          "Clients book 24/7 through a conversational UI in under two minutes. The AI agent reduces front-desk scheduling load to near zero. Master availability conflicts are eliminated through real-time slot locking.",
      },
      jsontojsx: {
        challenge:
          "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces. AI tools generate form markup without state management, missing form elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
        solution:
          "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type. The engine has two output paths: a live React renderer and a TSX codegen pipeline that emits typed interfaces, useState hooks, and handleChange callbacks. An AI playground integrates three LLM providers with multi-variant generation.",
        result:
          "From a natural language prompt to a running React preview and production-ready TSX in seconds — including complete form state management. The pipeline is covered by 174 automated tests.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - Платформа за електронна търговия",
        description:
          "Модерна платформа за електронна търговия с разширено управление на продукти, процес на плащане и административен панел.",
        additionalInfo:
          "Пълнофункционален онлайн магазин с управление на материали и цялостна обработка на поръчки",
      },
      collabpulse: {
        title: "CollabPulse - Платформа за микро-сътрудничество",
        description:
          "Модерна платформа за микро-сътрудничество с разширено управление на продукти, процес на плащане и административен панел.",
        additionalInfo:
          "Пълнофункционална платформа за микро-сътрудничество с разширено управление на продукти, процес на плащане и административен панел",
      },
      cfweb: {
        title: "Credit Factory - Уеб приложение за корпоративни финанси",
        description:
          "Цялостна система за управление на корпоративни финанси с потребителски роли, управление на продукти и функции за регулаторно съответствие.",
        additionalInfo:
          "Финансова платформа на корпоративно ниво с разширено управление на потребители и инструменти за съответствие",
      },
      oschadpay: {
        title: "OschadPay - Система за обработка на плащания",
        description:
          "Платформа за обработка на плащания от корпоративен клас за финансови институции. Позволява управление на целия жизнен цикъл на транзакции, осигуряване на POS терминали, контрол на търговци и продукти и автоматизирано данъчно отчитане.",
        additionalInfo:
          "Създаване и мониторинг на транзакции · Генериране на данъчни отчети · Регистър на търговци и продукти · Осигуряване и управление на терминали · Табло за финансов анализ",
      },
      onboarding: {
        title: "Onboarding - Система за управление на въпросници",
        description:
          "Цялостна система за управление на въпросници и формуляри със шаблони, категории и конфигурация на полета.",
        additionalInfo:
          "Конструктор на формуляри на корпоративно ниво с управление на шаблони, организация на категории и разширено персонализиране на полета",
      },
      hostel: {
        title: "Система за управление на хостел",
        description:
          "Пълно решение за управление на хостел с резервация на стаи, регистрация на гости и административно табло за места за настаняване.",
        additionalInfo:
          "Fullstack система за резервации с наличност в реално време, управление на гости и проследяване на резервации · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "CRM система за сделки",
        description:
          "Платформа за управление на взаимоотношенията с клиенти за проследяване на сделки, управление на взаимодействия с клиенти и наблюдение на напредъка на продажбената фуния.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - CRM система за кандидати",
        description:
          "Система за управление на набиране на персонал за проследяване на кандидати за работа, управление на процеси на интервюта и организиране на работни потоци за наемане.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Уеб студио",
        description: "Уеб студио за създаване на уебсайтове.",
        additionalInfo:
          "Лендинг страница за дигитална агенция с модерен UI/UX и плавни анимации · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Агенция за уеб разработка",
        description:
          "Модерен уебсайт на агенция за уеб разработка с елегантен дизайн, плавни анимации и адаптивно оформление.",
        additionalInfo:
          "Креативна лендинг страница за агенция с модерни анимации и премиум дизайн · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — AI Booking Platform",
        description:
          "Premium beauty salon landing with an AI-powered booking assistant that handles appointments through natural conversation, master availability checking, and instant confirmation.",
        additionalInfo:
          "Multi-theme salon platform with Gemini AI booking agent, Supabase auth, master scheduling, and Telegram notifications · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
        description:
          "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating components through natural language.",
        additionalInfo:
          "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Full-Stack Разработчик",
        companyDescription:
          "Ukrpay е водеща украинска финтех компания, специализирана в цялостни платежни решения за банки, финансови институции и търговци. Компанията изгражда стабилна инфраструктура за обработка на транзакции, управление на POS терминали и търговски екосистеми — захранвайки хиляди ежедневни финансови операции в цялата страна.",
        achievements: [
          "Архитектура на платформа за управление на търговци, обслужваща 500+ търговци и обработваща 10,000+ дневни транзакции с нулево престой при 3x ръст на потребители.",
          "Проектиране и внедряване на библиотека от компоненти с 40+ компонента, намаляваща времето за разработка на функции с 40%.",
          "Оптимизация на пакета на приложението с code-splitting и lazy loading, подобряване на първоначалното зареждане на страницата с 35%.",
          "Платформата мащабирана 3x без архитектурни преписвания.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Front-End Разработчик",
        companyDescription:
          "Atlana е компания за разработка на уеб приложения, специализирана в предоставянето на персонализирани уеб решения за бизнес нужди. Солидната експертиза обхваща широк спектър от успешно завършени проекти от стартъпи до международни държавни портали.",
        achievements: [
          "Изградих платформа за обяви за имоти с интерактивна Mapbox карта, геолокационни филтри и търсене на ниво квартал — позволявайки на потребителите да разглеждат обяви визуално из целия град.",
          "Внедрих запазени търсения, сравнение на имоти и списъци за наблюдение — увеличавайки дълбочината на сесиите и процента на повторни посещения на платформата.",
          "Постигнах 95+ Lighthouse резултати и 50% по-бързо зареждане чрез Next.js SSG, маркиране на структурирани данни и оптимизация на изображения.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Front-End Разработчик",
        companyDescription:
          "Impltech е компания за разработка на персонализиран софтуер, доставяща дигитални продукти по поръчка за клиенти в областта на финансите, търговията и технологиите. Екипът прилага задълбочена инженерна експертиза за изграждане на високопроизводителни, данъчно-интензивни приложения от нулата.",
        achievements: [
          "Разработих търговски интерфейс в реално време за брокерска платформа, стриймваща живи ценови потоци за 50+ инструмента чрез WebSocket с UI закъснение под 50мс.",
          "Изградих интерактивни свещни графики с множество времеви рамки, технически индикатори и инструменти за рисуване — осигурявайки търговски опит от професионален клас.",
          "Внедрих пълна система за управление на ордери с поддръжка на пазарни, лимитни и стоп-ордери с моментална обратна връзка за изпълнение и проследяване на P&L в реално време.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Фрийланс Front-End Разработчик",
        companyDescription:
          "Самостоятелна фрийланс практика — разработка на персонализирани уеб решения за малък и среден бизнес в различни индустрии. Фокус върху изграждането на адаптивни, производителни уебсайтове и уеб приложения от нулата — от дизайн до деплой.",
        achievements: [
          "Разработих онлайн система за записи за салон за красота с календар в реално време, известия за клиенти и административен панел — напълно замених ръчния процес.",
          "Създадох уеб приложение за каталог на продукти за търговец на едро с динамично филтриране, търсене и функция за експорт на ценова листа в PDF.",
          "Реализирах лендинг фуния за коучинг бизнес с форми за обратна връзка, аналитично проследяване и A/B-тествани CTA секции — конверсията на лийдове нарасна с 30%.",
          "Изградих портфолио и блог платформа за фотограф с персонализирана галерия, lazy loading и SEO оптимизация — постигнат резултат 90+ в Lighthouse.",
        ],
        tags: [
          "4 реализирани проекта",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Жива демонстрация: Крипто табло в реално време",
      subtitle: "WebSocket · SVG графики · Визуализация на данни",
      connected: "Свързан",
      disconnected: "Изключен",
      reconnecting: "Свързване...",
      backToPortfolio: "Обратно към портфолиото",
      loadingChart: "Зареждане на графиката...",
      range: "Диапазон",
      marketData: "Пазарни данни",
      searchPlaceholder: "Търсене на символ...",
      all: "Всички",
      gainers: "Печеливши",
      losers: "Губещи",
      symbol: "Символ",
      price: "Цена",
      change24h: "Промяна 24ч",
      volume: "Обем",
      marketCap: "Пазарна капитализация",
      noResults: "Няма намерени резултати",
      tryLiveDemo: "Изпробвайте живата демонстрация",
    },
  },

  pl: {
    // Header
    greeting: "Cześć, jestem",
    name: "Volodymyr",
    downloadCV: "Pobierz CV",

    // Navigation
    about: "o mnie",
    skills: "umiejętności",
    experience: "doświadczenie",
    projects: "projekty",
    contact: "napisz do mnie",

    // About section
    aboutMe: "O mnie",
    aboutBgText: "Aboutme",
    jobTitle: "Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer z 6+ letnim doświadczeniem w tworzeniu wysokowydajnych platform fintech. Specjalizacja w skalowalnych frontendach React/TypeScript i backendach Node.js/NestJS z PostgreSQL. Udowodnione doświadczenie w kierowaniu zespołami i dostarczaniu rozwiązań enterprise od projektu do produkcji.",
    personalInfo: {
      name: "Imię",
      birthday: "Data urodzenia",
      degree: "Wykształcenie",
      experience: "Doświadczenie",
      phone: "Telefon",
      email: "Email",
      address: "Adres",
      freelance: "Freelance",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Dostępny",
    master: "Magister",
    fiveYearsPlus: "6+ lat",

    // Skills section
    mySkills: "Moje umiejętności",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Doświadczenie zawodowe",
    experienceBgText: "Doświadczenie",

    // Projects section
    portfolio: "portfolio",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Skontaktuj się ze mną",
    contactBgText: "Kontakt",
    sendMeLetter: "Napisz do mnie",
    mailMe: "Mail me",
    namePlaceholder: "Imię...",
    emailPlaceholder: "Email...",
    messagePlaceholder: "Twoja wiadomość...",
    sendButton: "Wyślij",
    thankYouMessage: "Dziękuję za wiadomość!",

    // Header (redesign)
    badgeAvailable: "dostępny do pracy",
    headerTitle: "Kim jestem..?",
    headerDescription:
      "Budowanie wysokowydajnych aplikacji internetowych za pomocą nowoczesnych technologii i czystej, łatwej w utrzymaniu architektury.",
    viewMyWork: "zobacz moją pracę",
    yearsExp: "LAT DOŚWIADCZENIA",
    projectsCount: "PROJEKTÓW",
    coffee: "KAWY",

    // Footer
    letsWorkTogether: "Pracujmy razem",
    hireMe: "zatrudnij mnie",
    letsWorkTogetherSubtitle: "Masz projekt na uwadze? Chętnie o nim słyszę.",

    // About (redesign)
    whoIAm: "Kim jestem",

    // Experience (redesign)
    whereIveWorked: "Gdzie pracowałem",

    // Skills (redesign)
    mySkillsTitle: "Moje umiejętności",
    whatIBuildWith: "Z czym pracuję",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Co zbudowałem",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer z 6+ letnim doświadczeniem — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — portfolio Volodymyra Pestova",

    // Language switcher
    language: "Język",

    // Project modal
    projectModal: {
      caseStudy: "Studium przypadku",
      challenge: "Wyzwanie",
      solution: "Rozwiązanie",
      result: "Wynik",
      technologies: "Technologie",
      visitProject: "Odwiedź projekt",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "Zespoły pracujące nad krótkotrwałymi projektami nie miały lekkiego narzędzia do koordynacji. Tradycyjne oprogramowanie do zarządzania projektami było zbyt ciężkie — tworzenie projektu, przypisywanie zadań i śledzenie mikro-dostaw wymagało zbyt wiele konfiguracji. Współpraca odbywała się w rozproszonych czatach i wątkach bez jednolitego widoku na aktywność zespołu lub postęp.",
        solution:
          "Zbudowano platformę do mikro-współpracy, na której zespoły mogą w kilka sekund tworzyć skoncentrowane przestrzenie robocze, przypisywać mikro-zadania i śledzić aktywność w czasie rzeczywistym. Zintegrowano warstwę zarządzania produktem i przepływ realizacji, aby zespoły mogły pakować i monetyzować swoją wspólną wydajność. Panel administracyjny zapewnia pełny przegląd przestrzeni roboczych, członków i rozliczeń z jednej powierzchni sterowania.",
        result:
          "Koszty koordynacji znacznie zmniejszone — zespoły przechodzą od pomysłu do aktywnej przestrzeni roboczej w mniej niż minutę. Monetyzacja usług współpracy dostępna bezpośrednio w ramach platformy, eliminując potrzebę stosowania narzędzi rozliczeniowych stron trzecich. Panel administracyjny łączy kondycję przestrzeni roboczych, zarządzanie użytkownikami i śledzenie przychodów w jednym miejscu.",
      },
      aurinia: {
        challenge:
          "Sprzedawca materiałów zarządzał zapasami, zamówieniami i danymi klientów w arkuszach kalkulacyjnych i niezwiązanych ze sobą narzędziach. Listy produktów wymagały ręcznych aktualizacji, proces realizacji obsługiwany był zewnętrznie, a administrator nie miał widoku w czasie rzeczywistym poziomów zapasów lub statusu zamówień — co prowadziło do błędów w spełnieniu i utraty sprzedaży.",
        solution:
          "Dostarczona została pełnoprawna platforma e-commerce z katalogiem produktów wspierającym bogate opisy materiałów, warstwy cenowe i zarządzanie zdjęciami. Zbudowano wieloetapowy proces realizacji ze sprawdzaniem poprawności zamówień i potwierdzonymi wiadomościami e-mail. Panel administracyjny obejmuje pełny cykl życia zamówienia — od złożenia do realizacji — wraz z zarządzaniem zapasami, konfiguracją kategorii i raportowaniem sprzedaży.",
        result:
          "Synchronizacja zapasów wyeliminowała potrzebę ręcznych aktualizacji — zmiany katalogu natychmiast odzwierciedlają się w sklepie. Błędy w przetwarzaniu zamówień spadły do zera dzięki zstruktalizowanej walidacji realizacji. Administrator uzyskał widok w czasie rzeczywistym poziomów zapasów, oczekujących zamówień i przychodów bez opuszczania platformy.",
      },
      oschadpay: {
        challenge:
          "Bank obsługiwał dziesiątki terminali płatniczych bez zunifikowanego panelu kontrolnego. Tworzenie transakcji było ręczne, wdrażanie sprzedawców trwało dni, katalogi produktów przechowywano w arkuszach kalkulacyjnych, a generowanie raportów zgodnych z przepisami podatkowymi wymagało godzin łączenia danych z wielu systemów.",
        solution:
          "Zbudowano scentralizowaną platformę internetową, która obejmuje pełny przepływ operacji płatniczych: tworzenie i śledzenie transakcji w czasie rzeczywistym, rejestrowanie i zarządzanie sprzedawcami wraz z ich katalogami produktów, zdalne udostępnianie i monitorowanie terminali POS oraz generowanie ustrukturyzowanych raportów gotowych do złożenia w organach podatkowych — wszystko z jednego interfejsu z kontrolą dostępu opartą na rolach.",
        result:
          "Czas wdrażania terminali skrócony z dni do minut. Przygotowanie raportów podatkowych zautomatyzowane — z godzin pracy ręcznej do generowania jednym kliknięciem. Pełna widoczność transakcji, sprzedawców i stanu terminali dzięki panelowi w czasie rzeczywistym.",
      },
      onboarding: {
        challenge:
          "Proces uruchamiania nowych produktów płatniczych trwał tygodnie, ponieważ każdy nowy formularz wymagał pełnego cyklu rozwoju, testowania i wdrożenia frontendu.",
        solution:
          "Opracowano niestandardowy system No-Code oparty na JSON Schema i React. Wdrożono wizualny konstruktor z ponad 30 typami pól, złożoną logiką warunkową i walidacją w locie. Zastosowano wirtualizację React dla dużych formularzy (ponad 100 pól) w celu utrzymania wysokiej wydajności.",
        result:
          "Całkowite wyeliminowanie zależności od programistów przy tworzeniu formularzy. Czas wprowadzenia produktu na rynek skrócony z kilku tygodni do kilku godzin.",
      },
      aurabeauty: {
        challenge:
          "Beauty salons rely on phone or manual form bookings — a friction-heavy process that loses clients who want to book outside business hours. Staff spend significant time on routine scheduling, and there is no intelligent layer to handle availability conflicts or master disambiguation.",
        solution:
          "Built a full-stack salon platform with an agentic AI booking assistant powered by Gemini. The assistant conducts natural multi-turn conversations, checks real-time master availability from Supabase, handles disambiguation when multiple masters share a first name, and confirms bookings atomically with Telegram notifications.",
        result:
          "Clients book 24/7 through a conversational UI in under two minutes. The AI agent reduces front-desk scheduling load to near zero. Master availability conflicts are eliminated through real-time slot locking.",
      },
      jsontojsx: {
        challenge:
          "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces. AI tools generate form markup without state management, missing form elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
        solution:
          "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type. The engine has two output paths: a live React renderer and a TSX codegen pipeline that emits typed interfaces, useState hooks, and handleChange callbacks. An AI playground integrates three LLM providers with multi-variant generation.",
        result:
          "From a natural language prompt to a running React preview and production-ready TSX in seconds — including complete form state management. The pipeline is covered by 174 automated tests.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - Platforma e-commerce",
        description:
          "Nowoczesna platforma e-commerce z zaawansowanym zarządzaniem produktami, procesem realizacji zamówień i panelem administracyjnym.",
        additionalInfo:
          "Pełnofunkcjonalny sklep internetowy z zarządzaniem materiałami i kompleksową obsługą zamówień",
      },
      collabpulse: {
        title: "CollabPulse - Platforma mikro-współpracy",
        description:
          "Nowoczesna platforma mikro-współpracy z zaawansowanym zarządzaniem produktami, procesem realizacji zamówień i panelem administracyjnym.",
        additionalInfo:
          "Pełnoprawna platforma mikro-współpracy z zaawansowanym zarządzaniem produktami, procesem realizacji zamówień i panelem administracyjnym",
      },
      cfweb: {
        title: "Credit Factory - Aplikacja webowa finansów korporacyjnych",
        description:
          "Kompleksowy system zarządzania finansami korporacyjnymi z rolami użytkowników, zarządzaniem produktami i funkcjami zgodności regulacyjnej.",
        additionalInfo:
          "Platforma zarządzania finansami na poziomie przedsiębiorstwa z zaawansowanym zarządzaniem użytkownikami i narzędziami zgodności",
      },
      oschadpay: {
        title: "OschadPay - System przetwarzania płatności",
        description:
          "Platforma przetwarzania płatności klasy korporacyjnej dla instytucji finansowych. Umożliwia kompleksowe zarządzanie cyklem życia transakcji, udostępnianie terminali POS, kontrolę sprzedawców i produktów oraz automatyczne raportowanie podatkowe.",
        additionalInfo:
          "Tworzenie i monitorowanie transakcji · Generowanie raportów podatkowych · Rejestr sprzedawców i produktów · Udostępnianie i zarządzanie terminalami · Dashboard analizy finansowej",
      },
      onboarding: {
        title: "Onboarding - System zarządzania kwestionariuszami",
        description:
          "Kompleksowy system zarządzania kwestionariuszami i formularzami z szablonami, kategoriami i konfiguracją pól.",
        additionalInfo:
          "Kreator formularzy na poziomie przedsiębiorstwa z zarządzaniem szablonami, organizacją kategorii i zaawansowaną personalizacją pól",
      },
      hostel: {
        title: "System zarządzania hostelem",
        description:
          "Kompletne rozwiązanie do zarządzania hostelem z rezerwacją pokoi, rejestracją gości i panelem administracyjnym dla obiektów noclegowych.",
        additionalInfo:
          "Fullstack system rezerwacji z dostępnością w czasie rzeczywistym, zarządzaniem gośćmi i śledzeniem rezerwacji · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "System CRM dla transakcji",
        description:
          "Platforma zarządzania relacjami z klientami do śledzenia transakcji, zarządzania interakcjami z klientami i monitorowania postępów w lejku sprzedaży.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - System CRM kandydatów",
        description:
          "System zarządzania rekrutacją do śledzenia kandydatów do pracy, zarządzania procesami rozmów kwalifikacyjnych i organizowania przepływów pracy rekrutacyjnej.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Studio internetowe",
        description: "Studio internetowe do tworzenia stron internetowych.",
        additionalInfo:
          "Strona docelowa dla agencji cyfrowej z nowoczesnym interfejsem UI/UX i płynnymi animacjami · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Agencja tworzenia stron",
        description:
          "Nowoczesna strona agencji tworzenia stron internetowych z eleganckim designem, płynnymi animacjami i responsywnym układem.",
        additionalInfo:
          "Kreatywna strona docelowa agencji z nowoczesnymi animacjami i premiumowym designem · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — Platforma rezerwacji AI",
        description:
          "Premium landing salonu piękności z asystentem rezerwacji AI, który obsługuje wizyty przez naturalną rozmowę, sprawdza dostępność mistrzów i natychmiastowo potwierdza rezerwacje.",
        additionalInfo:
          "Wielomotywowa platforma salonowa z agentem AI Gemini, Supabase, harmonogramem mistrzów i powiadomieniami Telegram · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
        description:
          "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating components through natural language.",
        additionalInfo:
          "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Full-Stack Developer",
        companyDescription:
          "Ukrpay to wiodąca ukraińska firma fintech specjalizująca się w kompleksowych rozwiązaniach płatniczych dla banków, instytucji finansowych i sprzedawców. Firma buduje solidną infrastrukturę do przetwarzania transakcji, zarządzania terminalami POS i ekosystemami handlowymi — obsługując tysiące codziennych operacji finansowych w całym kraju.",
        achievements: [
          "Architektura platformy zarządzania sprzedawcami obsługującej 500+ sprzedawców i przetwarzającej 10 000+ dziennych transakcji z zerowym przestojem przy 3-krotnym wzroście użytkowników.",
          "Zaprojektowanie i wdrożenie biblioteki komponentów z 40+ komponentami, skracającej czas rozwoju funkcji o 40%.",
          "Optymalizacja pakietu aplikacji z podziałem kodu i leniwym ładowaniem, poprawiająca początkowe ładowanie strony o 35%.",
          "Platforma przeskalowana 3x bez przebudowy architektury.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription:
          "Atlana to firma zajmująca się rozwojem sieci Web specjalizująca się w dostarczaniu dostosowanych rozwiązań internetowych do potrzeb biznesu. Solidna wiedza obejmuje szeroki zakres pomyślnie ukończonych projektów od startupów po międzynarodowe portale rządowe.",
        achievements: [
          "Zbudowałem kompleksową platformę ogłoszeń nieruchomości z interaktywną mapą Mapbox, filtrami geolokalizacyjnymi i wyszukiwaniem na poziomie dzielnicy — umożliwiając użytkownikom wizualne przeglądanie ofert w całym mieście.",
          "Wdrożyłem zapisane wyszukiwania, porównywanie nieruchomości i listy obserwowanych — zwiększając głębokość sesji i wskaźnik powrotów na platformę.",
          "Osiągnąłem wyniki Lighthouse 95+ i 50% szybsze ładowanie stron dzięki Next.js SSG, znacznikowi danych strukturalnych i optymalizacji obrazów.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription:
          "Impltech to firma zajmująca się tworzeniem oprogramowania na zamówienie, dostarczająca spersonalizowane produkty cyfrowe dla klientów z branży finansowej, handlowej i technologicznej. Zespół łączy głęboką wiedzę inżynierską, aby budować wydajne, intensywnie korzystające z danych aplikacje od podstaw.",
        achievements: [
          "Opracowałem interfejs handlowy w czasie rzeczywistym dla platformy brokerskiej, streamującej żywe dane cenowe dla 50+ instrumentów przez WebSocket z opóźnieniem UI poniżej 50ms.",
          "Zbudowałem interaktywne wykresy świecowe z wieloma ramami czasowymi, wskaźnikami technicznymi i narzędziami do rysowania — zapewniając profesjonalne doświadczenie handlowe.",
          "Wdrożyłem pełny system zarządzania zleceniami obsługujący zlecenia rynkowe, limitowane i stop z natychmiastową informacją zwrotną o realizacji i śledzeniem P&L portfela w czasie rzeczywistym.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Freelance Front-End Developer",
        companyDescription:
          "Samodzielna praktyka freelancerska — tworzenie niestandardowych rozwiązań internetowych dla małych i średnich firm z różnych branż. Skupienie na budowaniu responsywnych, wydajnych stron i aplikacji webowych od podstaw — od projektu do wdrożenia.",
        achievements: [
          "Opracowałem system rezerwacji online dla salonu urody z kalendarzem w czasie rzeczywistym, powiadomieniami dla klientów i panelem administracyjnym — w pełni zastąpiłem ręczny proces.",
          "Stworzyłem aplikację webową katalogu produktów dla hurtownika z dynamicznym filtrowaniem, wyszukiwaniem i funkcją eksportu cennika do PDF.",
          "Zrealizowałem landing page dla biznesu coachingowego z formularzami kontaktowymi, śledzeniem analityki i testowanymi A/B sekcjami CTA — konwersja leadów wzrosła o 30%.",
          "Zbudowałem portfolio i platformę blogową dla fotografa z niestandardową galerią, lazy loadingiem i optymalizacją SEO — osiągnąłem wynik 90+ w Lighthouse.",
        ],
        tags: [
          "4 zrealizowane projekty",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Demo na żywo: Tablica kryptowalut w czasie rzeczywistym",
      subtitle: "WebSocket · Wykresy SVG · Wizualizacja danych",
      connected: "Połączony",
      disconnected: "Rozłączony",
      reconnecting: "Łączenie...",
      backToPortfolio: "Powrót do portfolio",
      loadingChart: "Ładowanie wykresu...",
      range: "Zakres",
      marketData: "Dane rynkowe",
      searchPlaceholder: "Szukaj symbolu...",
      all: "Wszystkie",
      gainers: "Wzrosty",
      losers: "Spadki",
      symbol: "Symbol",
      price: "Cena",
      change24h: "Zmiana 24h",
      volume: "Wolumen",
      marketCap: "Kapitalizacja rynkowa",
      noResults: "Nie znaleziono wyników",
      tryLiveDemo: "Wypróbuj demo na żywo",
    },
  },

  it: {
    // Header
    greeting: "Ciao, sono",
    name: "Volodymyr",
    downloadCV: "Scarica CV",

    // Navigation
    about: "su di me",
    skills: "competenze",
    experience: "esperienza",
    projects: "progetti",
    contact: "scrivimi",

    // About section
    aboutMe: "Su di me",
    aboutBgText: "Aboutme",
    jobTitle: "Senior Full-Stack Developer",
    description:
      "Sviluppatore Senior Full-Stack con 6+ anni di esperienza nella creazione di piattaforme fintech ad alte prestazioni. Competenze in frontend React/TypeScript scalabili e backend Node.js/NestJS con PostgreSQL. Comprovata esperienza nella guida di team e nella realizzazione di soluzioni enterprise dall'idea alla produzione.",
    personalInfo: {
      name: "Nome",
      birthday: "Data di nascita",
      degree: "Titolo di studio",
      experience: "Esperienza",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
      freelance: "Freelance",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Disponibile",
    master: "Laurea Magistrale",
    fiveYearsPlus: "6+ anni",

    // Skills section
    mySkills: "Le mie competenze",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Esperienza lavorativa",
    experienceBgText: "Esperienza",

    // Projects section
    portfolio: "portfolio",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Contattami",
    contactBgText: "Contatto",
    sendMeLetter: "Scrivimi una lettera",
    mailMe: "Mail me",
    namePlaceholder: "Nome...",
    emailPlaceholder: "Email...",
    messagePlaceholder: "Il tuo messaggio...",
    sendButton: "Invia",
    thankYouMessage: "Grazie per il tuo messaggio!",

    // Header (redesign)
    badgeAvailable: "disponibile per il lavoro",
    headerTitle: "Chi sono..?",
    headerDescription:
      "Costruire applicazioni web ad alte prestazioni con tecnologie moderne e architettura pulita e mantenibile.",
    viewMyWork: "vedi il mio lavoro",
    yearsExp: "ANNI DI ESPERIENZA",
    projectsCount: "PROGETTI",
    coffee: "CAFFÈ",

    // Footer
    letsWorkTogether: "Lavoriamo insieme",
    hireMe: "assumimi",
    letsWorkTogetherSubtitle:
      "Hai un progetto in mente? Mi piacerebbe sentirne parlare.",

    // About (redesign)
    whoIAm: "Chi sono",

    // Experience (redesign)
    whereIveWorked: "Dove ho lavorato",

    // Skills (redesign)
    mySkillsTitle: "Le mie competenze",
    whatIBuildWith: "Con cosa lavoro",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Quello che ho costruito",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer con 6+ anni di esperienza — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — portfolio di Volodymyr Pestov",

    // Language switcher
    language: "Lingua",

    // Project modal
    projectModal: {
      caseStudy: "Case Study",
      challenge: "Sfida",
      solution: "Soluzione",
      result: "Risultato",
      technologies: "Tecnologie",
      visitProject: "Visita il progetto",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "I team che lavorano su progetti a breve termine non avevano uno strumento leggero per il coordinamento. Il software tradizionale di gestione dei progetti era troppo pesante — creare un progetto, assegnare attività e tracciare micro-consegne richiedeva troppe configurazioni. La collaborazione avveniva in chat e thread sparsi senza una visione unificata dell'attività del team o dei progressi.",
        solution:
          "È stata costruita una piattaforma di micro-collaborazione in cui i team possono creare spazi di lavoro focalizzati in pochi secondi, assegnare micro-attività e tracciare l'attività in tempo reale. È stato integrato uno strato di gestione dei prodotti e un flusso di checkout in modo che i team possano confezionare e monetizzare i loro risultati collaborativi. Il pannello amministrativo fornisce visibilità completa su spazi di lavoro, membri e fatturazione da un'unica superficie di controllo.",
        result:
          "I costi di coordinamento sono significativamente ridotti — i team passano dall'idea a uno spazio di lavoro attivo in meno di un minuto. La monetizzazione dei servizi di collaborazione è abilitata direttamente all'interno della piattaforma, eliminando la necessità di strumenti di fatturazione di terze parti. Il pannello amministrativo consolida la salute degli spazi di lavoro, la gestione degli utenti e il tracciamento dei ricavi in un'unica posizione.",
      },
      aurinia: {
        challenge:
          "Un rivenditore di materiali gestiva inventario, ordini e dati dei clienti in fogli di calcolo e strumenti disconnessi. Le liste dei prodotti richiedevano aggiornamenti manuali, il processo di checkout era gestito esternamente e l'amministratore non aveva una visione in tempo reale dei livelli di stock o dello stato degli ordini — portando a errori di evasione e perdite di vendite.",
        solution:
          "È stata fornita una piattaforma e-commerce completa con un catalogo di prodotti che supporta descrizioni ricche di materiali, fasce di prezzo e gestione delle immagini. È stato creato un processo di checkout multi-step con convalida degli ordini e email di conferma. Il pannello amministrativo copre l'intero ciclo di vita dell'ordine — dalla collocazione all'evasione — insieme alla gestione dell'inventario, alla configurazione delle categorie e ai rapporti sulle vendite.",
        result:
          "La sincronizzazione dell'inventario ha reso obsoleti gli aggiornamenti manuali delle scorte — i cambiamenti nel catalogo si riflettono istantaneamente nella vetrina. Gli errori nell'elaborazione degli ordini sono scesi quasi a zero attraverso la convalida strutturata del checkout. L'amministratore ha ottenuto visibilità in tempo reale sui livelli di stock, gli ordini in sospeso e i ricavi senza lasciare la piattaforma.",
      },
      oschadpay: {
        challenge:
          "La banca gestiva decine di terminali di pagamento senza un dashboard unificato. La creazione di transazioni era manuale, l'onboarding dei commercianti richiedeva giorni, i cataloghi prodotti erano conservati in fogli di calcolo e la generazione di report conformi alle normative fiscali richiedeva ore di assemblaggio dati da più sistemi.",
        solution:
          "È stata costruita una piattaforma web centralizzata che copre l'intero flusso operativo dei pagamenti: creare e tracciare transazioni in tempo reale, registrare e gestire commercianti con i loro cataloghi prodotti, fornire e monitorare terminali POS da remoto e generare report strutturati pronti per la presentazione all'autorità fiscale — tutto da un'unica interfaccia con controllo degli accessi basato sui ruoli.",
        result:
          "Tempo di onboarding dei terminali ridotto da giorni a minuti. Preparazione dei report fiscali automatizzata — da ore di lavoro manuale a generazione con un clic. Completa visibilità di transazioni, commercianti e stato dei terminali attraverso un dashboard in tempo reale.",
      },
      onboarding: {
        challenge:
          "Il processo di lancio di nuovi prodotti di pagamento richiedeva settimane, poiché ogni nuovo modulo richiedeva un ciclo completo di sviluppo, test e distribuzione del frontend.",
        solution:
          "È stato sviluppato un sistema No-Code personalizzato basato su JSON Schema e React. Implementato un costruttore visuale con oltre 30 tipi di campi, logica condizionale complessa e validazione al volo. Applicata la virtualizzazione React per moduli di grandi dimensioni (oltre 100 campi) per mantenere alte prestazioni.",
        result:
          "Completa eliminazione della dipendenza dagli sviluppatori nella creazione di moduli. Time-to-Market ridotto da diverse settimane a poche ore.",
      },
      aurabeauty: {
        challenge:
          "Beauty salons rely on phone or manual form bookings — a friction-heavy process that loses clients who want to book outside business hours. Staff spend significant time on routine scheduling, and there is no intelligent layer to handle availability conflicts or master disambiguation.",
        solution:
          "Built a full-stack salon platform with an agentic AI booking assistant powered by Gemini. The assistant conducts natural multi-turn conversations, checks real-time master availability from Supabase, handles disambiguation when multiple masters share a first name, and confirms bookings atomically with Telegram notifications.",
        result:
          "Clients book 24/7 through a conversational UI in under two minutes. The AI agent reduces front-desk scheduling load to near zero. Master availability conflicts are eliminated through real-time slot locking.",
      },
      jsontojsx: {
        challenge:
          "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces. AI tools generate form markup without state management, missing form elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
        solution:
          "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type. The engine has two output paths: a live React renderer and a TSX codegen pipeline that emits typed interfaces, useState hooks, and handleChange callbacks. An AI playground integrates three LLM providers with multi-variant generation.",
        result:
          "From a natural language prompt to a running React preview and production-ready TSX in seconds — including complete form state management. The pipeline is covered by 174 automated tests.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - Piattaforma e-commerce",
        description:
          "Piattaforma e-commerce moderna con gestione avanzata dei prodotti, processo di checkout e pannello amministrativo.",
        additionalInfo:
          "Negozio online completo con gestione dei materiali ed elaborazione completa degli ordini",
      },
      collabpulse: {
        title: "CollabPulse - Piattaforma di micro-collaborazione",
        description:
          "Piattaforma di micro-collaborazione moderna con gestione avanzata dei prodotti, processo di checkout e pannello amministrativo.",
        additionalInfo:
          "Piattaforma completa di micro-collaborazione con gestione avanzata dei prodotti, processo di checkout e pannello amministrativo",
      },
      cfweb: {
        title: "Credit Factory - Applicazione web per finanza aziendale",
        description:
          "Sistema completo di gestione della finanza aziendale con ruoli utente, gestione dei prodotti e funzionalità di conformità normativa.",
        additionalInfo:
          "Piattaforma di gestione finanziaria a livello aziendale con gestione utenti avanzata e strumenti di conformità",
      },
      oschadpay: {
        title: "OschadPay - Sistema di elaborazione pagamenti",
        description:
          "Piattaforma di elaborazione pagamenti di livello aziendale per istituzioni finanziarie. Consente la gestione end-to-end del ciclo di vita delle transazioni, provisioning terminali POS, controllo commercianti e prodotti e reportistica fiscale automatizzata.",
        additionalInfo:
          "Creazione e monitoraggio transazioni · Generazione report fiscali · Registro commercianti e prodotti · Provisioning e gestione terminali · Dashboard analisi finanziaria",
      },
      onboarding: {
        title: "Onboarding - Sistema di gestione questionari",
        description:
          "Sistema completo di gestione questionari e moduli con template, categorie e configurazione campi.",
        additionalInfo:
          "Form builder di livello aziendale con gestione template, organizzazione categorie e personalizzazione avanzata dei campi",
      },
      hostel: {
        title: "Sistema di gestione ostello",
        description:
          "Soluzione completa per la gestione di ostelli con prenotazione camere, registrazione ospiti e dashboard amministrativa per strutture ricettive.",
        additionalInfo:
          "Fullstack sistema di prenotazione con disponibilità in tempo reale, gestione ospiti e tracciamento prenotazioni · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "Sistema CRM per trattative",
        description:
          "Piattaforma di gestione delle relazioni con i clienti per il tracciamento delle trattative, la gestione delle interazioni con i clienti e il monitoraggio del progresso della pipeline di vendita.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - Sistema CRM candidati",
        description:
          "Sistema di gestione del reclutamento per il tracciamento dei candidati di lavoro, la gestione dei processi di colloquio e l'organizzazione dei flussi di lavoro di assunzione.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Web-studio",
        description: "Studio web per la creazione di siti web.",
        additionalInfo:
          "Landing page per un'agenzia digitale con UI/UX moderna e animazioni fluide · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Agenzia di sviluppo web",
        description:
          "Sito web moderno di un'agenzia di sviluppo web con design elegante, animazioni fluide e layout responsive.",
        additionalInfo:
          "Landing page creativa per agenzia con animazioni moderne e design premium · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — Piattaforma prenotazioni AI",
        description:
          "Landing premium per salone di bellezza con assistente prenotazione AI che gestisce appuntamenti tramite conversazione naturale, verifica disponibilità dei maestri e conferma istantaneamente.",
        additionalInfo:
          "Piattaforma salone multi-tema con agente AI Gemini, Supabase, pianificazione maestri e notifiche Telegram · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
        description:
          "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating components through natural language.",
        additionalInfo:
          "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Full-Stack Developer",
        companyDescription:
          "Ukrpay è un'azienda fintech ucraina leader specializzata in soluzioni di pagamento end-to-end per banche, istituzioni finanziarie e commercianti. L'azienda costruisce un'infrastruttura robusta per l'elaborazione delle transazioni, la gestione dei terminali POS e gli ecosistemi dei commercianti — alimentando migliaia di operazioni finanziarie quotidiane in tutto il paese.",
        achievements: [
          "Architettura di piattaforma di gestione commercianti che serve 500+ commercianti ed elabora 10.000+ transazioni giornaliere con zero downtime durante una crescita utenti 3x.",
          "Progettazione e implementazione di una libreria di componenti con 40+ componenti, riducendo i tempi di sviluppo delle funzionalità del 40%.",
          "Ottimizzazione del bundle dell'applicazione con code-splitting e lazy loading, migliorando il caricamento iniziale della pagina del 35%.",
          "Piattaforma scalata 3x senza riscritture architetturali.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription:
          "Atlana è un'azienda di sviluppo web specializzata nella fornitura di soluzioni web personalizzate per le esigenze aziendali. L'esperienza solida copre un'ampia gamma di progetti completati con successo, da startup a portali governativi internazionali.",
        achievements: [
          "Ho costruito una piattaforma completa di annunci immobiliari con mappa Mapbox interattiva, filtri di geolocalizzazione e ricerca a livello di quartiere — permettendo agli utenti di esplorare gli annunci visivamente in tutta la città.",
          "Ho implementato ricerche salvate, confronto di proprietà e liste di controllo — aumentando la profondità delle sessioni e il tasso di visite ripetute sulla piattaforma.",
          "Ho raggiunto punteggi Lighthouse 95+ e caricamento pagine 50% più veloce tramite Next.js SSG, markup dei dati strutturati e ottimizzazione delle immagini.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription:
          "Impltech è un'azienda di sviluppo software personalizzato che fornisce prodotti digitali su misura per clienti nel settore finanziario, del trading e tecnologico. Il team porta una profonda competenza ingegneristica per costruire applicazioni ad alte prestazioni e data-intensive da zero.",
        achievements: [
          "Ho sviluppato un'interfaccia di trading in tempo reale per una piattaforma di brokeraggio che trasmette feed di prezzi live per 50+ strumenti via WebSocket con latenza UI inferiore a 50ms.",
          "Ho costruito grafici a candele interattivi con più timeframe, indicatori tecnici e strumenti di disegno — offrendo un'esperienza di trading di livello professionale.",
          "Ho implementato un sistema completo di gestione degli ordini con supporto per ordini di mercato, limite e stop con feedback di esecuzione immediato e tracciamento P&L del portafoglio in tempo reale.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Sviluppatore Front-End Freelance",
        companyDescription:
          "Pratica freelance autonoma — sviluppo di soluzioni web personalizzate per piccole e medie imprese in vari settori. Focalizzato sulla creazione di siti e web app responsivi e performanti da zero — dal design al deploy.",
        achievements: [
          "Ho sviluppato un sistema di prenotazione online per un salone di bellezza con calendario in tempo reale, notifiche ai clienti e pannello admin — sostituendo completamente il processo manuale.",
          "Ho creato una web app catalogo prodotti per un fornitore all'ingrosso con filtri dinamici, ricerca ed esportazione del listino prezzi in PDF.",
          "Ho realizzato un funnel landing page per un business di coaching con moduli di contatto, tracciamento analytics e sezioni CTA testate in A/B — la conversione dei lead è aumentata del 30%.",
          "Ho costruito un portfolio e blog per un fotografo con galleria immagini personalizzata, lazy loading e ottimizzazione SEO — raggiunto un punteggio 90+ in Lighthouse.",
        ],
        tags: [
          "4 progetti consegnati",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Demo dal vivo: Dashboard cripto in tempo reale",
      subtitle: "WebSocket · Grafici SVG · Visualizzazione dati",
      connected: "Connesso",
      disconnected: "Disconnesso",
      reconnecting: "Connessione...",
      backToPortfolio: "Torna al portfolio",
      loadingChart: "Caricamento grafico...",
      range: "Intervallo",
      marketData: "Dati di mercato",
      searchPlaceholder: "Cerca simbolo...",
      all: "Tutti",
      gainers: "In crescita",
      losers: "In calo",
      symbol: "Simbolo",
      price: "Prezzo",
      change24h: "Variazione 24h",
      volume: "Volume",
      marketCap: "Capitalizzazione",
      noResults: "Nessun risultato trovato",
      tryLiveDemo: "Prova la demo dal vivo",
    },
  },

  fr: {
    // Header
    greeting: "Bonjour, je suis",
    name: "Volodymyr",
    downloadCV: "Télécharger CV",

    // Navigation
    about: "à propos",
    skills: "compétences",
    experience: "expérience",
    projects: "projets",
    contact: "écrivez-moi",

    // About section
    aboutMe: "À propos de moi",
    aboutBgText: "Aboutme",
    jobTitle: "Développeur Senior Full-Stack",
    description:
      "Développeur Senior Full-Stack avec 6+ ans d'expérience dans la création de plateformes fintech haute performance. Expertise en frontends React/TypeScript évolutifs et backends Node.js/NestJS avec PostgreSQL. Expérience éprouvée dans la direction d'équipes et la livraison de solutions enterprise de l'idée à la production.",
    personalInfo: {
      name: "Nom",
      birthday: "Date de naissance",
      degree: "Diplôme",
      experience: "Expérience",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      freelance: "Freelance",
      telegram: "Telegram",
      viber: "Viber",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    // Personal values
    available: "Disponible",
    master: "Master",
    fiveYearsPlus: "6+ ans",

    // Skills section
    mySkills: "Mes compétences",
    skillsBgText: "Skills",

    // Experience section
    myExperience: "Expérience professionnelle",
    experienceBgText: "Expérience",

    // Projects section
    portfolio: "portfolio",
    portfolioBgText: "portfolio",

    // Contact section
    contactMe: "Contactez-moi",
    contactBgText: "Contact",
    sendMeLetter: "Envoyez-moi une lettre",
    mailMe: "Mail me",
    namePlaceholder: "Nom...",
    emailPlaceholder: "Email...",
    messagePlaceholder: "Votre message...",
    sendButton: "Envoyer",
    thankYouMessage: "Merci pour votre message!",

    // Header (redesign)
    badgeAvailable: "disponible pour travailler",
    headerTitle: "Qui je suis..?",
    headerDescription:
      "Construire des applications web performantes avec des technologies modernes et une architecture propre et maintenable.",
    viewMyWork: "voir mon travail",
    yearsExp: "ANS D'EXPÉRIENCE",
    projectsCount: "PROJETS",
    coffee: "CAFÉ",

    // Footer
    letsWorkTogether: "Travaillons ensemble",
    hireMe: "embauchez-moi",
    letsWorkTogetherSubtitle:
      "Vous avez un projet en tête ? J'aimerais en entendre parler.",

    // About (redesign)
    whoIAm: "Qui je suis",

    // Experience (redesign)
    whereIveWorked: "Où j'ai travaillé",

    // Skills (redesign)
    mySkillsTitle: "Mes compétences",
    whatIBuildWith: "Avec quoi je travaille",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",

    // Projects (redesign)
    thingsIveBuilt: "Ce que j'ai construit",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Développeur Senior Full-Stack",
    portfolioDescription:
      "Développeur Senior Full-Stack avec 6+ ans d'expérience — React, TypeScript, Next.js, Node.js, NestJS, PostgreSQL — portfolio de Volodymyr Pestov",

    // Language switcher
    language: "Langue",

    // Project modal
    projectModal: {
      caseStudy: "Étude de cas",
      challenge: "Défi",
      solution: "Solution",
      result: "Résultat",
      technologies: "Technologies",
      visitProject: "Visiter le projet",
    },

    // Project case studies
    caseStudies: {
      collabpulse: {
        challenge:
          "Les équipes travaillant sur des projets de courte durée n'avaient pas d'outil léger pour la coordination. Les logiciels traditionnels de gestion de projet étaient trop lourds — créer un projet, assigner des tâches et suivre les micro-livraisons exigeaient trop de configuration. La collaboration se déroulait dans des chats et des fils éparpillés sans une vision unifiée de l'activité de l'équipe ou des progrès.",
        solution:
          "Création d'une plateforme de micro-collaboration où les équipes peuvent créer des espaces de travail ciblés en quelques secondes, assigner des micro-tâches et suivre l'activité en temps réel. Intégration d'une couche de gestion des produits et d'un flux de paiement pour permettre aux équipes d'empaqueter et de monétiser leur production collaborative. Le panneau d'administration offre une visibilité complète sur les espaces de travail, les membres et la facturation à partir d'une seule surface de contrôle.",
        result:
          "Les frais de coordination sont considérablement réduits — les équipes passent d'une idée à un espace de travail actif en moins d'une minute. La monétisation des services de collaboration est activée directement dans la plateforme, éliminant le besoin d'outils de facturation tiers. Le panneau d'administration consolide la santé des espaces de travail, la gestion des utilisateurs et le suivi des revenus en un seul endroit.",
      },
      aurinia: {
        challenge:
          "Un détaillant de matériaux gérait l'inventaire, les commandes et les données des clients dans des feuilles de calcul et des outils déconnectés. Les listes de produits nécessitaient des mises à jour manuelles, le processus de paiement était géré en externe et l'administrateur n'avait pas une vue en temps réel des niveaux de stock ou du statut des commandes — entraînant des erreurs de traitement et une perte de ventes.",
        solution:
          "Livraison d'une plateforme e-commerce complète avec un catalogue de produits supportant les descriptions riches de matériaux, les niveaux de prix et la gestion des images. Création d'un processus de paiement multi-étapes avec validation des commandes et emails de confirmation. Le panneau d'administration couvre l'ensemble du cycle de vie des commandes — de la création à la livraison — ainsi que la gestion de l'inventaire, la configuration des catégories et les rapports de ventes.",
        result:
          "La synchronisation de l'inventaire a rendu les mises à jour manuelles des stocks obsolètes — les modifications du catalogue se reflètent instantanément dans la vitrine. Les erreurs de traitement des commandes sont tombées à zéro grâce à la validation structurée du paiement. L'administrateur a obtenu une visibilité en temps réel sur les niveaux de stock, les commandes en attente et les revenus sans quitter la plateforme.",
      },
      oschadpay: {
        challenge:
          "La banque exploitait des dizaines de terminaux de paiement sans tableau de bord unifié. La création de transactions était manuelle, l'intégration des commerçants prenait des jours, les catalogues de produits étaient conservés dans des feuilles de calcul et la génération de rapports conformes aux exigences fiscales nécessitait des heures de collecte de données à partir de plusieurs systèmes.",
        solution:
          "Construction d'une plateforme web centralisée couvrant l'ensemble du flux de travail des opérations de paiement : créer et suivre les transactions en temps réel, enregistrer et gérer les commerçants avec leurs catalogues de produits, provisionner et surveiller les terminaux de point de vente à distance, et générer des rapports structurés prêts pour la soumission aux autorités fiscales — le tout depuis une seule interface avec contrôle d'accès basé sur les rôles.",
        result:
          "Temps d'intégration des terminaux réduit de plusieurs jours à quelques minutes. Préparation des rapports fiscaux automatisée — de plusieurs heures de travail manuel à une génération en un clic. Visibilité complète des transactions, des commerçants et de l'état des terminaux via un tableau de bord en temps réel.",
      },
      onboarding: {
        challenge:
          "Le processus de lancement de nouveaux produits de paiement prenait des semaines, car chaque nouveau formulaire nécessitait un cycle complet de développement, de test et de déploiement du frontend.",
        solution:
          "Développement d'un système No-Code personnalisé basé sur JSON Schema et React. Implémentation d'un constructeur visuel avec plus de 30 types de champs, une logique conditionnelle complexe et une validation à la volée. Application de la virtualisation React pour les grands formulaires (plus de 100 champs) afin de maintenir des performances élevées.",
        result:
          "Élimination complète de la dépendance aux développeurs lors de la création de formulaires. Time-to-Market réduit de plusieurs semaines à quelques heures.",
      },
      aurabeauty: {
        challenge:
          "Les salons de beauté dépendent des appels téléphoniques ou des formulaires manuels pour les réservations — un processus contraignant qui fait perdre des clients souhaitant prendre rendez-vous en dehors des heures d'ouverture. Le personnel consacre beaucoup de temps aux appels de planification routiniers.",
        solution:
          "Création d'une plateforme salon complète avec un assistant de réservation IA agentique propulsé par Gemini. L'assistant mène des conversations naturelles en plusieurs tours, vérifie la disponibilité des maîtres en temps réel via Supabase, gère la désambiguïsation et confirme les réservations avec des notifications Telegram.",
        result:
          "Les clients réservent 24h/24 via une interface conversationnelle en moins de deux minutes. L'agent IA réduit la charge de planification à presque zéro. Les conflits de disponibilité sont éliminés grâce au verrouillage des créneaux en temps réel.",
      },
      jsontojsx: {
        challenge:
          "Prototyping UI components requires context-switching between design tools, code editors, and AI chat interfaces. AI tools generate form markup without state management, missing form elements, and no controlled inputs — code that looks correct but cannot be dropped into a React project without significant manual rework.",
        solution:
          "Built a schema engine that sits between AI output and production code. A JSON schema format describes components declaratively, including a Form node type. The engine has two output paths: a live React renderer and a TSX codegen pipeline that emits typed interfaces, useState hooks, and handleChange callbacks. An AI playground integrates three LLM providers with multi-variant generation.",
        result:
          "From a natural language prompt to a running React preview and production-ready TSX in seconds — including complete form state management. The pipeline is covered by 174 automated tests.",
      },
    },

    // Projects data
    projectsData: {
      aurinia: {
        title: "Aurinia - Plateforme e-commerce",
        description:
          "Plateforme e-commerce moderne avec gestion avancée des produits, processus de paiement et panneau d'administration.",
        additionalInfo:
          "Boutique en ligne complète avec gestion des matériaux et traitement complet des commandes",
      },
      collabpulse: {
        title: "CollabPulse - Plateforme de micro-collaboration",
        description:
          "Plateforme de micro-collaboration moderne avec gestion avancée des produits, processus de paiement et panneau d'administration.",
        additionalInfo:
          "Plateforme complète de micro-collaboration avec gestion avancée des produits, processus de paiement et panneau d'administration",
      },
      cfweb: {
        title: "Credit Factory - Application web de finance d'entreprise",
        description:
          "Système complet de gestion de la finance d'entreprise avec rôles utilisateurs, gestion des produits et fonctionnalités de conformité réglementaire.",
        additionalInfo:
          "Plateforme de gestion financière au niveau de l'entreprise avec gestion avancée des utilisateurs et outils de conformité",
      },
      oschadpay: {
        title: "OschadPay - Système de traitement des paiements",
        description:
          "Plateforme de traitement des paiements de niveau entreprise pour les institutions financières. Permet la gestion de bout en bout du cycle de vie des transactions, le provisionnement des terminaux de point de vente, le contrôle des commerçants et des produits, et le reporting fiscal automatisé.",
        additionalInfo:
          "Création et suivi des transactions · Génération de rapports fiscaux · Registre des commerçants et produits · Provisionnement et gestion des terminaux · Tableau de bord d'analyse financière",
      },
      onboarding: {
        title: "Onboarding - Système de gestion de questionnaires",
        description:
          "Système complet de gestion de questionnaires et de formulaires avec modèles, catégories et configuration de champs.",
        additionalInfo:
          "Créateur de formulaires au niveau de l'entreprise avec gestion de modèles, organisation de catégories et personnalisation avancée des champs",
      },
      hostel: {
        title: "Système de gestion d'auberge",
        description:
          "Solution complète de gestion d'auberge avec réservation de chambres, enregistrement des clients et tableau de bord administratif pour les établissements d'hébergement.",
        additionalInfo:
          "Fullstack système de réservation avec disponibilité en temps réel, gestion des clients et suivi des réservations · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "Système CRM pour les affaires",
        description:
          "Plateforme de gestion des relations clients pour suivre les affaires, gérer les interactions avec les clients et surveiller la progression du pipeline de ventes.",
        additionalInfo:
          "Sales pipeline management with deal tracking, client database, and analytics dashboard · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - Système CRM de candidats",
        description:
          "Système de gestion du recrutement pour suivre les candidats à l'emploi, gérer les processus d'entretien et organiser les flux de travail d'embauche.",
        additionalInfo:
          "Applicant tracking system with candidate profiles, interview scheduling, and recruitment analytics · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      webstudio: {
        title: "Studio Web",
        description: "Studio Web pour la création de sites Web.",
        additionalInfo:
          "Page d'accueil pour une agence numérique avec une interface UI/UX moderne et des animations fluides · HTML, CSS, JavaScript",
      },
      novus: {
        title: "Novus - Agence de développement web",
        description:
          "Site web moderne d'une agence de développement web avec un design élégant, des animations fluides et une mise en page responsive.",
        additionalInfo:
          "Page d'accueil créative pour agence avec des animations modernes et un design premium · NextJS, TypeScript, TailwindCSS",
      },
      aurabeauty: {
        title: "Aura Beauty Salon — Plateforme de réservation IA",
        description:
          "Landing premium pour salon de beauté avec un assistant de réservation IA qui gère les rendez-vous par conversation naturelle, vérifie la disponibilité des maîtres et confirme instantanément.",
        additionalInfo:
          "Plateforme salon multi-thème avec agent IA Gemini, Supabase, planification des maîtres et notifications Telegram · Next.js, Supabase, Gemini AI, TypeScript, TailwindCSS",
      },
      jsontojsx: {
        title: "JSONtoJSX — AI-Powered Schema Engine & Playground",
        description:
          "A schema-driven UI generation engine that converts JSON component schemas into live React previews and production-ready TSX code, with an AI-powered playground for generating components through natural language.",
        additionalInfo:
          "Turborepo monorepo · JSON schema → React renderer · TSX codegen with Form state · Multi-provider AI generation · 174 tests · Next.js, TypeScript, Mantine, Vitest",
      },
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Développeur Full-Stack Senior",
        companyDescription:
          "Ukrpay est une entreprise fintech ukrainienne leader spécialisée dans les solutions de paiement de bout en bout pour les banques, les institutions financières et les commerçants. L'entreprise construit une infrastructure robuste pour le traitement des transactions, la gestion des terminaux de point de vente et les écosystèmes marchands — alimentant des milliers d'opérations financières quotidiennes à travers le pays.",
        achievements: [
          "Architecture d'une plateforme de gestion des commerçants servant 500+ commerçants et traitant 10 000+ transactions quotidiennes avec zéro temps d'arrêt lors d'une croissance 3x des utilisateurs.",
          "Conception et implémentation d'une bibliothèque de composants avec 40+ composants, réduisant le temps de développement des fonctionnalités de 40%.",
          "Optimisation du bundle de l'application avec le fractionnement de code et le chargement différé, améliorant le chargement initial de la page de 35%.",
          "Plateforme mise à l'échelle 3x sans réécriture architecturale.",
        ],
        tags: [
          "No-Code Form Builder",
          "Merchant & Sales Platform",
          "Credit Factory",
          "Tax Report Automation",
          "Fintech",
        ],
      },
      atlana: {
        position: "Développeur Front-End",
        companyDescription:
          "Atlana est une entreprise de développement Web spécialisée dans la fourniture de solutions Web personnalisées adaptées aux besoins des entreprises. L'expertise solide couvre un large éventail de projets réussis, des startups aux portails gouvernementaux internationaux.",
        achievements: [
          "J'ai construit une plateforme complète d'annonces immobilières avec une carte Mapbox interactive, des filtres de géolocalisation et une recherche au niveau du quartier — permettant aux utilisateurs de parcourir les annonces visuellement dans toute la ville.",
          "J'ai implémenté des recherches sauvegardées, la comparaison de propriétés et des listes de surveillance — augmentant la profondeur des sessions et le taux de visites répétées sur la plateforme.",
          "J'ai atteint des scores Lighthouse 95+ et un chargement des pages 50% plus rapide via Next.js SSG, le balisage des données structurées et l'optimisation des images.",
        ],
        tags: [
          "Real Estate App",
          "Team of 4 devs",
          "Mapbox Integration",
          "Next.js SSG",
          "SEO Optimization",
        ],
      },
      impltech: {
        position: "Développeur Front-End",
        companyDescription:
          "Impltech est une société de développement de logiciels personnalisés qui livre des produits numériques sur mesure pour des clients dans les secteurs de la finance, du trading et de la technologie. L'équipe apporte une expertise technique approfondie pour construire des applications haute performance et intensives en données from scratch.",
        achievements: [
          "J'ai développé une interface de trading en temps réel pour une plateforme de courtage diffusant des flux de prix en direct pour 50+ instruments via WebSocket avec une latence UI inférieure à 50ms.",
          "J'ai construit des graphiques en chandeliers interactifs avec plusieurs horizons temporels, des indicateurs techniques et des outils de dessin — offrant une expérience de trading de niveau professionnel.",
          "J'ai implémenté un système complet de gestion des ordres prenant en charge les ordres au marché, à cours limité et stop avec un retour d'exécution immédiat et un suivi du P&L du portefeuille en temps réel.",
        ],
        tags: [
          "Trading Platform UI",
          "WebSocket",
          "Real-time Data",
          "50+ Stock Symbols",
          "React",
        ],
      },
      freelance: {
        position: "Développeur Front-End Freelance",
        companyDescription:
          "Pratique freelance indépendante — développement de solutions web personnalisées pour des petites et moyennes entreprises dans divers secteurs. Axé sur la création de sites et applications web responsifs et performants de A à Z — du design au déploiement.",
        achievements: [
          "J'ai développé un système de réservation en ligne pour un salon de beauté avec un calendrier en temps réel, des notifications clients et un panneau d'administration — remplaçant entièrement le processus manuel.",
          "J'ai créé une application web de catalogue de produits pour un grossiste avec des filtres dynamiques, une recherche et une fonctionnalité d'export du tarif en PDF.",
          "J'ai réalisé un funnel landing page pour un business de coaching avec des formulaires de contact, un suivi analytique et des sections CTA testées en A/B — la conversion des leads a augmenté de 30%.",
          "J'ai construit un portfolio et une plateforme de blog pour un photographe avec une galerie d'images personnalisée, du lazy loading et une optimisation SEO — score 90+ obtenu dans Lighthouse.",
        ],
        tags: [
          "4 projets livrés",
          "HTML / CSS / JS",
          "React",
          "WordPress",
          "SEO",
        ],
      },
    },

    // Demo page
    demo: {
      title: "Démo en direct : Tableau de bord crypto en temps réel",
      subtitle: "WebSocket · Graphiques SVG · Visualisation de données",
      connected: "Connecté",
      disconnected: "Déconnecté",
      reconnecting: "Reconnexion...",
      backToPortfolio: "Retour au portfolio",
      loadingChart: "Chargement du graphique...",
      range: "Plage",
      marketData: "Données de marché",
      searchPlaceholder: "Rechercher un symbole...",
      all: "Tous",
      gainers: "Hausse",
      losers: "Baisse",
      symbol: "Symbole",
      price: "Prix",
      change24h: "Variation 24h",
      volume: "Volume",
      marketCap: "Capitalisation",
      noResults: "Aucun résultat trouvé",
      tryLiveDemo: "Essayer la démo en direct",
    },
  },
};

export type Language = keyof typeof translations;
