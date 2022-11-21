import type { NextPage } from "next";
import { useRef } from "react";

import { MainLayout } from "../src/Layouts/MainLayout";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Projects } from "../src/components/Projects/Projects";
import { About } from "../src/components/About/About";
import { Skills } from "../src/components/Skills/Skills";
import { Navbar } from "../src/components/Navbar/Navbar";
import { ScrollTopButton } from "../src/components/ui/ScrollTopButton/ScrollTopButton";

import style from "../src/styles/Home.module.scss";

const Home: NextPage = () => {
  const refs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  };

  return (
    <MainLayout className="app">
      <Navbar refs={refs} />

      <main className={style.main}>
        <Header />
        <About sectionRef={refs.about} />
        <Skills sectionRef={refs.skills} />
        <Projects sectionRef={refs.projects} />
      </main>

      <Footer />

      <ScrollTopButton />
    </MainLayout>
  );
};

export default Home;
