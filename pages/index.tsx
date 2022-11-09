import type { NextPage } from "next";
import style from "../src/styles/Home.module.scss";
import MainLayout from "../src/Layouts/MainLayout";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Projects from "../src/components/Projects/Projects";
import About from "../src/components/About/About";
import Skills from "../src/components/Skills/Skills";

const Home: NextPage = () => {
  return (
    <MainLayout className="app">
      <Header />

      <main className={style.main}>
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </MainLayout>
  );
};

export default Home;
