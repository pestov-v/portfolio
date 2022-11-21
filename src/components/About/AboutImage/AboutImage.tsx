import style from "./AboutImage.module.scss";

const IMG_PATH = "img/about/about";
export const AboutImage = () => {
  return (
    <picture>
      <source
        media="(min-width: 796px)"
        srcSet={`${IMG_PATH}.webp`}
        type="image/webp"
      />
      <source media="(min-width: 796px)" srcSet={`${IMG_PATH}.jpg`} />
      <source
        srcSet={`${IMG_PATH}.jpg 3x, ${IMG_PATH}.jpg 2x, ${IMG_PATH}-small.jpg 1x`}
      />
      <source srcSet={`${IMG_PATH}-small.webp`} type="image/webp" />
      <img
        src={`${IMG_PATH}-small.jpg`}
        alt="me"
        className={style.AboutImage}
      />
    </picture>
  );
};
