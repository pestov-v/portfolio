import { NextPage } from "next";
import Image from "next/image";
import { useLanguage } from "../../../contexts/LanguageContext";
import style from "./InfoItem.module.scss";

interface IProps {
  title: string;
  value: string | React.ReactNode;
  icon?: string;
  href?: string;
  hideTitle?: boolean;
}
export const InfoItem: NextPage<IProps> = (props) => {
  const { title, value, icon, href, hideTitle } = props;
  const { t } = useLanguage();

  const getHref = () => {
    if (href) return href;
    // Only process href if value is a string
    if (typeof value !== "string") return undefined;
    if (title === t.personalInfo.email) return `mailto:${value}`;
    if (title === t.personalInfo.phone)
      return `tel:${value.replace(/\s/g, "")}`;
    if (title === t.personalInfo.telegram)
      return `https://t.me/${value.replace("@", "")}`;
    if (title === t.personalInfo.viber)
      return `viber://chat?number=${value.replace(/\s/g, "").replace("+", "")}`;
    if (title === t.personalInfo.whatsapp)
      return `https://wa.me/${value.replace(/\s/g, "").replace("+", "")}`;
    return undefined;
  };

  const linkHref = getHref();
  const content = (
    <>
      {icon && (
        <span className={style.InfoItem__icon} data-icon={icon}>
          <Image
            width={20}
            height={20}
            src={`/img/icons/${icon}.svg`}
            alt={title}
          />
        </span>
      )}
      {value}
    </>
  );

  return (
    <h4 className={style.InfoItem}>
      {!hideTitle && <>{title}: </>}
      {linkHref ? (
        <a
          href={linkHref}
          className={`${style.InfoItem__value} scrambled`}
          {...(linkHref.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </a>
      ) : (
        <span
          className={[
            style.InfoItem__value,
            "scrambled",
            typeof value === "string" && value === t.available
              ? style.success
              : "",
          ].join(" ")}
        >
          {content}
        </span>
      )}
    </h4>
  );
};
