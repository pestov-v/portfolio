import gsap from "gsap";
import { FC, useCallback, useRef, useState } from "react";
import { SKILLS } from "util/constants";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Skills.module.scss";
import { useShowSkills } from "./useShowSkills";

const CATEGORIES = [
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "devops" as const, label: "DEVOPS / TOOLS" },
];

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SkillCard: FC<{ title: string; percent: number; revealed: boolean }> = ({
  title,
  percent,
  revealed,
}) => {
  const [display, setDisplay] = useState(0);
  const [fillPercent, setFillPercent] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const hasAnimatedRef = useRef(false);

  // Initial reveal animation: 0 → percent
  if (revealed && !hasAnimatedRef.current) {
    hasAnimatedRef.current = true;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: percent,
      duration: 4,
      ease: "power2.out",
      onUpdate: () => {
        setDisplay(Math.round(obj.val));
        setFillPercent(obj.val);
      },
    });
  }

  const offset = CIRCUMFERENCE - (fillPercent / 100) * CIRCUMFERENCE;

  const onEnter = useCallback(() => {
    if (!hasAnimatedRef.current) return;
    tweenRef.current?.kill();
    const obj = { val: fillPercent };
    tweenRef.current = gsap.to(obj, {
      val: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        setDisplay(Math.round(obj.val));
        setFillPercent(obj.val);
      },
    });
  }, [fillPercent]);

  const onLeave = useCallback(() => {
    if (!hasAnimatedRef.current) return;
    tweenRef.current?.kill();
    const obj = { val: fillPercent };
    tweenRef.current = gsap.to(obj, {
      val: percent,
      duration: 0.4,
      ease: "power2.out",
      onUpdate: () => {
        setDisplay(Math.round(obj.val));
        setFillPercent(obj.val);
      },
    });
  }, [fillPercent, percent]);

  return (
    <div
      className={style.skillItem}
      data-skill-card
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={style.circleWrap}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title}: ${percent}%`}
      >
        <svg className={style.circleSvg} viewBox="0 0 64 64">
          <circle
            className={style.circleTrack}
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            strokeWidth="3"
          />
          <circle
            className={style.circleFill}
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            strokeWidth="3"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className={style.circlePercent}>{display}%</span>
      </div>
      <span className={style.skillName}>{title}</span>
    </div>
  );
};

export const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useShowSkills({
    ref,
    onReveal: useCallback(() => setRevealed(true), []),
  });

  return (
    <section className={style.skills} id="skills">
      <div className={style.inner}>
        <span className={style.tag}>{t.ui.tagSkills}</span>
        <h2 className={style.title}>{t.whatIBuildWith}</h2>
        <div className={style.grid} ref={ref}>
          {CATEGORIES.map(({ key, label }) => {
            const categorySkills = SKILLS.filter((s) => s.category === key);
            return (
              <div key={key} className={style.category}>
                <span className={style.categoryLabel}>{label}</span>
                <div className={style.skillList}>
                  {categorySkills.map(({ title, percent }) => (
                    <SkillCard
                      key={title}
                      title={title}
                      percent={percent}
                      revealed={revealed}
                    />
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
