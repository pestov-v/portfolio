import React, { FC } from 'react';
import Image from 'next/image';
import { IProject } from 'util/constants';
import { useLanguage } from '../../../contexts/LanguageContext';
import style from './ProjectCard.module.scss';

interface ProjectCardProps extends IProject {
  onClick?: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { translationKey, image, alt, onClick } = props;
  const { t } = useLanguage();

  // Get translated content from projectsData
  const projectData = (t.projectsData as any)[translationKey];
  const title = projectData?.title || props.title;
  const description = projectData?.description || props.description;
  const additionalInfo = projectData?.additionalInfo || props.additionalInfo;

  return (
    <div
      className={style.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <Image
        src={image}
        alt={alt}
        className={style.image}
        width={320}
        height={170}
      />

      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      {additionalInfo && (
        <p className={style.additionalInfo}>{additionalInfo}</p>
      )}
    </div>
  );
};
