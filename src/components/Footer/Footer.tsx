import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className={style.footer}>
      <a href="#" className={style.logo} aria-label="Back to top">
        VP.
      </a>
      <p className={style.copy}>{t.ui.copyright}</p>
      <nav className={style.links} aria-label="Social links">
        <a
          href="https://github.com/pestov-v"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/pestov-volodymyr-405011206/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          linkedin
        </a>
        <a
          href="mailto:pestov.volodymyr@gmail.com"
          className={`${style.link} ${style.linkAccent}`}
        >
          {t.ui.emailLabel}
        </a>
      </nav>
    </footer>
  );
};
