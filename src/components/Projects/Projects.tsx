import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import Link from "next/link";
import { useState } from "react";
import { IProject, projects } from "util/constants";
import { useLanguage } from "../../contexts/LanguageContext";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { ProjectModal } from "./ProjectModal/ProjectModal";
import style from "./Projects.module.scss";

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
                5,
              )}`}
            >
              <ProjectCard {...item} onClick={() => handleProjectClick(item)} />
            </div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <div className={`${style.demoBanner} animate-on-scroll fade-in-up`}>
          <div className={style.demoContent}>
            <div className={style.demoIcon}>⚡</div>
            <div className={style.demoText}>
              <h3>{t.demo.tryLiveDemo}</h3>
              <p>{t.demo.subtitle}</p>
            </div>
            <Link href="/demo" className={style.demoButton}>
              {t.demo.tryLiveDemo} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
