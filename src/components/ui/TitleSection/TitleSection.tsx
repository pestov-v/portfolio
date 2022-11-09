import { NextPage } from "next";
import style from "./TitleSection.module.scss";

interface IProps {
  title: string;
  backgroundText?: string;
}

const TitleSection: NextPage<IProps> = ({ title, backgroundText }) => {
  return (
    <div className={style.titleWrapper}>
      <h2 className={style.backgroudText}>{backgroundText ?? title}</h2>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default TitleSection;
