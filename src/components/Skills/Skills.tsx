import { FC, useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { SKILLS } from "util/constants";
import { useShowSkills } from "./useShowSkills";
import style from "./Skills.module.scss";

const CATEGORIES = [
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "devops" as const, label: "DEVOPS / TOOLS" },
];

const SkillCard: FC<{ title: string; percent: number }> = ({ title, percent }) => {
  const [display, setDisplay] = useState(percent);
  const [barWidth, setBarWidth] = useState(percent);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const onEnter = useCallback(() => {
    tweenRef.current?.kill();
    const obj = { val: 0 };
    setBarWidth(100);
    tweenRef.current = gsap.to(obj, {
      val: 100,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(obj.val)),
    });
  }, []);

  const onLeave = useCallback(() => {
    tweenRef.current?.kill();
    setDisplay(percent);
    setBarWidth(percent);
  }, [percent]);

  return (
    <div
      className={style.skillItem}
      data-skill-card
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={style.skillRow}>
        <span className={style.skillName}>{title}</span>
        <span className={style.skillPercent}>{display}%</span>
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
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
};

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
                    <SkillCard key={title} title={title} percent={percent} />
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
