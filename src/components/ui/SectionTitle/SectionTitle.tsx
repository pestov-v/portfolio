import { NextPage } from "next";
import GradientText from "../GradientText";
import style from "./SectionTitle.module.scss";

interface IProps {
  title: string;
  bgText?: string;
  className?: string;
}

export const SectionTitle: NextPage<IProps> = (props) => {
  const { title, bgText, className = "" } = props;

  return (
    <div className={[style.sectionTitle, className].join(" ")}>
      {!!bgText && <p className={style.sectionTitle__bgText} aria-hidden="true">{bgText}</p>}
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
        className={style.sectionTitle__title}
        style={{ fontFamily: '"Unbounded", sans-serif' }}
      >
        <GradientText
          colors={["#5227FF", "#5e9bd0"]}
          animationSpeed={3}
          showBorder={false}
        >
          {title}
        </GradientText>
      </h2>
    </div>
  );
};
