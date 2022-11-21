import { NextPage } from "next";
import { ISectionProps } from "../../interfaces";
import { projects } from "../../util/constants";
import { BookCard } from "../BookCard/BookCard";
import style from "./Projects.module.scss";

const Projects: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.projects} ref={sectionRef}>
      <div className={style.container}>
        <h2
          className={style["section--title"]}
          data-text="portfolio"
          title="portfolio"
        >
          Gallery
        </h2>

        <div className={style.projectsWrapper}>
          {projects.map((item) => (
            <BookCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
