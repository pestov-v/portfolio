import { NextPage } from "next";
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
      <h2 className={style.sectionTitle__title} title={`${title} section`}>
        {title}
      </h2>
    </div>
  );
};
