import { NextPage } from "next";
import Image from "next/image";
import style from "./Header.module.scss";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header: NextPage = () => {
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
      <Image
        className={style.image}
        width={400}
        height={400}
        src="/img/profile.jpg"
        alt="my photo"
      />

      <div className={style.info}>
        <h3>Hello, I'm</h3>
        <h1 className={style.name}>Volodymyr</h1>

        <p className={style.skills}>
          <span ref={el} />
        </p>

        <a href="/cv.pdf" target="_blank" className={style.download}>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
