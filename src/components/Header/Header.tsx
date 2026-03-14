import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Header.module.scss";

export const imgPath = "img/profile/profile";

export const Header: NextPage = () => {
  const { t, language } = useLanguage();
  const el = useRef(null);
  const typed = useRef<any>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const skillsEn =
      "Full-Stack Developer, Frontend Architect, Software Engineer";
    const skillsUk =
      "Full-Stack Розробник, Frontend Архітектор, Software Engineer";
    const skillsBg =
      "Full-Stack Разработчик, Frontend Архитект, Software Engineer";
    let skills = skillsEn;
    if (language === "uk") skills = skillsUk;
    else if (language === "bg") skills = skillsBg;
    if (!el?.current) return;
    let instance: any;
    import("typed.js").then(({ default: Typed }) => {
      if (!el.current) return;
      instance = new Typed(el.current, {
        strings: skills.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
      typed.current = instance;
    });
    return () => {
      instance?.destroy();
    };
  }, [language]);

  useEffect(() => {
    if (!textRef.current) return;
    let tween: any;
    let split: any;
    let raf: number;
    let cancelled = false;

    Promise.all([
      import("gsap"),
      import("gsap/CustomBounce"),
      import("gsap/CustomEase"),
      import("gsap/SplitText"),
    ]).then(([gsapMod, { CustomBounce }, { CustomEase }, { SplitText }]) => {
      if (cancelled || !textRef.current) return;
      const gsap = gsapMod.default;
      gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

      raf = requestAnimationFrame(() => {
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
          stagger: { amount: 1.5, from: "random" },
        });
      });
    });

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      tween?.kill();
      split?.revert();
    };
  }, [language]);

  return (
    <header className={style.hero} id="home">
      <div className={style.badge}>
        <span className={style.badgeDot} aria-hidden="true" />
        <span className={style.badgeText}>available for work</span>
      </div>

      <h1 className={style.name} ref={textRef}>
        {t.name}
      </h1>

      <p className={style.role}>
        <span ref={el} aria-live="polite" aria-atomic="true" />
      </p>

      <p className={style.description}>
        Building high-performance web applications with modern technologies and
        clean, maintainable architecture.
      </p>

      <div className={style.btns}>
        <a href="#projects" className={style.btnPrimary}>
          view my work
        </a>
        <a
          href="/Volodymyr_Pestov.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className={style.btnSecondary}
          aria-label={`${t.downloadCV} (PDF, opens in new tab)`}
        >
          {t.downloadCV}
        </a>
      </div>

      <div className={style.stats}>
        <div className={style.statItem}>
          <span className={style.statNumber}>6+</span>
          <span className={style.statLabel}>YEARS EXP.</span>
        </div>
        <div className={style.statDivider} aria-hidden="true" />
        <div className={style.statItem}>
          <span className={style.statNumber}>30+</span>
          <span className={style.statLabel}>PROJECTS</span>
        </div>
        <div className={style.statDivider} aria-hidden="true" />
        <div className={style.statItem}>
          <span className={style.statNumber}>∞</span>
          <span className={style.statLabel}>COFFEE</span>
        </div>
      </div>
    </header>
  );
};
