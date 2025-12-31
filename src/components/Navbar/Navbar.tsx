import { RefObject, useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useVisible } from "../../hooks/useVisible";
import style from "./Navbar.module.scss";

interface Refs {
  [key: string]: RefObject<HTMLElement>;
}
interface IProps {
  refs: Refs;
}
export const Navbar = () => {
  const { t } = useLanguage();
  const navbar = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, href: "#about", title: t.about },
    { id: 2, href: "#skills", title: t.skills },
    { id: 3, href: "#projects", title: t.projects },
    { id: 4, href: "#mail", title: t.contact },
  ];

  useVisible({
    element: navbar,
    style: style.visible,
    throttleTime: 10,
    offsetY: 100,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={style.navbar} ref={navbar}>
        <button
          className={style.burgerButton}
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`}
          />
          <span
            className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`}
          />
          <span
            className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`}
          />
        </button>

        <ul className={`${style.links} ${isMenuOpen ? style.menuOpen : ""}`}>
          {links.map(({ id, href, title }) => (
            <li key={id}>
              <a href={href} className={style.link} onClick={handleLinkClick}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <div className={style.overlay} onClick={handleLinkClick} />
      )}
    </>
  );
};
