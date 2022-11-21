import { NextPage } from "next";
import { ISectionProps } from "../../interfaces";
import { projects } from "../../util/constants";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import style from "./Projects.module.scss";

export const Projects: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.projects} ref={sectionRef}>
      <div className={style.container}>
        <SectionTitle title="portfolio" bgText="Gallery" />

        <div className={style.projectsWrapper}>
          {projects.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
