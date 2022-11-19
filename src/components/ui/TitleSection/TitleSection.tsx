import { NextPage } from "next";
import style from "./TitleSection.module.scss";

interface IProps {
  title: string;
  backgroundText?: string;
  className?: string;
}

const TitleSection: NextPage<IProps> = ({
  title,
  backgroundText,
  className = "",
}) => {
  return (
    <div className={[style.titleWrapper, className].join(" ")}>
      <h2 className={style.backgroudText}>{backgroundText ?? title}</h2>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};

export default TitleSection;
