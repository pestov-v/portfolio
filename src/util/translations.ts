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

  // Footer
  letsWorkTogether: string;

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
  };

  // Projects data
  projectsData: {
    aurinia: {
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
  };

  // Experience data
  experienceData: {
    ukrpay: {
      position: string;
      companyDescription: string;
      achievements: string[];
    };
    atlana: {
      position: string;
      companyDescription: string;
      achievements: string[];
    };
    impltech: {
      position: string;
      companyDescription: string;
      achievements: string[];
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
    name: "Volodymyr",
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
      "Senior Full-Stack Developer with 7+ years of experience building high-performance fintech platforms. Expertise in scalable React/TypeScript architectures, leading development teams, and mentoring engineers. Proven track record of delivering enterprise solutions that drive business outcomes.",
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
    fiveYearsPlus: "7+ years",

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

    // Footer
    letsWorkTogether: "Let's work together...",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer with 7+ years of experience in fintech, React, TypeScript — portfolio of Volodymyr Pestov",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Front-End Developer",
        companyDescription: "Leading fintech company specializing in payment solutions.",
        achievements: [
          "Architected merchant management platform serving 500+ merchants and processing 10,000+ daily transactions with zero downtime during 3x user growth.",
          "Designed and implemented a reusable component library with 40+ components, cutting feature development time by 40%.",
          "Optimized application bundle with code-splitting and lazy loading, improving initial page load by 35%.",
          "Platform scaled 3x with zero architecture rewrites."
        ]
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription: "Real estate technology company focused on enhancing property search experiences.",
        achievements: [
          "Developed interactive property search with Mapbox integration, geolocation filtering, and advanced faceted search.",
          "Created SEO-optimized listing pages using Next.js SSG, driving organic traffic growth.",
          "Achieved 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.",
          "Reduced page load time by 50%."
        ]
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription: "A tech company developing innovative solutions for real-time trading.",
        achievements: [
          "Built a live trading interface streaming 50+ stock symbols simultaneously with <50ms UI update latency.",
          "Mentored 2 junior developers on WebSocket patterns and React performance optimization.",
          "Sustained 1,000+ price updates/second during peak trading hours with consistent sub-50ms rendering."
        ]
      }
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
      "Senior Full-Stack розробник з 7+ роками досвіду створення високопродуктивних фінтех-платформ. Експертиза в масштабованих архітектурах React/TypeScript, керівництві командами розробки та менторстві інженерів. Підтверджений досвід створення корпоративних рішень, що впливають на бізнес-результати.",
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
    fiveYearsPlus: "7+ років",

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

    // Footer
    letsWorkTogether: "Давайте працювати разом...",

    // Meta tags
    portfolioTitle: "Володимир Пестов — Senior Full-Stack Розробник",
    portfolioDescription:
      "Senior Full-Stack розробник з 7+ роками досвіду у фінтех, React, TypeScript — портфоліо Володимира Пестова",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Front-End Розробник",
        companyDescription: "Провідна фінтех-компанія, що спеціалізується на платіжних рішеннях.",
        achievements: [
          "Архітектура платформи управління мерчантами, що обслуговує 500+ мерчантів та обробляє 10,000+ щоденних транзакцій з нульовим простоєм під час 3x зростання користувачів.",
          "Розробка та впровадження бібліотеки компонентів з 40+ компонентами, що скоротило час розробки функцій на 40%.",
          "Оптимізація бандлу додатку з code-splitting та lazy loading, покращення початкового завантаження сторінки на 35%.",
          "Платформа масштабована в 3x без перепроектування архітектури."
        ]
      },
      atlana: {
        position: "Front-End Розробник",
        companyDescription: "Технологічна компанія з нерухомості, орієнтована на покращення пошуку об'єктів.",
        achievements: [
          "Розробка інтерактивного пошуку нерухомості з інтеграцією Mapbox, геолокаційною фільтрацією та розширеним фасетним пошуком.",
          "Створення SEO-оптимізованих сторінок лістингів з використанням Next.js SSG, що стимулювало зростання органічного трафіку.",
          "Досягнення 95+ балів Lighthouse за Performance, Accessibility, Best Practices та SEO.",
          "Скорочення часу завантаження сторінки на 50%."
        ]
      },
      impltech: {
        position: "Front-End Розробник",
        companyDescription: "Технологічна компанія, що розробляє інноваційні рішення для торгівлі в реальному часі.",
        achievements: [
          "Створення інтерфейсу для торгівлі в реальному часі з одночасною трансляцією 50+ символів акцій з затримкою оновлення UI менше 50мс.",
          "Менторство 2 junior розробників з WebSocket патернів та оптимізації продуктивності React.",
          "Підтримка 1,000+ оновлень цін/секунду в пікові години торгів з стабільним рендерингом менше 50мс."
        ]
      }
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
      "Senior Full-Stack разработчик с 7+ години опит в изграждането на високопроизводителни финтех платформи. Експертиза в мащабируеми React/TypeScript архитектури, ръководство на екипи за разработка и менторство на инженери. Доказан опит в изграждането на корпоративни решения, които подобряват бизнес резултатите.",
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
    fiveYearsPlus: "7+ години",

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

    // Footer
    letsWorkTogether: "Нека работим заедно...",

    // Meta tags
    portfolioTitle: "Володимир Пестов — Senior Full-Stack Разработчик",
    portfolioDescription:
      "Senior Full-Stack разработчик с 7+ години опит във финтех, React, TypeScript — портфолио на Володимир Пестов",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Front-End Разработчик",
        companyDescription: "Водеща финтех компания, специализирана в платежни решения.",
        achievements: [
          "Архитектура на платформа за управление на търговци, обслужваща 500+ търговци и обработваща 10,000+ дневни транзакции с нулево престой при 3x ръст на потребители.",
          "Проектиране и внедряване на библиотека от компоненти с 40+ компонента, намаляваща времето за разработка на функции с 40%.",
          "Оптимизация на пакета на приложението с code-splitting и lazy loading, подобряване на първоначалното зареждане на страницата с 35%.",
          "Платформата мащабирана 3x без архитектурни преписвания."
        ]
      },
      atlana: {
        position: "Front-End Разработчик",
        companyDescription: "Технологична компания за недвижими имоти, фокусирана върху подобряване на търсенето на имоти.",
        achievements: [
          "Разработка на интерактивно търсене на имоти с интеграция на Mapbox, геолокационно филтриране и разширено фасетно търсене.",
          "Създаване на SEO-оптимизирани страници с използване на Next.js SSG, стимулиращо ръста на органичния трафик.",
          "Постигане на 95+ Lighthouse резултати за Performance, Accessibility, Best Practices и SEO.",
          "Намаляване на времето за зареждане на страницата с 50%."
        ]
      },
      impltech: {
        position: "Front-End Разработчик",
        companyDescription: "Технологична компания, разработваща иновативни решения за търговия в реално време.",
        achievements: [
          "Изграждане на интерфейс за търговия в реално време, стриймващ 50+ символа на акции едновременно със закъснение на обновяване на UI под 50мс.",
          "Менторство на 2 junior разработчици по WebSocket шаблони и оптимизация на производителността на React.",
          "Поддържане на 1,000+ обновления на цени/секунда по време на пиковите часове с последователен рендеринг под 50мс."
        ]
      }
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
      "Senior Full-Stack Developer z 7+ letnim doświadczeniem w tworzeniu wysokowydajnych platform fintech. Specjalizacja w skalowalnych architekturach React/TypeScript, kierowaniu zespołami deweloperskimi i mentorowaniu inżynierów. Udowodnione doświadczenie w dostarczaniu rozwiązań korporacyjnych wpływających na wyniki biznesowe.",
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
    fiveYearsPlus: "7+ lat",

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

    // Footer
    letsWorkTogether: "Pracujmy razem...",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer z 7+ letnim doświadczeniem w fintech, React, TypeScript — portfolio Volodymyra Pestova",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Front-End Developer",
        companyDescription: "Wiodąca firma fintech specjalizująca się w rozwiązaniach płatniczych.",
        achievements: [
          "Architektura platformy zarządzania sprzedawcami obsługującej 500+ sprzedawców i przetwarzającej 10 000+ dziennych transakcji z zerowym przestojem przy 3-krotnym wzroście użytkowników.",
          "Zaprojektowanie i wdrożenie biblioteki komponentów z 40+ komponentami, skracającej czas rozwoju funkcji o 40%.",
          "Optymalizacja pakietu aplikacji z podziałem kodu i leniwym ładowaniem, poprawiająca początkowe ładowanie strony o 35%.",
          "Platforma przeskalowana 3x bez przebudowy architektury."
        ]
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription: "Firma technologiczna zajmująca się nieruchomościami, skoncentrowana na ulepszaniu wyszukiwania nieruchomości.",
        achievements: [
          "Opracowanie interaktywnego wyszukiwania nieruchomości z integracją Mapbox, filtrowaniem geolokalizacyjnym i zaawansowanym wyszukiwaniem fasetowym.",
          "Stworzenie stron z listingami zoptymalizowanymi pod SEO przy użyciu Next.js SSG, stymulujących wzrost ruchu organicznego.",
          "Osiągnięcie wyników Lighthouse powyżej 95 w kategoriach Performance, Accessibility, Best Practices i SEO.",
          "Skrócenie czasu ładowania strony o 50%."
        ]
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription: "Firma technologiczna rozwijająca innowacyjne rozwiązania do handlu w czasie rzeczywistym.",
        achievements: [
          "Budowa interfejsu handlowego w czasie rzeczywistym strumieniującego ponad 50 symboli giełdowych jednocześnie z opóźnieniem aktualizacji UI poniżej 50ms.",
          "Mentoring 2 junior deweloperów w zakresie wzorców WebSocket i optymalizacji wydajności React.",
          "Utrzymanie ponad 1000 aktualizacji cen/sekundę w godzinach szczytu z renderingiem poniżej 50ms."
        ]
      }
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
      "Sviluppatore Senior Full-Stack con 7+ anni di esperienza nella creazione di piattaforme fintech ad alte prestazioni. Competenze in architetture React/TypeScript scalabili, leadership di team di sviluppo e mentoring di ingegneri. Comprovata esperienza nella realizzazione di soluzioni enterprise che generano risultati di business.",
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
    fiveYearsPlus: "7+ anni",

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

    // Footer
    letsWorkTogether: "Lavoriamo insieme...",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Senior Full-Stack Developer",
    portfolioDescription:
      "Senior Full-Stack Developer con 7+ anni di esperienza in fintech, React, TypeScript — portfolio di Volodymyr Pestov",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Senior Front-End Developer",
        companyDescription: "Azienda fintech leader specializzata in soluzioni di pagamento.",
        achievements: [
          "Architettura di piattaforma di gestione commercianti che serve 500+ commercianti ed elabora 10.000+ transazioni giornaliere con zero downtime durante una crescita utenti 3x.",
          "Progettazione e implementazione di una libreria di componenti con 40+ componenti, riducendo i tempi di sviluppo delle funzionalità del 40%.",
          "Ottimizzazione del bundle dell'applicazione con code-splitting e lazy loading, migliorando il caricamento iniziale della pagina del 35%.",
          "Piattaforma scalata 3x senza riscritture architetturali."
        ]
      },
      atlana: {
        position: "Front-End Developer",
        companyDescription: "Azienda tecnologica immobiliare focalizzata sul miglioramento delle esperienze di ricerca immobiliare.",
        achievements: [
          "Sviluppo di ricerca immobiliare interattiva con integrazione Mapbox, filtraggio per geolocalizzazione e ricerca sfaccettata avanzata.",
          "Creazione di pagine di annunci ottimizzate per SEO utilizzando Next.js SSG, stimolando la crescita del traffico organico.",
          "Raggiungimento di punteggi Lighthouse superiori a 95 in Performance, Accessibilità, Best Practices e SEO.",
          "Riduzione del tempo di caricamento della pagina del 50%."
        ]
      },
      impltech: {
        position: "Front-End Developer",
        companyDescription: "Azienda tecnologica che sviluppa soluzioni innovative per il trading in tempo reale.",
        achievements: [
          "Costruzione di un'interfaccia di trading in tempo reale che trasmette 50+ simboli azionari simultaneamente con latenza di aggiornamento UI inferiore a 50ms.",
          "Mentoring di 2 sviluppatori junior su pattern WebSocket e ottimizzazione delle prestazioni React.",
          "Mantenimento di 1.000+ aggiornamenti di prezzo/secondo durante le ore di punta con rendering costante sotto 50ms."
        ]
      }
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
      "Développeur Senior Full-Stack avec 7+ ans d'expérience dans la création de plateformes fintech haute performance. Expertise en architectures React/TypeScript évolutives, direction d'équipes de développement et mentorat d'ingénieurs. Expérience éprouvée dans la livraison de solutions entreprise générant des résultats business.",
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
    fiveYearsPlus: "7+ ans",

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

    // Footer
    letsWorkTogether: "Travaillons ensemble...",

    // Meta tags
    portfolioTitle: "Volodymyr Pestov — Développeur Senior Full-Stack",
    portfolioDescription:
      "Développeur Senior Full-Stack avec 7+ ans d'expérience en fintech, React, TypeScript — portfolio de Volodymyr Pestov",

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
    },

    // Experience data
    experienceData: {
      ukrpay: {
        position: "Développeur Front-End Senior",
        companyDescription: "Entreprise fintech leader spécialisée dans les solutions de paiement.",
        achievements: [
          "Architecture d'une plateforme de gestion des commerçants servant 500+ commerçants et traitant 10 000+ transactions quotidiennes avec zéro temps d'arrêt lors d'une croissance 3x des utilisateurs.",
          "Conception et implémentation d'une bibliothèque de composants avec 40+ composants, réduisant le temps de développement des fonctionnalités de 40%.",
          "Optimisation du bundle de l'application avec le fractionnement de code et le chargement différé, améliorant le chargement initial de la page de 35%.",
          "Plateforme mise à l'échelle 3x sans réécriture architecturale."
        ]
      },
      atlana: {
        position: "Développeur Front-End",
        companyDescription: "Entreprise technologique immobilière axée sur l'amélioration des expériences de recherche de biens.",
        achievements: [
          "Développement d'une recherche immobilière interactive avec intégration Mapbox, filtrage par géolocalisation et recherche à facettes avancée.",
          "Création de pages d'annonces optimisées pour le SEO utilisant Next.js SSG, stimulant la croissance du trafic organique.",
          "Obtention de scores Lighthouse supérieurs à 95 en Performance, Accessibilité, Bonnes Pratiques et SEO.",
          "Réduction du temps de chargement des pages de 50%."
        ]
      },
      impltech: {
        position: "Développeur Front-End",
        companyDescription: "Entreprise technologique développant des solutions innovantes pour le trading en temps réel.",
        achievements: [
          "Construction d'une interface de trading en temps réel diffusant 50+ symboles boursiers simultanément avec une latence de mise à jour de l'interface inférieure à 50ms.",
          "Mentorat de 2 développeurs juniors sur les patterns WebSocket et l'optimisation des performances React.",
          "Maintien de 1 000+ mises à jour de prix/seconde pendant les heures de pointe avec un rendu constant sous 50ms."
        ]
      }
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
