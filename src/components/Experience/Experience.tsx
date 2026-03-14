import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";
import { EXPERIENCE } from "../../util/constants";
import style from "./Experience.module.scss";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-exp-card]");
    const dots = section.querySelectorAll<HTMLElement>("[data-exp-dot]");

    const lineLength = line.getTotalLength();
    line.style.strokeDasharray = `${lineLength}`;
    line.style.strokeDashoffset = `${lineLength}`;

    const ctx = gsap.context(() => {
      // Draw the timeline line on scroll
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      });

      // Stagger cards from alternating sides
      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
        });
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Dots scale in
      dots.forEach((dot) => {
        gsap.set(dot, { scale: 0 });
        gsap.to(dot, {
          scale: 1,
          duration: 0.4,
          ease: "back.out(3)",
          scrollTrigger: {
            trigger: dot,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={style.experience}
      id="experience"
      aria-labelledby="exp-title"
    >
      <div className={style.inner}>
        <span className={style.tag}>// 02. EXPERIENCE</span>
        <h2 className={style.title} id="exp-title">
          Where I&apos;ve worked.
        </h2>
        <div className={style.timeline} ref={sectionRef}>
          {/* SVG timeline line */}
          <svg className={style.line} aria-hidden="true">
            <line
              ref={lineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
            />
          </svg>

          {EXPERIENCE.map((item, index) => {
            const data =
              t.experienceData[
                item.translationKey as keyof typeof t.experienceData
              ];
            return (
              <div key={item.id} className={style.timelineItem}>
                <div className={style.dot} data-exp-dot />
                <div data-exp-card>
                  <ExperienceItem
                    company={item.company}
                    position={data.position}
                    period={item.period}
                    location={item.location}
                    companyDescription={data.companyDescription}
                    achievements={data.achievements}
                    tags={data.tags}
                    isActive={index === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
