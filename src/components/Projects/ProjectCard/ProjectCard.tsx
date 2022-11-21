import React, { FC } from "react";
import style from "./ProjectCard.module.scss";

interface Props {
  image: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

export const ProjectCard: FC<Props> = ({
  title,
  image,
  alt,
  description,
  href,
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={style.card}>
      <img src={`img/${image}/small.jpg`} alt={alt} className={style.image} />

      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </a>
  );
};
