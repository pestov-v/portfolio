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
}

export const translations: Record<"en" | "uk" | "bg", Translation> = {
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
    aboutBgText: "About",
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
    portfolioBgText: "Gallery",

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
    aboutBgText: "Про мене",
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
    },

    // Personal values
    available: "Доступний",
    master: "Магістр",
    fiveYearsPlus: "5+ років",

    // Skills section
    mySkills: "Мої навички",
    skillsBgText: "Навички",

    // Projects section
    portfolio: "портфоліо",
    portfolioBgText: "Галерея",

    // Contact section
    contactMe: "Зв'язатися зі мною",
    contactBgText: "Контакти",
    sendMeLetter: "Напишіть мені",
    mailMe: "Написати",
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
    aboutBgText: "За мен",
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
    },

    // Personal values
    available: "Наличен",
    master: "Магистър",
    fiveYearsPlus: "5+ години",

    // Skills section
    mySkills: "Моите умения",
    skillsBgText: "Умения",

    // Projects section
    portfolio: "портфолио",
    portfolioBgText: "Галерия",

    // Contact section
    contactMe: "Свържи се с мен",
    contactBgText: "Контакти",
    sendMeLetter: "Пиши ми",
    mailMe: "Пиши",
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
  },
};

export type Language = keyof typeof translations;
