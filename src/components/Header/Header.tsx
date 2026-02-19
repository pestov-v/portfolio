import gsap from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Header.module.scss";

gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

export const imgPath = "img/profile/profile";
export const Header: NextPage = () => {
  const { t, language } = useLanguage();
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    if (!greetingRef.current) return;

    CustomBounce.create("myBounce", {
      strength: 0.6,
      squash: 1.5,
      squashID: "myBounce-squash",
    });

    const split = SplitText.create(greetingRef.current, { type: "chars" });
    const splitTxt = split.chars;

    const tl = gsap
      .timeline({
        defaults: {
          duration: 1.5,
          stagger: { amount: 0.1, ease: "sine.in" },
        },
      })
      .from(
        splitTxt,
        {
          duration: 0.6,
          opacity: 0,
          ease: "power1.inOut",
        },
        0
      )
      .from(
        splitTxt,
        {
          y: -350,
          ease: "myBounce",
        },
        0
      )
      .to(
        splitTxt,
        {
          scaleX: 1.8,
          scaleY: 0.7,
          rotate: () => 15 - 30 * Math.random(),
          ease: "myBounce-squash",
          transformOrigin: "50% 100%",
        },
        0
      );

    const handleClick = () => tl.play(0);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      tl.kill();
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
          <h3 className={style.greteen} ref={greetingRef}>{t.greeting}</h3>
        </div>
        <div className="animate-on-scroll fade-in-up stagger-1">
          <h1
            className={style.name}
            style={{ background: "none", WebkitTextFillColor: "unset" }}
            ref={textRef}
          >
            <span style={{ paddingRight: "0.5em" }}>{t.name}</span>
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
