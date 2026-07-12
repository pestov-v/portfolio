import { FC } from 'react';
import { IProject } from '../../../util/constants';
import { Modal } from '../../ui/Modal/Modal';
import { MermaidDiagram } from '../../ui/MermaidDiagram/MermaidDiagram';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: IProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!project) return null;

  // Get translated content from projectsData
  const projectData = (t.projectsData as any)[project.translationKey];
  const title = projectData?.title || project.title;
  const description = projectData?.description || project.description;
  const additionalInfo = projectData?.additionalInfo || project.additionalInfo;

  const hasCaseStudy = !!project.caseStudy;

  // Get translated case study content if exists
  const caseStudyData = hasCaseStudy ? (t.caseStudies as any)[project.translationKey] : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.projectModal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {hasCaseStudy && (
          <div className={styles.caseStudy}>
            <h3 className={styles.sectionTitle}>{t.projectModal.caseStudy}</h3>

            <div className={styles.section}>
              <h4 className={styles.subsectionTitle}>🎯 {t.projectModal.challenge}</h4>
              <p className={styles.text}>
                {caseStudyData?.challenge || project.caseStudy!.challenge}
              </p>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subsectionTitle}>💡 {t.projectModal.solution}</h4>
              <p className={styles.text}>
                {caseStudyData?.solution || project.caseStudy!.solution}
              </p>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subsectionTitle}>✨ {t.projectModal.result}</h4>
              <p className={styles.text}>
                {caseStudyData?.result || project.caseStudy!.result}
              </p>
            </div>

            {project.caseStudy!.technologies && (
              <div className={styles.section}>
                <h4 className={styles.subsectionTitle}>🛠 {t.projectModal.technologies}</h4>
                <div className={styles.technologies}>
                  {project.caseStudy!.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.caseStudy!.diagrams && project.caseStudy!.diagrams.length > 0 && (
              <div className={styles.diagramsSection}>
                <h4 className={styles.subsectionTitle}>📊 {t.ui.architecture}</h4>
                {project.caseStudy!.diagrams.map((diagram, index) => (
                  <MermaidDiagram
                    key={index}
                    chart={diagram.chart}
                    caption={diagram.caption}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {additionalInfo && !hasCaseStudy && (
          <div className={styles.additionalInfo}>
            <p>{additionalInfo}</p>
          </div>
        )}

        <div className={styles.footer}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            {t.projectModal.visitProject} →
          </a>
        </div>
      </div>
    </Modal>
  );
};
