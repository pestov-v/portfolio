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

import style from "../src/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <MainLayout className="app">
      <Navbar />

      <main className={style.main}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <SendMail />
      </main>

      <Footer />

      <ScrollTopButton />
    </MainLayout>
  );
};

export default Home;
