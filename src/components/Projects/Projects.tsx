import { NextPage } from "next";
import { ISectionProps } from "../../interfaces";
import { projects } from "../../util/constants";
import { BookCard } from "../BookCard/BookCard";
import style from "./Projects.module.scss";

const Projects: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.projects} ref={sectionRef}>
      <h2 className={style["section--title"]} data-background-text="Gallery">
        portfolio
      </h2>

      <div className={style.projectsWrapper}>
        {projects.map((item) => (
          <BookCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
