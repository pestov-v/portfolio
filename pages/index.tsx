import type { NextPage } from "next";

import { MainLayout } from "../src/Layouts/MainLayout";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Header } from "../src/components/Header/Header";
import { Projects } from "../src/components/Projects/Projects";
import { About } from "../src/components/About/About";
import { Skills } from "../src/components/Skills/Skills";
import { SendMail } from "../src/components/SendMail/SendMail";
import { ScrollTopButton } from "../src/components/ui/ScrollTopButton/ScrollTopButton";
import { Footer } from "../src/components/Footer/Footer";
import { LanguageSwitcher } from "../src/components/LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "../src/components/ThemeSwitcher/ThemeSwitcher";
import { useScrollAnimations } from "../src/hooks/useScrollAnimations";

import style from "../src/styles/Home.module.scss";

const Home: NextPage = () => {
  useScrollAnimations();

  return (
    <MainLayout className="app">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Navbar />

      <main className={style.main}>
        <Header />
        <div className="animate-on-scroll fade-in-up">
          <About />
        </div>
        <div className="animate-on-scroll fade-in-left stagger-1">
          <Skills />
        </div>
        <div className="animate-on-scroll fade-in-right stagger-2">
          <Projects />
        </div>
        <div className="animate-on-scroll scale-in stagger-3">
          <SendMail />
        </div>
      </main>

      <div className="animate-on-scroll fade-in-up">
        <Footer />
      </div>

      <ScrollTopButton />
    </MainLayout>
  );
};

export default Home;
