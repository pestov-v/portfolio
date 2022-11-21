import { NextPage } from "next";
import style from "./Header.module.scss";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const imgPath = "img/profile/profile";
export const Header: NextPage = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed>(null);

  useEffect(() => {
    const options = {
      strings:
        "Front End Developer, Back End Developer, Web Designer, Web Developer, Apps Developer".split(
          ", "
        ),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    };

    if (!el?.current) return;
    // @ts-ignore
    typed.current = new Typed(el.current, options);

    return () => {
      typed?.current?.destroy();
    };
  }, []);

  return (
    <header className={style.header}>
      <picture className={style.imageWrapper}>
        <source srcSet={`/${imgPath}.webp`} type="image/webp" />
        <source media="(min-width: 796px)" srcSet={`/${imgPath}.jpg`} />
        <source srcSet={`/${imgPath}-small.webp`} type="image/webp" />
        <img
          src={`${imgPath}-small.jpg`}
          alt="avatar"
          className={style.image}
        />
      </picture>

      <div className={style.info}>
        <h3 className={style.greteen}>Hello, I&apos;m</h3>
        <h1 className={style.name}>Volodymyr</h1>

        <p className={style.skills}>
          <span ref={el} />
        </p>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className={style.download}
          download
        >
          Download CV
        </a>
      </div>

      <i className={style["arrow-next"]} />
    </header>
  );
};
