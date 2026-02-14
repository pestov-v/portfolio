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
      {!!bgText && <p className={style.sectionTitle__bgText}>{bgText}</p>}
      <h2
        className={style.sectionTitle__title}
        title={`${title} section`}
        style={{ background: 'none', WebkitTextFillColor: 'unset', WebkitTextStroke: '0' }}
      >
        <GradientText
          colors={["#5227FF", "#7b3b79", "#7765b4"]}
          animationSpeed={8}
          showBorder={false}
        >
          {title}
        </GradientText>
      </h2>
    </div>
  );
};
