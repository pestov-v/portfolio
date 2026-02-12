export interface Translation {
  // Header
  greeting: string;
  name: string;
  downloadCV: string;

  // Navigation
  about: string;
  skills: string;
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
    matrix: {
      title: string;
      description: string;
    };
    youtube: {
      title: string;
      description: string;
    };
    covid: {
      title: string;
      description: string;
    };
    facebook: {
      title: string;
      description: string;
    };
    abz: {
      title: string;
      description: string;
    };
    bootstrap: {
      title: string;
      description: string;
    };
    menu: {
      title: string;
      description: string;
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
    projects: "projects",
    contact: "mail me",

    // About section
    aboutMe: "About me",
    aboutBgText: "Aboutme",
    jobTitle: "Web Developer & UI/UX Designer",
    description:
      "Front-end developer with 5+ years of experience designing and building responsive web design and mobile apps. Proficient with CSS and JS Frameworks, with extensive knowledge of UX and user psychology.",
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
    fiveYearsPlus: "5+ years",

    // Skills section
    mySkills: "My Skills",
    skillsBgText: "Skills",

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
    portfolioTitle: "Portfolio - Volodymyr Pestov",
    portfolioDescription:
      "WebDeveloper, WebDesigner, FrontEnd, BackEnd - Volodymyr Pestov's portfolio",

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
      matrix: {
        title: "Matrix table",
        description: "Simple generated matrix table with React featuring statistical data display and calculation",
      },
      youtube: {
        title: "Youtube Clone",
        description: "Mini youtube clone with search, video list, and video player",
      },
      covid: {
        title: "Covid-19 tracker",
        description: "Tracker for covid-19",
      },
      facebook: {
        title: "Facebook Clone",
        description: "Demo facebook-clone with React and firebase",
      },
      abz: {
        title: "ABZ-test task",
        description:
          "Delivered pixel-perfect layouts with a strong focus on performance optimization",
      },
      bootstrap: {
        title: "Simple bootstrap app",
        description: "Simple site with bootstrap",
      },
      menu: {
        title: "Simple menu",
        description: "Simple menu for restaurant",
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
    projects: "проекти",
    contact: "написати",

    // About section
    aboutMe: "Про мене",
    aboutBgText: "Aboutme",
    jobTitle: "Web-розробник і UI/UX дизайнер",
    description:
      "Front-end розробник з 5+ роками досвіду проектування та створення адаптивного web-дизайну та мобільних додатків. Володію CSS та JS фреймворками, маю глибокі знання UX та психології користувачів.",
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
    fiveYearsPlus: "5+ років",

    // Skills section
    mySkills: "Мої навички",
    skillsBgText: "Skills",

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
    portfolioTitle: "Портфоліо - Володимир Пестов",
    portfolioDescription:
      "Web-розробник, Web-дизайнер, FrontEnd, BackEnd - портфоліо Володимира Пестова",

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
          "Fullstack система бронювання з доступністю в реальному часі, управлінням гостями та відстеженням резервацій · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "CRM система для угод",
        description:
          "Платформа управління відносинами з клієнтами для відстеження угод, керування взаємодією з клієнтами та моніторингу прогресу воронки продажів.",
        additionalInfo:
          "Управління воронкою продажів з відстеженням угод, базою даних клієнтів та аналітичним дашбордом · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - CRM система кандидатів",
        description:
          "Система управління рекрутингом для відстеження кандидатів на роботу, управління процесами співбесід та організації робочих процесів найму.",
        additionalInfo:
          "Система відстеження заявників з профілями кандидатів, плануванням співбесід та аналітикою рекрутингу · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      matrix: {
        title: "Матрична таблиця",
        description: "Проста згенерована матрична таблиця з React з можливістю відображення та прораховування статистичних даних",
      },
      youtube: {
        title: "Клон YouTube",
        description: "Міні-клон YouTube з пошуком, списком відео та відеоплеєром",
      },
      covid: {
        title: "Трекер Covid-19",
        description: "Трекер для відстеження covid-19",
      },
      facebook: {
        title: "Клон Facebook",
        description: "Демо клон facebook з React та firebase",
      },
      abz: {
        title: "Тестове завдання ABZ",
        description:
          "Pixel-perfect верстка з сильним фокусом на оптимізацію продуктивності",
      },
      bootstrap: {
        title: "Простий додаток на bootstrap",
        description: "Простий сайт з bootstrap",
      },
      menu: {
        title: "Просте меню",
        description: "Просте меню для ресторану",
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
    projects: "проекти",
    contact: "пиши ми",

    // About section
    aboutMe: "За мен",
    aboutBgText: "Aboutme",
    jobTitle: "Web разработчик и UI/UX дизайнер",
    description:
      "Front-end разработчик с 5+ години опит в проектирането и създаването на адаптивен web дизайн и мобилни приложения. Владея CSS и JS фреймуърци, имам задълбочени познания по UX и психология на потребителите.",
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
    fiveYearsPlus: "5+ години",

    // Skills section
    mySkills: "Моите умения",
    skillsBgText: "Skills",

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
    portfolioTitle: "Портфолио - Володимир Пестов",
    portfolioDescription:
      "Web разработчик, Web дизайнер, FrontEnd, BackEnd - портфолио на Володимир Пестов",

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
          "Управление на продажбена фуния с проследяване на сделки, база данни с клиенти и аналитично табло · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - CRM система за кандидати",
        description:
          "Система за управление на набиране на персонал за проследяване на кандидати за работа, управление на процеси на интервюта и организиране на работни потоци за наемане.",
        additionalInfo:
          "Система за проследяване на кандидати с профили на кандидати, планиране на интервюта и аналитика за набиране · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      matrix: {
        title: "Матрична таблица",
        description: "Проста генерирана матрична таблица с React с възможност за показване и изчисляване на статистически данни",
      },
      youtube: {
        title: "Клонинг на YouTube",
        description: "Мини клонинг на YouTube с търсене, списък с видеа и видео плейър",
      },
      covid: {
        title: "Тракер за Covid-19",
        description: "Тракер за covid-19",
      },
      facebook: {
        title: "Клонинг на Facebook",
        description: "Демо клонинг на facebook с React и firebase",
      },
      abz: {
        title: "Тестова задача ABZ",
        description:
          "Доставени pixel-perfect оформления със силен фокус върху оптимизация на производителността",
      },
      bootstrap: {
        title: "Просто приложение с bootstrap",
        description: "Прост сайт с bootstrap",
      },
      menu: {
        title: "Просто меню",
        description: "Просто меню за ресторант",
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
    projects: "projekty",
    contact: "napisz do mnie",

    // About section
    aboutMe: "O mnie",
    aboutBgText: "Aboutme",
    jobTitle: "Web Developer & UI/UX Designer",
    description:
      "Front-end developer z ponad 5-letnim doświadczeniem w projektowaniu i tworzeniu responsywnych stron internetowych oraz aplikacji mobilnych. Biegły w frameworkach CSS i JS, z rozległą wiedzą z zakresu UX i psychologii użytkownika.",
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
    fiveYearsPlus: "5+ lat",

    // Skills section
    mySkills: "Moje umiejętności",
    skillsBgText: "Skills",

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
    portfolioTitle: "Portfolio - Volodymyr Pestov",
    portfolioDescription:
      "WebDeveloper, WebDesigner, FrontEnd, BackEnd - portfolio Volodymyra Pestova",

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
          "Zarządzanie lejkiem sprzedaży ze śledzeniem transakcji, bazą danych klientów i dashboardem analitycznym · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - System CRM kandydatów",
        description:
          "System zarządzania rekrutacją do śledzenia kandydatów do pracy, zarządzania procesami rozmów kwalifikacyjnych i organizowania przepływów pracy rekrutacyjnej.",
        additionalInfo:
          "System śledzenia kandydatów z profilami kandydatów, planowaniem rozmów kwalifikacyjnych i analityką rekrutacyjną · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      matrix: {
        title: "Tabela macierzowa",
        description: "Prosta wygenerowana tabela macierzowa z React z możliwością wyświetlania i obliczania danych statystycznych",
      },
      youtube: {
        title: "Klon YouTube",
        description: "Mini klon YouTube z wyszukiwaniem, listą wideo i odtwarzaczem wideo",
      },
      covid: {
        title: "Tracker Covid-19",
        description: "Tracker dla covid-19",
      },
      facebook: {
        title: "Klon Facebook",
        description: "Demo klon facebook z React i firebase",
      },
      abz: {
        title: "Zadanie testowe ABZ",
        description:
          "Dostarczone układy pixel-perfect z silnym naciskiem na optymalizację wydajności",
      },
      bootstrap: {
        title: "Prosta aplikacja bootstrap",
        description: "Prosta strona z bootstrap",
      },
      menu: {
        title: "Proste menu",
        description: "Proste menu dla restauracji",
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
    projects: "progetti",
    contact: "scrivimi",

    // About section
    aboutMe: "Su di me",
    aboutBgText: "Aboutme",
    jobTitle: "Web Developer & UI/UX Designer",
    description:
      "Sviluppatore Front-end con oltre 5 anni di esperienza nella progettazione e creazione di design web responsive e app mobili. Competente nei framework CSS e JS, con una vasta conoscenza di UX e psicologia dell'utente.",
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
    fiveYearsPlus: "5+ anni",

    // Skills section
    mySkills: "Le mie competenze",
    skillsBgText: "Skills",

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
    portfolioTitle: "Portfolio - Volodymyr Pestov",
    portfolioDescription:
      "WebDeveloper, WebDesigner, FrontEnd, BackEnd - portfolio di Volodymyr Pestov",

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
          "Sistema di prenotazione fullstack con disponibilità in tempo reale, gestione ospiti e tracciamento prenotazioni · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "Sistema CRM per trattative",
        description:
          "Piattaforma di gestione delle relazioni con i clienti per il tracciamento delle trattative, la gestione delle interazioni con i clienti e il monitoraggio del progresso della pipeline di vendita.",
        additionalInfo:
          "Gestione pipeline di vendita con tracciamento trattative, database clienti e dashboard analitico · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - Sistema CRM candidati",
        description:
          "Sistema di gestione del reclutamento per il tracciamento dei candidati di lavoro, la gestione dei processi di colloquio e l'organizzazione dei flussi di lavoro di assunzione.",
        additionalInfo:
          "Sistema di tracciamento candidati con profili candidati, pianificazione colloqui e analisi reclutamento · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      matrix: {
        title: "Tabella a matrice",
        description: "Semplice tabella a matrice generata con React con visualizzazione e calcolo di dati statistici",
      },
      youtube: {
        title: "Clone YouTube",
        description: "Mini clone YouTube con ricerca, lista video e lettore video",
      },
      covid: {
        title: "Tracker Covid-19",
        description: "Tracker per covid-19",
      },
      facebook: {
        title: "Clone Facebook",
        description: "Demo clone di facebook con React e firebase",
      },
      abz: {
        title: "Compito test ABZ",
        description:
          "Layout pixel-perfect con forte focus sull'ottimizzazione delle prestazioni",
      },
      bootstrap: {
        title: "App bootstrap semplice",
        description: "Sito semplice con bootstrap",
      },
      menu: {
        title: "Menu semplice",
        description: "Menu semplice per ristorante",
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
    projects: "projets",
    contact: "écrivez-moi",

    // About section
    aboutMe: "À propos de moi",
    aboutBgText: "Aboutme",
    jobTitle: "Développeur Web & Designer UI/UX",
    description:
      "Développeur Front-end avec plus de 5 ans d'expérience dans la conception et la création de design web responsive et d'applications mobiles. Maîtrise des frameworks CSS et JS, avec une vaste connaissance de l'UX et de la psychologie utilisateur.",
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
    fiveYearsPlus: "5+ ans",

    // Skills section
    mySkills: "Mes compétences",
    skillsBgText: "Skills",

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
    portfolioTitle: "Portfolio - Volodymyr Pestov",
    portfolioDescription:
      "WebDeveloper, WebDesigner, FrontEnd, BackEnd - portfolio de Volodymyr Pestov",

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
          "Système de réservation fullstack avec disponibilité en temps réel, gestion des clients et suivi des réservations · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      deals: {
        title: "Système CRM pour les affaires",
        description:
          "Plateforme de gestion des relations clients pour suivre les affaires, gérer les interactions avec les clients et surveiller la progression du pipeline de ventes.",
        additionalInfo:
          "Gestion du pipeline de ventes avec suivi des affaires, base de données clients et tableau de bord analytique · NextJS, NestJS, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      candidates: {
        title: "CandidatesHub - Système CRM de candidats",
        description:
          "Système de gestion du recrutement pour suivre les candidats à l'emploi, gérer les processus d'entretien et organiser les flux de travail d'embauche.",
        additionalInfo:
          "Système de suivi des candidats avec profils de candidats, planification d'entretiens et analyses de recrutement · React, Express, TypeScript, TailwindCSS, Postgres, TypeORM",
      },
      matrix: {
        title: "Tableau matriciel",
        description: "Simple tableau matriciel généré avec React avec affichage et calcul de données statistiques",
      },
      youtube: {
        title: "Clone YouTube",
        description: "Mini clone YouTube avec recherche, liste de vidéos et lecteur vidéo",
      },
      covid: {
        title: "Tracker Covid-19",
        description: "Tracker pour covid-19",
      },
      facebook: {
        title: "Clone Facebook",
        description: "Démo clone de facebook avec React et firebase",
      },
      abz: {
        title: "Tâche de test ABZ",
        description:
          "Mise en page pixel-perfect avec un fort accent sur l'optimisation des performances",
      },
      bootstrap: {
        title: "Application bootstrap simple",
        description: "Site simple avec bootstrap",
      },
      menu: {
        title: "Menu simple",
        description: "Menu simple pour restaurant",
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
