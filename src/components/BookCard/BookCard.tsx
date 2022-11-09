import React, { FC } from "react";
import { AppButton } from "../ui/AppButton/AppButton";
import style from "./BookCard.module.scss";

interface Props {
  image: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

export const BookCard: FC<Props> = ({
  title,
  description,
  image,
  href,
  alt,
}) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.imgBox}>
          <picture className="project__item_image">
            <source
              media="(min-width: 1600px)"
              srcSet={`img/${image}/large.webp`}
              type="image/webp"
            />
            <source
              media="(min-width: 1600px)"
              srcSet={`img/${image}/large.jpg`}
            />
            <source
              media="(min-width: 796px)"
              srcSet={`img/${image}/medium.webp`}
              type="image/webp"
            />
            <source
              media="(min-width: 796px)"
              srcSet={`img/${image}/medium.jpg`}
            />
            <source
              srcSet={`img/${image}/large.jpg 3x, img/${image}/medium.jpg 2x, img/${image}/small.jpg 1x`}
            />
            <source srcSet={`img/${image}/small.webp`} type="image/webp" />
            <img src={`img/${image}/small.jpg`} alt={alt} />
          </picture>
        </div>
        <div className={style.details}>
          <h2>{title}</h2>
          <p>{description}</p>
          {href && (
            <a href={href} target="_blank" className="btn">
              <span>Go</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
