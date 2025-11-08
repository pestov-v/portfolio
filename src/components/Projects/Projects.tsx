import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import { projects } from "util/constants";
import { useLanguage } from "../../contexts/LanguageContext";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import style from "./Projects.module.scss";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className={style.projects} id="projects">
      <div className={style.container}>
        <SectionTitle title={t.portfolio} bgText={t.portfolioBgText} />

        <div className={style.projectsWrapper}>
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={`animate-on-scroll scale-in stagger-${Math.min(
                (index % 3) + 1,
                5
              )}`}
            >
              <ProjectCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
