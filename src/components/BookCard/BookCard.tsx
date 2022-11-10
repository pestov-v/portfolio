import React, { FC } from "react";
import style from "./BookCard.module.scss";

interface Props {
  image: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

const BookCard: FC<Props> = (props) => {
  const { title, description, image, href, alt } = props;
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.imgBox}>
          <picture>
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
            <img
              src={`img/${image}/small.jpg`}
              alt={alt}
              className={style.image}
            />
          </picture>
        </div>
        <div className={style.details}>
          <h2>{title}</h2>
          <p>{description}</p>
          {href && (
            <a href={href} target="_blank" rel="noreferrer" className="btn">
              <span>Go</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
