import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { trackSocialClick } from "../../lib/analytics";
import ShaderBackground from "../ui/shader-background";
import style from "./About.module.scss";
import { CodeMonitor } from "./CodeMonitor/CodeMonitor";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export const About = () => {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  // LinkedIn badge is rendered client-only: its script mutates the DOM
  // (data-rendered/data-uid), which breaks SSR hydration if pre-rendered
  const [badgeReady, setBadgeReady] = useState(false);

  useEffect(() => {
    setBadgeReady(true);
  }, []);

  useEffect(() => {
    if (!badgeReady) return;
    const src = "https://platform.linkedin.com/badges/js/profile.js";
    if (document.querySelector(`script[src="${src}"]`)) {
      (window as any).LIRenderAll?.();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [badgeReady]);

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
      <ShaderBackground className={style.shaderCanvas} />
      <div className={style.inner}>
        <div className={style.left}>
          <span className={style.tag}>{t.ui.tagAbout}</span>
          <h2 className={style.title} id="about-title">
            {t.name}
          </h2>
          <p className={style.body}>{t.description}</p>
          <div className={style.socialLinks}>
            <a
              href="https://github.com/pestov-v"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
              onClick={() => trackSocialClick("github")}
            >
              {t.ui.githubLink}
            </a>
            <a
              href="https://linkedin.com/in/pestov-volodymyr-405011206/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
              onClick={() => trackSocialClick("linkedin")}
            >
              {t.ui.linkedinLink}
            </a>
          </div>
        </div>

        <div className={style.right}>
          {/* 3D Apple-style Code Monitor with scroll animation */}
          <CodeMonitor />

          <div className={style.infoCards}>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>{t.ui.locationLabel}</span>
              <span className={style.infoValue}>Poland, Wroclaw</span>
            </div>
            <div className={style.infoCard}>
              {badgeReady && (
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="medium"
                  data-theme={resolvedTheme}
                  data-type="HORIZONTAL"
                  data-vanity="volodymyr-pestov"
                  data-version="v1"
                >
                  <a
                    className="badge-base__link LI-simple-link"
                    href="https://ax.linkedin.com/in/volodymyr-pestov?trk=profile-badge"
                  >
                    Pestov Volodymyr
                  </a>
                </div>
              )}
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>{t.ui.statusLabel}</span>
              <span className={`${style.infoValue} ${style.infoValueAccent}`}>
                {t.ui.openToWork}
              </span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>{t.ui.emailLabel}</span>
              <span className={style.infoValue}>dev@pestov.pro</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>{t.ui.telegramLabel}</span>
              <span className={style.infoValue}>@pestov_v</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
