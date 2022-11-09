import { NextPage } from "next";
import style from "./Projects.module.scss";
import ProjectList from "../ProjectList/ProjectList";
import TitleSection from "../ui/TitleSection/TitleSection";

const Projects: NextPage = () => {
  return (
    <div className={style.projects}>
      <TitleSection title="My portfolio" backgroundText="Gallery" />
      <ProjectList />
    </div>
  );
};

export default Projects;
