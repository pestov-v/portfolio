import { NextPage } from "next";
import style from "./InfoItem.module.scss";

interface IProps {
  title: string;
  value: string;
}
export const InfoItem: NextPage<IProps> = (props) => {
  const { title, value } = props;

  return (
    <h4 key={title} className={style.InfoItem}>
      {title}:{" "}
      {title === "Email" ? (
        <a href={`mailto:${value}`} className={style.InfoItem__value}>
          {value}
        </a>
      ) : (
        <span
          className={[
            style.InfoItem__value,
            value === "Available" ? style.success : "",
          ].join(" ")}
        >
          {value}
        </span>
      )}
    </h4>
  );
};
