import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./About.module.scss";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = gsap.utils.toArray<HTMLElement>(".scrambled", section);
    if (!items.length) return;
    const originalTexts = items.map((el) => el.textContent?.trim() ?? "");
    items.forEach((el) => {
      el.style.minWidth = `${el.getBoundingClientRect().width}px`;
      el.style.opacity = "0";
      el.textContent = "";
    });
    const timeline = gsap.timeline({ id: "ScrambleText", paused: true });
    items.forEach((element, index) => {
      const text = originalTexts[index];
      const tl = gsap
        .timeline()
        .to(element, { duration: 0.01, opacity: 1 })
        .to(
          element,
          {
            duration: 1,
            ease: "none",
            scrambleText: {
              text,
              chars: "upperCase",
              speed: 0.2,
              revealDelay: 0.05,
            },
          },
          "<",
        );
      timeline.add(tl, index * 0.15);
    });
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => timeline.play(),
    });
    return () => {
      st.kill();
      timeline.kill();
      items.forEach((el, i) => {
        el.textContent = originalTexts[i];
        el.style.opacity = "";
        el.style.minWidth = "";
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <section
      className={style.about}
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className={style.inner}>
        <div className={style.left}>
          <span className={style.tag}>// 01. ABOUT</span>
          <h2 className={style.title} id="about-title">
            Who I am.
          </h2>
          <p className={style.body}>{t.description}</p>
          <div className={style.socialLinks}>
            <a
              href="https://github.com/pestov-v"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
            >
              ↗ github
            </a>
            <a
              href="http://linkedin.com/in/pestov-volodymyr-405011206/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
            >
              ↗ linkedin
            </a>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.photoWrap}>
            <Image
              src="/img/profile/profile.jpg"
              alt="Volodymyr Pestov"
              width={400}
              height={440}
              className={style.photo}
            />
          </div>
          <div className={style.infoCards}>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>location</span>
              <span className={style.infoValue}>Nesebar, Bulgaria 🇧🇬</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>status</span>
              <span className={`${style.infoValue} ${style.infoValueAccent}`}>
                ✓ open to work
              </span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>email</span>
              <span className={style.infoValue}>pestov.volodymyr@gmail.com</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>telegram</span>
              <span className={style.infoValue}>@pestov_v</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
