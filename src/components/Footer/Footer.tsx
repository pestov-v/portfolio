import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import { socialLinks } from "../../util/constants";
import { useLanguage } from "../../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <section className={style.section} id="contact">
      <div className={style.header}>
        <h2>{t.letsWorkTogether}</h2>
      </div>
      <div className={style.links}>
        {socialLinks.map(({ id, href, title }) => (
          <a
            id={id}
            href={href}
            className={style.details}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          >
            <Image
              width={48}
              height={48}
              src={`/img/icons/${id}.svg`}
              alt={title}
            />
          </a>
        ))}
      </div>
    </section>
  );
};
