import { FC, useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SKILLS } from "util/constants";
import style from "./SkillOrbit.module.scss";

gsap.registerPlugin(ScrollTrigger);

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
  const size = 40 + (percent / 100) * 40; // 40–80px based on skill level

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
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

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

  // Split skills into 3 rings: frontend (inner), backend (middle), devops (outer)
  const frontend = SKILLS.filter((s) => s.category === "frontend");
  const backend = SKILLS.filter((s) => s.category === "backend");
  const devops = SKILLS.filter((s) => s.category === "devops");

  return (
    <section className={style.skills} id="skills">
      <div className={style.inner}>
        <span className={style.tag}>// 03. SKILLS</span>
        <h2 className={style.title}>What I build with.</h2>
        <div className={style.orbitContainer} ref={ref}>
          {/* Orbit rings */}
          <div className={`${style.ring} ${style.ring0}`} />
          <div className={`${style.ring} ${style.ring1}`} />
          <div className={`${style.ring} ${style.ring2}`} />

          {/* Center */}
          <div className={style.center}>
            <span className={style.centerIcon}>⚡</span>
            <span className={style.centerLabel}>STACK</span>
          </div>

          {/* Skill nodes per ring */}
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
      </div>
    </section>
  );
};
