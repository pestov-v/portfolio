import { useRef } from "react";
import { SKILLS } from "util/constants";
import { useShowSkills } from "./useShowSkills";
import style from "./Skills.module.scss";

const CATEGORIES = [
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "devops" as const, label: "DEVOPS / TOOLS" },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  useShowSkills({ ref });

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
                  {categorySkills.map(({ title, percent }) => (
                    <div key={title} className={style.skillItem} data-skill-card>
                      <div className={style.skillRow}>
                        <span className={style.skillName}>{title}</span>
                        <span className={style.skillPercent}>{percent}%</span>
                      </div>
                      <div
                        className={style.barTrack}
                        role="progressbar"
                        aria-valuenow={percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${title}: ${percent}%`}
                      >
                        <div
                          className={style.barFill}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
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
