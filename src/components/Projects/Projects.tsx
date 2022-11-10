import { NextPage } from "next";
import style from "./Projects.module.scss";
import ProjectList from "../ProjectList/ProjectList";
import TitleSection from "../ui/TitleSection/TitleSection";
import { ISectionProps } from "../../interfaces";

const Projects: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.projects} ref={sectionRef}>
      <TitleSection title="portfolio" backgroundText="Gallery" />
      <ProjectList />
    </section>
  );
};

export default Projects;
