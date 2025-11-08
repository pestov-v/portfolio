import { NextPage } from "next";
import { useLanguage } from "../../../contexts/LanguageContext";
import style from "./InfoItem.module.scss";

interface IProps {
  title: string;
  value: string;
}
export const InfoItem: NextPage<IProps> = (props) => {
  const { title, value } = props;
  const { t } = useLanguage();

  return (
    <h4 key={title} className={style.InfoItem}>
      {title}:{" "}
      {title === t.personalInfo.email ? (
        <a href={`mailto:${value}`} className={style.InfoItem__value}>
          {value}
        </a>
      ) : (
        <span
          className={[
            style.InfoItem__value,
            value === t.available ? style.success : "",
          ].join(" ")}
        >
          {value}
        </span>
      )}
    </h4>
  );
};
