import { useRef } from "react";
import { SKILLS } from "util/constants";
import { ProgressBar } from "components/ui/ProgressBar/ProgressBar";
import { useShowSkills } from "./useShowSkills";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Skills.module.scss";

const CATEGORIES = [
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "devops" as const, label: "DEVOPS / TOOLS" },
];

export const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useShowSkills({ ref, className: style.show });

  return (
    <section className={style.skills} id="skills">
      <div className={style.inner}>
        <span className={style.tag}>// 03. SKILLS</span>
        <h2 className={style.title}>What I build with.</h2>
        <div className={style.grid} ref={ref}>
          {CATEGORIES.map(({ key, label }) => {
            const categorySkills = SKILLS.filter((s) => s.category === key);
            return (
              <div key={key} className={style.category}>
                <span className={style.categoryLabel}>{label}</span>
                <div className={style.skillList}>
                  {categorySkills.map(({ title, percent, color }) => (
                    <div key={title} className={style.skillItem}>
                      <div className={style.skillRow}>
                        <span className={style.skillName}>{title}</span>
                        <span className={style.skillPercent}>{percent}%</span>
                      </div>
                      <ProgressBar
                        percent={`${percent}%`}
                        addWidthImmediately={false}
                        transitionDelay={0}
                        reverse={false}
                        color={color}
                        label={title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
