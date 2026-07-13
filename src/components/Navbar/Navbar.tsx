import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { ThemeToggle } from "../ui/theme-toggle";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, href: "#about", title: t.about },
    { id: 2, href: "#experience", title: t.experience },
    { id: 3, href: "#skills", title: t.skills },
    { id: 4, href: "#projects", title: t.projects },
    { id: 5, href: "#mail", title: t.contact },
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

  // Lock on <body> only: its overflow is propagated to the viewport, so this
  // stops scrolling while keeping the offset intact. Locking <html> instead
  // would clamp the offset to 0, because html/body are height:100% on mobile
  // and the overflowing content gets clipped away.
  useEffect(() => {
    if (!isMenuOpen) return;

    const bodyStyle = document.body.style;
    bodyStyle.overflow = "hidden";
    return () => {
      bodyStyle.overflow = "";
    };
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
    <>
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
        <ThemeToggle />
        <LanguageSwitcher />
        <div className={style.ctaWrap}>
          <a href="#mail" className={style.cta}>{t.hireMe}</a>
        </div>
      </div>

      <div className={style.mobileControls}>
        <ThemeToggle />
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
    </nav>

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
          <div className={style.mobileCtaWrap}>
            <a href="#mail" className={style.mobileCta} onClick={() => setIsMenuOpen(false)}>
              {t.hireMe}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
