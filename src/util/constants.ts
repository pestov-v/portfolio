export interface IProject {
    id: number;
    title: string;
    description: string;
    image: string;
    href: string;
    alt: string;
  }

  export type TProjects = IProject[];
  export type Projects = IProject[]; // FIXME: delete type
  
  export const projects: Projects = [
    {
      id: 11,
      title: "Forex-broker",
      description: "i88 #1 app for active trading & long-term investing. Stocks, ETFs, Forex, Metals, Cryptocurrency.",
      href: "https://i88.io",
      image: "i88",
      alt: "Forex-broker",
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
    {
      id: 8,
      title: "What's App Clone",
      description: "Demo WhatsApp-clone with React and firebase",
      href: "https://whats-app-clone-7599c.web.app/",
      image: "whatsapp",
      alt: "What's App",
    },
    {
      id: 7,
      title: "Simple Blog",
      description: "Simple social blog with React, Express, MongoDB and GraphQL",
      href: "https://blogmerng.herokuapp.com/",
      image: "blog-merng",
      alt: "Social blog",
    },
    {
      id: 6,
      title: "Simple Amazona",
      description: "Online market like amazon with React, Express and MongoDB",
      href: "https://simple-amazona.herokuapp.com/",
      image: "amazona",
      alt: "amazona mart",
    },
    {
      id: 5,
      title: "ABZ-test task",
      description: "Test project on React from ABZ-agency",
      href: "https://nakryt.github.io/test/",
      image: "abz-test",
      alt: "abz-agency test",
    },
    {
      id: 4,
      title: "Todo application",
      description: "React todo application with database on firebase",
      href: "https://todo-998f4.web.app/",
      image: "todo-app",
      alt: "todo application",
    },
    {
      id: 3,
      title: "Quiz application",
      description: "React quiz application with database on firebase",
      href: "https://quiz-36da1.web.app/quiz/-M-pVyWbXPA2yCL4xf0d",
      image: "quiz",
      alt: "quiz application",
    },
    {
      id: 2,
      title: "Simple bootstrap app",
      description: "Simple site with bootstrap",
      href: "https://simplebootstrapsite.web.app/",
      image: "bootstrap-app",
      alt: "bootstrap application",
    },
    {
      id: 1,
      title: "Simple menu",
      description: "Simple menu for restaurant",
      href: "https://nakryt.github.io/simple-menu/",
      image: "simple-menu",
      alt: "menu application",
    },
  ];

export enum COLORS {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info'
}

export type TColors = keyof typeof COLORS
  
interface ISkill {
  title: string;
  delay: number;
  percent: number;
  color: TColors;
}

export const SKILLS: ISkill[] = [
  { title: "html", delay: 1, percent: 92, color: COLORS.primary },
  { title: "css", delay: 1, percent: 87, color: COLORS.success },
  { title: "JavaScript", delay: 1.3, percent: 90, color: COLORS.info },
  { title: "nodejs", delay: 1.3, percent: 73, color: COLORS.warning },
  { title: "react", delay: 1.5, percent: 89, color: COLORS.success },
  { title: "react native", delay: 1.5, percent: 65, color: COLORS.primary },
  { title: "vue", delay: 1.6, percent: 62, color: COLORS.danger },
  { title: "angular", delay: 1.6, percent: 53, color: COLORS.info },
];

