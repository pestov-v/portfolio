import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Header.module.scss";

gsap.registerPlugin(SplitText);

export const imgPath = "img/profile/profile";
export const Header: NextPage = () => {
  const { t, language } = useLanguage();
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsEn =
      "Front End Developer, Back End Developer, Web Designer, Web Developer, Applications Developer";
    const skillsUk =
      "Front End Розробник, Back End Розробник, Web Дизайнер, Web Розробник, Розробник Додатків";
    const skillsBg =
      "Front End Разработчик, Back End Разработчик, Web Дизайнер, Web Разработчик, Разработчик на Приложения";

    let skills = skillsEn;
    if (language === "uk") skills = skillsUk;
    else if (language === "bg") skills = skillsBg;

    const options = {
      strings: skills.split(", "),
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
  }, [language]);

  useEffect(() => {
    if (!textRef.current) return;

    const split = SplitText.create(textRef.current, {
      type: "chars,words,lines",
      mask: "lines",
    });

    const tween = gsap.from(split.chars, {
      yPercent: () => (Math.random() > 0.5 ? 100 : -100),
      rotation: () => Math.random() * 60 - 30,
      ease: "back.out",
      autoAlpha: 0,
      repeat: 2,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });

    return () => {
      tween.kill();
      split.revert();
    };
  }, []);

  return (
    <header className={style.header}>
      <div className="animate-on-scroll scale-in">
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
      </div>

      <div className={style.info}>
        <div className="animate-on-scroll fade-in-down">
          <h3 className={style.greteen}>{t.greeting}</h3>
        </div>
        <div className="animate-on-scroll fade-in-up stagger-1">
          <h1
            className={style.name}
            style={{ background: "none", WebkitTextFillColor: "unset" }}
            ref={textRef}
          >
            {/* <GradientText
              colors={["#5227FF", "#5e9bd0"]}
              animationSpeed={3}
              showBorder={false}
            ref={textRef}

            > */}
            <span style={{ paddingRight: "0.5em" }}>{t.name}</span>
            {/* </GradientText> */}
          </h1>
        </div>

        <div className="animate-on-scroll fade-in-up stagger-2">
          <p className={style.skills}>
            <span ref={el} />
          </p>
        </div>

        <div className="animate-on-scroll fade-in-up stagger-3">
          <a
            href="/Volodymyr_Pestov.pdf"
            target="_blank"
            rel="noreferrer"
            className={style.download}
            download
          >
            {t.downloadCV}
          </a>
        </div>
      </div>

      <i className={style["arrow-next"]} />
    </header>
  );
};
