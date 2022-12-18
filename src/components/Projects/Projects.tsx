import { projects } from "util/constants";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import style from "./Projects.module.scss";

export const Projects = () => {
  return (
    <section className={style.projects} id="projects">
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
