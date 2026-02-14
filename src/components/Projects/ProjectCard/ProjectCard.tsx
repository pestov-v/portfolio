import React, { FC, useRef, useCallback } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

  // Get translated content from projectsData
  const projectData = (t.projectsData as any)[translationKey];
  const title = projectData?.title || props.title;
  const description = projectData?.description || props.description;
  const additionalInfo = projectData?.additionalInfo || props.additionalInfo;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10 degrees
    const rotateY = ((x - centerX) / centerX) * -10; // max 10 degrees

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--pointer-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--pointer-y', `${(y / rect.height) * 100}%`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.classList.add(style.tiltActive);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.classList.remove(style.tiltActive);
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  }, []);

  return (
    <div
      ref={cardRef}
      className={style.card}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={style.shine} />
      <div className={style.cardContent}>
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
    </div>
  );
};
