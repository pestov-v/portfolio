import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, href: "#about", title: "about" },
    { id: 2, href: "#experience", title: "experience" },
    { id: 3, href: "#skills", title: "skills" },
    { id: 4, href: "#projects", title: "projects" },
    { id: 5, href: "#mail", title: "contact" },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav
      className={`${style.navbar} ${scrolled ? style.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <a href="#" className={style.logo} aria-label="Back to top">VP.</a>

      <ul className={style.links} role="list">
        {links.map(({ id, href, title }) => (
          <li key={id}>
            <a href={href} className={style.link}>{title}</a>
          </li>
        ))}
      </ul>

      <div className={style.controls}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <a href="#mail" className={style.cta}>hire me</a>
      </div>

      <div className={style.mobileControls}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <button
          className={style.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`} />
          <span className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`} />
          <span className={`${style.burgerLine} ${isMenuOpen ? style.active : ""}`} />
        </button>
      </div>

      <div
        className={style.scrollProgress}
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {isMenuOpen && (
        <div className={style.mobileMenu}>
          <ul role="list">
            {links.map(({ id, href, title }) => (
              <li key={id}>
                <a href={href} className={style.mobileLink} onClick={() => setIsMenuOpen(false)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <a href="#mail" className={style.mobileCta} onClick={() => setIsMenuOpen(false)}>
            hire me
          </a>
        </div>
      )}
    </nav>
  );
};
