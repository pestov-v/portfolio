import React, { FC } from 'react';
import Image from 'next/image';
import { IProject } from 'util/constants';
import style from './ProjectCard.module.scss';

export const ProjectCard: FC<IProject> = (props) => {
  const { title, image, alt, href } = props;
  const { description, additionalInfo } = props;
  return (
    <a href={href} target='_blank' rel='noreferrer' className={style.card}>
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
    </a>
  );
};
