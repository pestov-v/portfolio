import { useRef } from "react";

import { SKILLS } from "util/constants";
import { useShowSkills } from "./useShowSkills";
import { ProgressBar } from "components/ui/ProgressBar/ProgressBar";
import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import style from "./Skills.module.scss";

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  useShowSkills({ ref, className: style.show });

  return (
    <section className={style.skills} id="skills">
      <SectionTitle title="My Skills" bgText="Skills" />

      <div className={style.progressWrapper} ref={ref}>
        {SKILLS.map(({ title, percent, color }, index) => (
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
