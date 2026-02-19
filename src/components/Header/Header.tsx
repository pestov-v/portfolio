import gsap from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { NextPage } from "next";
import Image from "next/image";
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

    let tween: gsap.core.Tween;
    let split: SplitText;

    const raf = requestAnimationFrame(() => {
      if (!textRef.current) return;

      split = SplitText.create(textRef.current, {
        type: "chars,words,lines",
        mask: "lines",
      });

      if (split.chars.length > 0) {
        (split.chars[0] as HTMLElement).style.marginRight = "-0.04em";
      }

      tween = gsap.from(split.chars, {
        yPercent: () => (Math.random() > 0.5 ? 100 : -100),
        rotation: () => Math.random() * 60 - 30,
        ease: "back.out",
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      tween?.kill();
      split?.revert();
    };
  }, [language]);

  return (
    <header className={style.header}>
      <Image
        src={`/${imgPath}.jpg`}
        alt="Volodymyr Pestov — profile photo"
        className={style.image}
        width={400}
        height={400}
        priority
        fetchPriority="high"
      />

      <div className={style.info}>
        <div>
          <p className={style.greteen}>{t.greeting}</p>
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
            <span ref={el} aria-live="polite" aria-atomic="true" />
          </p>
        </div>

        <div className="animate-on-scroll fade-in-up stagger-3">
          <a
            href="/Volodymyr_Pestov.pdf"
            target="_blank"
            rel="noreferrer"
            className={style.download}
            aria-label={`${t.downloadCV} (PDF, opens in new tab)`}
            download
          >
            {t.downloadCV}
          </a>
        </div>
      </div>

      <i className={style["arrow-next"]} aria-hidden="true" />
    </header>
  );
};
