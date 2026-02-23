import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { MainLayout } from "../src/Layouts/MainLayout";
import { Header } from "../src/components/Header/Header";
import { LanguageSwitcher } from "../src/components/LanguageSwitcher/LanguageSwitcher";
import { Navbar } from "../src/components/Navbar/Navbar";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher/ThemeSwitcher";
// import { ScrollTopButton } from "../src/components/ui/ScrollTopButton/ScrollTopButton";
import { usePreventScrollJank } from "../src/hooks/usePreventScrollJank";
import { useScrollAnimations } from "../src/hooks/useScrollAnimations";

const About = dynamic(() =>
  import("../src/components/About/About").then((m) => m.About)
);
const Experience = dynamic(() =>
  import("../src/components/Experience/Experience").then((m) => m.Experience)
);
const Skills = dynamic(() =>
  import("../src/components/Skills/Skills").then((m) => m.Skills)
);
const Projects = dynamic(() =>
  import("../src/components/Projects/Projects").then((m) => m.Projects)
);
const SendMail = dynamic(() =>
  import("../src/components/SendMail/SendMail").then((m) => m.SendMail)
);
const Footer = dynamic(() =>
  import("../src/components/Footer/Footer").then((m) => m.Footer)
);

import style from "../src/styles/Home.module.scss";

const Home: NextPage = () => {
  useScrollAnimations();
  usePreventScrollJank();

  return (
    <MainLayout className="app">
      <a href="#main-content" className={style.skipLink}>
        Skip to main content
      </a>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Navbar />
      <main id="main-content" className={style.main}>
        <Header />
        <div className="animate-on-scroll fade-in-up">
          <About />
        </div>
        <div className="animate-on-scroll fade-in-right">
          <Experience />
        </div>
        <div className="animate-on-scroll fade-in-left">
          <Skills />
        </div>
        <div className="animate-on-scroll fade-in-up">
          <Projects />
        </div>
        <div className="animate-on-scroll scale-in">
          <SendMail />
        </div>
      </main>

      <div className="animate-on-scroll fade-in-up">
        <Footer />
      </div>

      {/* <ScrollTopButton /> */}
    </MainLayout>
  );
};

export default Home;
