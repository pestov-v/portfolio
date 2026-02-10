import { useRef, useState, useEffect } from "react";

import { SKILLS } from "util/constants";
import { useShowSkills } from "./useShowSkills";
import { ProgressBar } from "components/ui/ProgressBar/ProgressBar";
import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Skills.module.scss";

export const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useShowSkills({ ref, className: style.show });

  // Detect mobile on client side (SSR-safe)
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <section className={style.skills} id="skills">
      <SectionTitle title={t.mySkills} bgText={t.skillsBgText} />

      <div className={style.progressWrapper} ref={ref}>
        {SKILLS.map(({ title, percent, color }, index) => (
          <div
            className={`${style.progressItem} animate-on-scroll ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} stagger-${Math.min(index + 1, 5)}`}
            key={title}
          >
            <p
              className={[
                style.progressTitle,
                index % 2 ? style.flexEnd : "",
              ].join(" ")}
            >
              {title}
            </p>
            <ProgressBar
              percent={`${percent}%`}
              addWidthImmediately={isMobile}
              transitionDelay={0}
              reverse={index % 2 !== 0}
              color={color}
            />
          </div>
        ))}
      </div>

      <i className={style["arrow-next"]} />
    </section>
  );
};
