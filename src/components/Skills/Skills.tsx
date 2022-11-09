import { useEffect, useRef } from "react";
import { SKILLS } from "../../util/constants";
import { isInView } from "../../util/helpers";
import ProgressBar from "../ui/ProgressBar/ProgressBar";
import TitleSection from "../ui/TitleSection/TitleSection";
import style from "./Skills.module.scss";

const Skills = () => {
  const progressWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (!progressWrapperRef.current || !isInView(progressWrapperRef.current))
        return;
      progressWrapperRef.current.classList.add(style.show);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <section className={style.skills}>
      <TitleSection title="My skills" backgroundText="Skills" />

      <div className={style.progressWrapper} ref={progressWrapperRef}>
        {SKILLS.map(({ title, percent, delay, color }, index) => (
          <div className={style.progressItem} key={title}>
            <p>{title}</p>
            <ProgressBar
              percent={`${percent}%`}
              addWidthImmediately={false}
              transitionDelay={delay}
              reverse={index % 2 !== 0}
              color={color}
              showPercent
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
