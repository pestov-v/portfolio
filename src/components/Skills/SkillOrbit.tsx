import { FC, useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SKILLS } from "util/constants";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./SkillOrbit.module.scss";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "devops" as const, label: "DEVOPS / TOOLS" },
];

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// --- Mobile: Circular progress card ---
const SkillCard: FC<{ title: string; percent: number; revealed: boolean }> = ({
  title,
  percent,
  revealed,
}) => {
  const [display, setDisplay] = useState(0);
  const [fillPercent, setFillPercent] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const hasAnimatedRef = useRef(false);

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
          <circle className={style.circleTrack} cx="32" cy="32" r={RADIUS} fill="none" strokeWidth="3" />
          <circle className={style.circleFill} cx="32" cy="32" r={RADIUS} fill="none" strokeWidth="3" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className={style.circlePercent}>{display}%</span>
      </div>
      <span className={style.skillName}>{title}</span>
    </div>
  );
};

// --- Desktop: Orbit node ---
const SkillNode: FC<{
  title: string;
  percent: number;
  index: number;
  total: number;
  ring: number;
  revealed: boolean;
}> = ({ title, percent, index, total, ring, revealed }) => {
  const angle = (index / total) * 360;
  const radius = ring === 0 ? 160 : ring === 1 ? 260 : 340;
  const size = 40 + (percent / 100) * 40;

  return (
    <div
      className={`${style.node} ${revealed ? style.revealed : ""}`}
      style={{
        "--angle": `${angle}deg`,
        "--radius": `${radius}px`,
        "--size": `${size}px`,
        "--delay": `${index * 0.08}s`,
        "--orbit-duration": `${60 + ring * 20}s`,
      } as React.CSSProperties}
    >
      <div className={style.nodeInner}>
        <span className={style.nodeTitle}>{title}</span>
        <span className={style.nodePercent}>{percent}%</span>
      </div>
    </div>
  );
};

export const SkillOrbit: FC = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      once: true,
      onEnter: () => setRevealed(true),
    });
    return () => trigger.kill();
  }, []);

  const frontend = SKILLS.filter((s) => s.category === "frontend");
  const backend = SKILLS.filter((s) => s.category === "backend");
  const devops = SKILLS.filter((s) => s.category === "devops");

  return (
    <section className={style.skills} id="skills">
      <div className={style.inner}>
        <span className={style.tag}>{t.ui.tagSkills}</span>
        <h2 className={style.title}>{t.whatIBuildWith}</h2>

        {isDesktop ? (
          // Desktop: Orbit layout
          <div className={style.orbitContainer} ref={ref}>
            <div className={`${style.ring} ${style.ring0}`} />
            <div className={`${style.ring} ${style.ring1}`} />
            <div className={`${style.ring} ${style.ring2}`} />

            <div className={style.center}>
              <span className={style.centerIcon}>⚡</span>
              <span className={style.centerLabel}>STACK</span>
            </div>

            {frontend.map((s, i) => (
              <SkillNode key={s.title} title={s.title} percent={s.percent} index={i} total={frontend.length} ring={0} revealed={revealed} />
            ))}
            {backend.map((s, i) => (
              <SkillNode key={s.title} title={s.title} percent={s.percent} index={i} total={backend.length} ring={1} revealed={revealed} />
            ))}
            {devops.map((s, i) => (
              <SkillNode key={s.title} title={s.title} percent={s.percent} index={i} total={devops.length} ring={2} revealed={revealed} />
            ))}
          </div>
        ) : (
          // Mobile: Grid with circular progress
          <div className={style.grid} ref={ref}>
            {CATEGORIES.map(({ key, label }) => {
              const categorySkills = SKILLS.filter((s) => s.category === key);
              return (
                <div key={key} className={style.category}>
                  <span className={style.categoryLabel}>{label}</span>
                  <div className={style.skillList}>
                    {categorySkills.map(({ title, percent }) => (
                      <SkillCard key={title} title={title} percent={percent} revealed={revealed} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
