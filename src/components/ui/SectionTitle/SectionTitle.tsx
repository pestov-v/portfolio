import { NextPage } from "next";
import style from "./SectionTitle.module.scss";

interface IProps {
  title: string;
  bgText?: string;
}

export const SectionTitle: NextPage<IProps> = (props) => {
  const { title, bgText } = props;

  return (
    <div className={style.sectionTitle}>
      {!!bgText && <p className={style.sectionTitle__bgText}>{bgText}</p>}
      <h2 className={style.sectionTitle__title} title={`${title} section`}>
        {title}
      </h2>
    </div>
  );
};
