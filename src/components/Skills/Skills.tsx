import { useEffect, useRef } from "react";
import type { NextPage } from "next";

import { SKILLS } from "../../util/constants";
import { isInView } from "../../util/helpers";
import { ProgressBar } from "../ui/ProgressBar/ProgressBar";
import { ISectionProps } from "../../interfaces";
import style from "./Skills.module.scss";

const Skills: NextPage<ISectionProps> = ({ sectionRef }) => {
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
    <section className={style.skills} ref={sectionRef}>
      <h2 className={style["section--title"]} data-background-text="Skills">
        My skills
      </h2>

      <div className={style.progressWrapper} ref={progressWrapperRef}>
        {SKILLS.map(({ title, percent, delay, color }, index) => (
          <div className={style.progressItem} key={title}>
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
              addWidthImmediately={false}
              transitionDelay={delay}
              reverse={index % 2 !== 0}
              color={color}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
