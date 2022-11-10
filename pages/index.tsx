import type { NextPage } from "next";
import { useRef } from "react";

import style from "../src/styles/Home.module.scss";
import MainLayout from "../src/Layouts/MainLayout";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Projects from "../src/components/Projects/Projects";
import About from "../src/components/About/About";
import Skills from "../src/components/Skills/Skills";
import Navbar from "../src/components/Navbar/Navbar";
import ScrollTopButton from "../src/components/ui/ScrollTopButton/ScrollTopButton";
import { useVisible } from "../src/hooks/useVisible";
import navbarStyle from "../src/components/Navbar/Navbar.module.scss";

const Home: NextPage = () => {
  const navbar = useRef<HTMLElement>(null);

  useVisible({
    element: navbar,
    style: navbarStyle.visible,
    throttleTime: 10,
    offsetY: 100,
  });

  const about = useRef<HTMLElement>(null);
  const skills = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);

  const refs = {
    navbar,
    about,
    skills,
    projects,
  };

  return (
    <MainLayout className="app">
      <Navbar refs={refs} />

      <Header />

      <main className={style.main}>
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
