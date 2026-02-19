import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import { socialLinks } from "../../util/constants";
import { useLanguage } from "../../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className={style.section} id="contact">
      <div className={style.header}>
        <h2 id="footer-heading">{t.letsWorkTogether}</h2>
      </div>
      <nav aria-labelledby="footer-heading">
        <ul className={style.links} role="list">
          {socialLinks.map(({ id, href, title }) => (
            <li key={id}>
              <a
                href={href}
                className={style.details}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} (opens in new tab)`}
              >
                <Image
                  width={48}
                  height={48}
                  src={`/img/icons/${id}.svg`}
                  alt=""
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
