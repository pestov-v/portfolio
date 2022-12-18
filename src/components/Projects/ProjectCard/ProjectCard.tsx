import React, { FC } from "react";
import Image from "next/image";
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
      <Image
        src={image}
        alt={alt}
        className={style.image}
        width={320}
        height={170}
      />

      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </a>
  );
};
