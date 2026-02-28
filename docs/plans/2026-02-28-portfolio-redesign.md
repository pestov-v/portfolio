# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the portfolio to match the redesign.pen spec — dark developer aesthetic with cyan accent, Inter + JetBrains Mono typography, and a new layout for all 8 sections.

**Architecture:** CSS-variables-first approach — new design tokens in `_colors.scss` drive both dark (default) and light themes. Each component's SCSS module is rewritten to consume these tokens. Component logic (GSAP animations, i18n, form submission) is preserved; only JSX structure and styles change.

**Tech Stack:** Next.js Pages Router, TypeScript, SCSS Modules, GSAP (SplitText, Flip, ScrollTrigger, ScrambleText), Typed.js, emailjs

---

## Design Reference

From `redesign.pen`:
- `--bg-primary: #0A0F1C` / `--bg-secondary: #0F172A` / `--bg-card: #1E293B`
- `--accent: #22D3EE` (cyan)
- `--font-sans: 'Inter'` / `--font-mono: 'JetBrains Mono'`
- Section padding: `100px 80px` desktop, reduced mobile
- Cards: `cornerRadius 12px`, `border: 1px solid rgba(34,211,238,0.1)`

---

## Task 1: Fonts + Design Tokens

**Files:**
- Modify: `pages/_document.tsx`
- Modify: `src/styles/_colors.scss`
- Modify: `src/styles/globals.scss`

**Step 1: Add Inter + JetBrains Mono to `_document.tsx`**

Replace the Google Fonts `<link>` href with:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap
```
Keep Outfit/Unbounded link as-is (other pages may use it). Add the new link after:
```tsx
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

**Step 2: Add new design tokens to `_colors.scss`**

At the END of the `.app { }` block (light theme), add:
```scss
  // Redesign tokens — light theme
  --re-bg-primary: #F8FAFC;
  --re-bg-secondary: #FFFFFF;
  --re-bg-card: #F1F5F9;
  --re-accent: #0891B2;
  --re-accent-muted: rgba(8, 145, 178, 0.1);
  --re-accent-border: rgba(8, 145, 178, 0.2);
  --re-text-primary: #0F172A;
  --re-text-secondary: #475569;
  --re-text-muted: #94A3B8;
  --re-border: #E2E8F0;
  --re-font-sans: 'Inter', sans-serif;
  --re-font-mono: 'JetBrains Mono', monospace;
```

Inside the `@mixin dark-theme-vars { }` block, add:
```scss
  // Redesign tokens — dark theme
  --re-bg-primary: #0A0F1C;
  --re-bg-secondary: #0F172A;
  --re-bg-card: #1E293B;
  --re-accent: #22D3EE;
  --re-accent-muted: rgba(34, 211, 238, 0.1);
  --re-accent-border: rgba(34, 211, 238, 0.2);
  --re-text-primary: #FFFFFF;
  --re-text-secondary: #94A3B8;
  --re-text-muted: #64748B;
  --re-border: #1E293B;
  --re-font-sans: 'Inter', sans-serif;
  --re-font-mono: 'JetBrains Mono', monospace;
```

**Step 3: Verify**

Run `pnpm dev`, open browser. No visual change expected yet — tokens added, not applied.

**Step 4: Commit**
```bash
git add pages/_document.tsx src/styles/_colors.scss
git commit -m "feat: add Inter/JetBrains Mono fonts and redesign CSS tokens"
```

---

## Task 2: Default Theme → Dark

**Files:**
- Modify: `src/contexts/ThemeContext.tsx:31`

**Step 1: Change initial state default**

Find:
```ts
const [theme, setThemeState] = useState<Theme>("system");
const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
```

Change to:
```ts
const [theme, setThemeState] = useState<Theme>("dark");
const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
```

**Step 2: Change `getStoredTheme` fallback**

Find:
```ts
return stored && ["light", "dark", "system"].includes(stored) ? stored : "system";
```
Change to:
```ts
return stored && ["light", "dark", "system"].includes(stored) ? stored : "dark";
```

**Step 3: Verify**

Clear localStorage, reload — should start in dark mode.

**Step 4: Commit**
```bash
git add src/contexts/ThemeContext.tsx
git commit -m "feat: default theme set to dark"
```

---

## Task 3: Navbar Redesign

**Files:**
- Modify: `src/components/Navbar/Navbar.tsx`
- Modify: `src/components/Navbar/Navbar.module.scss`
- Modify: `pages/index.tsx`

**Step 1: Update `pages/index.tsx`**

Move `<ThemeSwitcher />` and `<LanguageSwitcher />` from the top level into Navbar (they'll be rendered inside). Remove their standalone rendering from index.tsx:

```tsx
// Remove these lines:
<ThemeSwitcher />
<LanguageSwitcher />
// Remove their imports too
```

**Step 2: Rewrite `Navbar.tsx`**

```tsx
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <nav
      className={`${style.navbar} ${scrolled ? style.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <a href="#" className={style.logo} aria-label="Back to top">VP.</a>

      {/* Desktop links */}
      <ul className={style.links} role="list">
        {links.map(({ id, href, title }) => (
          <li key={id}>
            <a href={href} className={style.link}>{title}</a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className={style.controls}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <a href="#mail" className={style.cta}>hire me</a>
      </div>

      {/* Mobile burger */}
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

      {/* Mobile menu */}
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
```

**Step 3: Rewrite `Navbar.module.scss`**

```scss
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 80px;
  background: var(--re-bg-primary);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background 0.3s ease;

  &.scrolled {
    border-bottom-color: var(--re-border);
    background: rgba(10, 15, 28, 0.95);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 1023px) {
    padding: 0 24px;
  }
}

.logo {
  font-family: var(--re-font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--re-accent);
  text-decoration: none;
  flex-shrink: 0;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1023px) {
    display: none;
  }
}

.link {
  font-family: var(--re-font-mono);
  font-size: 12px;
  font-weight: 400;
  color: var(--re-text-secondary);
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--re-accent);
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1023px) {
    display: none;
  }
}

.cta {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: flex;
  }
}

.burgerLine {
  width: 22px;
  height: 2px;
  background: var(--re-text-primary);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) { .active & { transform: translateY(7px) rotate(45deg); } }
  &:nth-child(2) { .active & { opacity: 0; } }
  &:nth-child(3) { .active & { transform: translateY(-7px) rotate(-45deg); } }
}

.mobileMenu {
  position: fixed;
  inset: 72px 0 0 0;
  background: var(--re-bg-primary);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 99;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.mobileLink {
  font-family: var(--re-font-mono);
  font-size: 20px;
  color: var(--re-text-secondary);
  text-decoration: none;
  letter-spacing: 0.05em;

  &:hover { color: var(--re-accent); }
}

.mobileCta {
  align-self: flex-start;
  padding: 12px 28px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
}
```

**Step 4: Verify** — Navbar shows VP. logo, links, hire me button. ThemeSwitcher + LanguageSwitcher inside.

**Step 5: Commit**
```bash
git add pages/index.tsx src/components/Navbar/
git commit -m "feat: redesign navbar — VP. logo, mono links, hire me CTA"
```

---

## Task 4: Hero Redesign (Header → Hero)

**Files:**
- Modify: `src/components/Header/Header.tsx`
- Modify: `src/components/Header/Header.module.scss`

Keep: GSAP SplitText animation on name, Typed.js on role, download CV link.

**Step 1: Rewrite `Header.tsx` JSX structure**

```tsx
import gsap from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Header.module.scss";

gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

export const Header: NextPage = () => {
  const { t, language } = useLanguage();
  const el = useRef(null);
  const typed = useRef<Typed>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Keep existing Typed.js effect unchanged
  useEffect(() => {
    const skillsEn = "Full-Stack Developer, Frontend Architect, Software Engineer";
    const skillsUk = "Full-Stack Розробник, Frontend Архітектор, Software Engineer";
    const skillsBg = "Full-Stack Разработчик, Frontend Архитект, Software Engineer";
    let skills = skillsEn;
    if (language === "uk") skills = skillsUk;
    else if (language === "bg") skills = skillsBg;
    if (!el?.current) return;
    // @ts-ignore
    typed.current = new Typed(el.current, {
      strings: skills.split(", "),
      typeSpeed: 100, backSpeed: 20, smartBackspace: false, loop: true,
    });
    return () => { typed?.current?.destroy(); };
  }, [language]);

  // Keep existing GSAP SplitText effect unchanged
  useEffect(() => {
    if (!textRef.current) return;
    let tween: gsap.core.Tween;
    let split: SplitText;
    const raf = requestAnimationFrame(() => {
      if (!textRef.current) return;
      split = SplitText.create(textRef.current, { type: "chars,words,lines", mask: "lines" });
      if (split.chars.length > 0) (split.chars[0] as HTMLElement).style.marginRight = "-0.04em";
      tween = gsap.from(split.chars, {
        yPercent: () => (Math.random() > 0.5 ? 100 : -100),
        rotation: () => Math.random() * 60 - 30,
        ease: "back.out",
        stagger: { amount: 1.5, from: "random" },
      });
    });
    return () => { cancelAnimationFrame(raf); tween?.kill(); split?.revert(); };
  }, [language]);

  return (
    <header className={style.hero} id="home">
      {/* Available badge */}
      <div className={style.badge}>
        <span className={style.badgeDot} aria-hidden="true" />
        <span className={style.badgeText}>available for work</span>
      </div>

      {/* Name — GSAP SplitText animates this */}
      <h1 className={style.name} ref={textRef}>
        {t.name}
      </h1>

      {/* Role — Typed.js animates this */}
      <p className={style.role}>
        <span ref={el} aria-live="polite" aria-atomic="true" />
      </p>

      {/* Description */}
      <p className={style.description}>
        Building high-performance web applications with modern technologies and clean, maintainable architecture.
      </p>

      {/* CTAs */}
      <div className={style.btns}>
        <a href="#projects" className={style.btnPrimary}>view my work</a>
        <a
          href="/Volodymyr_Pestov.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className={style.btnSecondary}
          aria-label={`${t.downloadCV} (PDF, opens in new tab)`}
        >
          {t.downloadCV}
        </a>
      </div>

      {/* Stats */}
      <div className={style.stats}>
        <div className={style.statItem}>
          <span className={style.statNumber}>5+</span>
          <span className={style.statLabel}>YEARS EXP.</span>
        </div>
        <div className={style.statDivider} aria-hidden="true" />
        <div className={style.statItem}>
          <span className={style.statNumber}>30+</span>
          <span className={style.statLabel}>PROJECTS</span>
        </div>
        <div className={style.statDivider} aria-hidden="true" />
        <div className={style.statItem}>
          <span className={style.statNumber}>∞</span>
          <span className={style.statLabel}>COFFEE</span>
        </div>
      </div>
    </header>
  );
};
```

**Step 2: Rewrite `Header.module.scss`**

```scss
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 80px 80px;
  background: var(--re-bg-primary);
  gap: 28px;

  @media (max-width: 1023px) {
    padding: 100px 24px 60px;
    gap: 20px;
  }
}

.badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: var(--re-bg-card);
  border: 1px solid var(--re-accent-border);
  border-radius: 100px;
}

.badgeDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--re-accent);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.badgeText {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.15em;
}

.name {
  font-family: var(--re-font-sans);
  font-size: clamp(52px, 8vw, 96px);
  font-weight: 700;
  color: var(--re-text-primary);
  line-height: 1;
  margin: 0;
  max-width: 1000px;
}

.role {
  font-family: var(--re-font-mono);
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 400;
  color: var(--re-text-secondary);
  letter-spacing: 0.15em;
  margin: 0;
  min-height: 1.5em;
}

.description {
  font-family: var(--re-font-sans);
  font-size: 17px;
  color: var(--re-text-muted);
  line-height: 1.65;
  max-width: 560px;
  margin: 0;

  @media (max-width: 1023px) {
    font-size: 15px;
  }
}

.btns {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.btnPrimary {
  display: flex;
  align-items: center;
  padding: 16px 36px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.85; }
}

.btnSecondary {
  display: flex;
  align-items: center;
  padding: 16px 36px;
  background: var(--re-bg-card);
  color: var(--re-text-secondary);
  font-family: var(--re-font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  border: 1px solid var(--re-accent-border);
  border-radius: 6px;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--re-accent);
    color: var(--re-accent);
  }
}

.stats {
  display: flex;
  align-items: center;
  background: var(--re-bg-secondary);
  border: 1px solid var(--re-border);
  border-radius: 12px;
  overflow: hidden;
  max-width: 700px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 260px;
  }
}

.statItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px 48px;

  @media (max-width: 1023px) {
    padding: 16px 24px;
  }
}

.statNumber {
  font-family: var(--re-font-mono);
  font-size: 28px;
  font-weight: 700;
  color: var(--re-accent);
}

.statLabel {
  font-family: var(--re-font-mono);
  font-size: 10px;
  font-weight: 500;
  color: var(--re-text-muted);
  letter-spacing: 0.15em;
}

.statDivider {
  width: 1px;
  height: 60px;
  background: var(--re-border);

  @media (max-width: 600px) {
    width: 60px;
    height: 1px;
  }
}
```

**Step 3: Verify** — Hero shows badge, huge name with GSAP animation, Typed.js role, 2 CTAs, stats bar.

**Step 4: Commit**
```bash
git add src/components/Header/
git commit -m "feat: redesign hero section — badge, stats, new layout"
```

---

## Task 5: About Redesign

**Files:**
- Modify: `src/components/About/About.tsx`
- Modify: `src/components/About/About.module.scss`

Keep: GSAP ScrambleText animation.
Remove: `SectionTitle`, `InfoItem`, `AboutImage` sub-components from the layout (inline them into new design).

**Step 1: Rewrite `About.tsx` JSX**

```tsx
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./About.module.scss";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Keep ScrambleText animation unchanged
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = gsap.utils.toArray<HTMLElement>(".scrambled", section);
    if (!items.length) return;
    const originalTexts = items.map((el) => el.textContent?.trim() ?? "");
    items.forEach((el) => {
      el.style.minWidth = `${el.getBoundingClientRect().width}px`;
      el.style.opacity = "0";
      el.textContent = "";
    });
    const timeline = gsap.timeline({ id: "ScrambleText", paused: true });
    items.forEach((element, index) => {
      const text = originalTexts[index];
      const tl = gsap.timeline()
        .to(element, { duration: 0.01, opacity: 1 })
        .to(element, { duration: 1, ease: "none", scrambleText: { text, chars: "upperCase", speed: 0.2, revealDelay: 0.05 } }, "<");
      timeline.add(tl, index * 0.15);
    });
    const st = ScrollTrigger.create({
      trigger: section, start: "top 75%", once: true,
      onEnter: () => timeline.play(),
    });
    return () => {
      st.kill(); timeline.kill();
      items.forEach((el, i) => { el.textContent = originalTexts[i]; el.style.opacity = ""; el.style.minWidth = ""; });
    };
  }, [t]);

  return (
    <section className={style.about} id="about" ref={sectionRef} aria-labelledby="about-title">
      <div className={style.inner}>
        {/* Left column */}
        <div className={style.left}>
          <span className={style.tag}>// 01. ABOUT</span>
          <h2 className={style.title} id="about-title">Who I am.</h2>
          <p className={style.body}>{t.description}</p>
          <div className={style.socialLinks}>
            <a
              href="https://github.com/pestov-v"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
            >
              ↗ github
            </a>
            <a
              href="http://linkedin.com/in/pestov-volodymyr-405011206/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialBtn}
            >
              ↗ linkedin
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className={style.right}>
          <div className={style.photoWrap}>
            <Image
              src="/img/profile/profile.jpg"
              alt="Volodymyr Pestov"
              width={400}
              height={440}
              className={style.photo}
              priority
            />
          </div>
          <div className={style.infoCards}>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>location</span>
              <span className={style.infoValue}>Nesebar, Bulgaria 🇧🇬</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>status</span>
              <span className={`${style.infoValue} ${style.infoValueAccent}`}>✓ open to work</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>email</span>
              <span className={style.infoValue}>pestov.volodymyr@gmail.com</span>
            </div>
            <div className={style.infoCard}>
              <span className={`${style.infoKey} scrambled`}>telegram</span>
              <span className={style.infoValue}>@pestov_v</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Rewrite `About.module.scss`**

```scss
.about {
  background: var(--re-bg-secondary);
  padding: 100px 80px;

  @media (max-width: 1023px) {
    padding: 80px 24px;
  }
}

.inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 48px;
  }
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.tag {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.title {
  font-family: var(--re-font-sans);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  color: var(--re-text-primary);
  line-height: 1.1;
  margin: 0;
}

.body {
  font-family: var(--re-font-sans);
  font-size: 16px;
  color: var(--re-text-secondary);
  line-height: 1.75;
  max-width: 540px;
  margin: 0;
}

.socialLinks {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.socialBtn {
  display: inline-flex;
  padding: 10px 22px;
  background: var(--re-bg-card);
  color: var(--re-text-secondary);
  font-family: var(--re-font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: 1px solid var(--re-accent-border);
  border-radius: 6px;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--re-accent);
    color: var(--re-accent);
  }
}

.right {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 1023px) {
    width: 100%;
  }
}

.photoWrap {
  border-radius: 12px;
  overflow: hidden;
  height: 440px;

  @media (max-width: 1023px) {
    height: 300px;
  }
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.infoCards {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.infoCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--re-bg-card);
  border-radius: 6px;
}

.infoKey {
  font-family: var(--re-font-mono);
  font-size: 11px;
  color: var(--re-text-muted);
  letter-spacing: 0.05em;
}

.infoValue {
  font-family: var(--re-font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-text-primary);
}

.infoValueAccent {
  font-family: var(--re-font-mono);
  font-weight: 600;
  color: var(--re-accent);
}
```

**Step 3: Verify** — 2-column layout, photo, ScrambleText on info keys.

**Step 4: Commit**
```bash
git add src/components/About/
git commit -m "feat: redesign about section — 2-column, photo, info cards"
```

---

## Task 6: Experience Redesign

**Files:**
- Modify: `src/components/Experience/Experience.tsx`
- Modify: `src/components/Experience/Experience.module.scss`
- Modify: `src/components/Experience/ExperienceItem/ExperienceItem.tsx`
- Modify: `src/components/Experience/ExperienceItem/ExperienceItem.module.scss` (or create if scss doesn't exist)

**Step 1: Rewrite `Experience.tsx`**

```tsx
import { useLanguage } from "../../contexts/LanguageContext";
import { EXPERIENCE } from "../../util/constants";
import style from "./Experience.module.scss";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className={style.experience} id="experience" aria-labelledby="exp-title">
      <div className={style.inner}>
        <span className={style.tag}>// 02. EXPERIENCE</span>
        <h2 className={style.title} id="exp-title">Where I've worked.</h2>
        <div className={style.list}>
          {EXPERIENCE.map((item, index) => (
            <ExperienceItem
              key={item.id}
              company={item.company}
              position={t.experienceData[item.translationKey as keyof typeof t.experienceData].position}
              period={item.period}
              location={item.location}
              companyDescription={t.experienceData[item.translationKey as keyof typeof t.experienceData].companyDescription}
              achievements={t.experienceData[item.translationKey as keyof typeof t.experienceData].achievements}
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Rewrite `Experience.module.scss`**

```scss
.experience {
  background: var(--re-bg-primary);
  padding: 100px 80px;

  @media (max-width: 1023px) {
    padding: 80px 24px;
  }
}

.inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.tag {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.title {
  font-family: var(--re-font-sans);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--re-text-primary);
  margin: 0;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
```

**Step 3: Check the ExperienceItem component signature — add `isActive` prop**

Read `src/components/Experience/ExperienceItem/ExperienceItem.tsx` first to see existing props.

Then update the component to accept `isActive?: boolean` and render with:
- When `isActive`: `background: var(--re-bg-card)`, `border-left: 3px solid var(--re-accent)`
- When not active: `background: var(--re-bg-secondary)`, `border: 1px solid var(--re-border)`

ExperienceItem card structure:
```tsx
<div className={`${style.card} ${isActive ? style.active : ""}`}>
  <div className={style.left}>
    <span className={style.period}>{period}</span>
    <h3 className={style.position}>{position}</h3>
    <span className={style.company}>{company} · {location}</span>
    <p className={style.description}>{companyDescription}</p>
  </div>
  {isActive && achievements?.length && (
    <div className={style.tags}>
      {achievements.slice(0, 3).map((ach, i) => (
        <span key={i} className={style.tag}>{ach}</span>
      ))}
    </div>
  )}
</div>
```

ExperienceItem SCSS:
```scss
.card {
  padding: 32px 36px;
  border-radius: 10px;
  border: 1px solid var(--re-border);
  background: var(--re-bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  transition: background 0.2s ease;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }
}

.active {
  background: var(--re-bg-card);
  border: none;
  border-left: 3px solid var(--re-accent);
  border-radius: 0 10px 10px 0;
}

.left { display: flex; flex-direction: column; gap: 8px; flex: 1; }

.period {
  font-family: var(--re-font-mono);
  font-size: 11px;
  color: var(--re-accent);
  letter-spacing: 0.05em;

  .card:not(.active) & { color: var(--re-text-muted); }
}

.position {
  font-family: var(--re-font-sans);
  font-size: 22px;
  font-weight: 600;
  color: var(--re-text-primary);
  margin: 0;
}

.company {
  font-family: var(--re-font-mono);
  font-size: 13px;
  color: var(--re-text-muted);
}

.description {
  font-family: var(--re-font-sans);
  font-size: 14px;
  color: var(--re-text-secondary);
  line-height: 1.6;
  max-width: 780px;
  margin: 0;
}

.tags {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
}

.tag {
  padding: 4px 12px;
  background: var(--re-accent-muted);
  color: var(--re-accent);
  font-family: var(--re-font-mono);
  font-size: 11px;
  border-radius: 4px;
}
```

**Step 4: Verify** — 3 experience cards, first one with cyan left border, last two muted.

**Step 5: Commit**
```bash
git add src/components/Experience/
git commit -m "feat: redesign experience — accent card, timeline layout"
```

---

## Task 7: Skills Redesign + Recategorize

**Files:**
- Modify: `src/util/constants.ts`
- Modify: `src/components/Skills/Skills.tsx`
- Modify: `src/components/Skills/Skills.module.scss`

**Step 1: Add `category` field to SKILLS in `constants.ts`**

Replace the `SKILLS` array:
```ts
export const SKILLS: ISkill[] = [
  // Frontend
  { title: "React", percent: 92, color: COLORS.danger, category: "frontend" },
  { title: "TypeScript", percent: 90, color: COLORS.info, category: "frontend" },
  { title: "JavaScript", percent: 90, color: COLORS.warning, category: "frontend" },
  { title: "Next.js", percent: 85, color: COLORS.primary, category: "frontend" },
  { title: "HTML/CSS", percent: 92, color: COLORS.secondary, category: "frontend" },
  // Backend
  { title: "Node.js", percent: 75, color: COLORS.success, category: "backend" },
  { title: "NestJS", percent: 78, color: COLORS.info, category: "backend" },
  { title: "PostgreSQL", percent: 70, color: COLORS.primary, category: "backend" },
  { title: "REST API", percent: 88, color: COLORS.secondary, category: "backend" },
  // DevOps / Tools
  { title: "Redux", percent: 85, color: COLORS.danger, category: "devops" },
  { title: "Git", percent: 90, color: COLORS.warning, category: "devops" },
  { title: "Docker", percent: 65, color: COLORS.info, category: "devops" },
];
```

Also add `category` to `ISkill` interface:
```ts
interface ISkill {
  title: string;
  delay?: number;
  percent: number;
  color: TColors;
  category: "frontend" | "backend" | "devops";
}
```

**Step 2: Rewrite `Skills.tsx`**

```tsx
import { useRef } from "react";
import { SKILLS } from "util/constants";
import { ProgressBar } from "components/ui/ProgressBar/ProgressBar";
import { useLanguage } from "../../contexts/LanguageContext";
import { useShowSkills } from "./useShowSkills";
import style from "./Skills.module.scss";

const CATEGORIES = [
  { key: "frontend", label: "FRONTEND" },
  { key: "backend", label: "BACKEND" },
  { key: "devops", label: "DEVOPS / TOOLS" },
] as const;

export const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  useShowSkills({ ref, className: style.show });

  return (
    <section className={style.skills} id="skills">
      <div className={style.inner}>
        <span className={style.tag}>// 03. SKILLS</span>
        <h2 className={style.title}>What I build with.</h2>
        <div className={style.grid} ref={ref}>
          {CATEGORIES.map(({ key, label }) => {
            const categorySkills = SKILLS.filter(s => s.category === key);
            return (
              <div key={key} className={style.category}>
                <span className={style.categoryLabel}>{label}</span>
                <div className={style.skillList}>
                  {categorySkills.map(({ title, percent, color }) => (
                    <div key={title} className={style.skillItem}>
                      <div className={style.skillRow}>
                        <span className={style.skillName}>{title}</span>
                        <span className={style.skillPercent}>{percent}%</span>
                      </div>
                      <ProgressBar
                        percent={`${percent}%`}
                        addWidthImmediately={false}
                        transitionDelay={0}
                        reverse={false}
                        color={color}
                        label={title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

**Step 3: Rewrite `Skills.module.scss`**

```scss
.skills {
  background: var(--re-bg-secondary);
  padding: 100px 80px;

  @media (max-width: 1023px) {
    padding: 80px 24px;
  }
}

.inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.tag {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.title {
  font-family: var(--re-font-sans);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--re-text-primary);
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
}

.category {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.categoryLabel {
  font-family: var(--re-font-mono);
  font-size: 10px;
  font-weight: 600;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.skillList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skillItem {
  padding: 20px;
  background: var(--re-bg-card);
  border: 1px solid var(--re-accent-muted);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skillRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skillName {
  font-family: var(--re-font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--re-text-primary);
}

.skillPercent {
  font-family: var(--re-font-mono);
  font-size: 12px;
  color: var(--re-text-muted);
}
```

**Step 4: Update ProgressBar to use `--re-accent` color**

Check `src/components/ui/ProgressBar/ProgressBar.tsx`. If it uses inline color styles from the old COLORS enum, add a case or override so the bar fill uses `var(--re-accent)` or a derived color. Minimal change — just ensure it looks right in the new design.

**Step 5: Verify** — 3-column grid, Frontend/Backend/DevOps, progress bars per skill.

**Step 6: Commit**
```bash
git add src/util/constants.ts src/components/Skills/
git commit -m "feat: redesign skills — 3-category grid, categorized skills"
```

---

## Task 8: Projects Restyle (Keep GSAP Flip)

**Files:**
- Modify: `src/components/Projects/Projects.module.scss`
- Modify: `src/components/Projects/Projects.tsx` (minor JSX updates only — tag + title)

Keep: All GSAP Flip logic in `handleCardClick`. Only reskin cards.

**Step 1: Add section header to `Projects.tsx`**

Wrap the existing `<SectionTitle>` with the new pattern:
```tsx
// Replace SectionTitle usage with:
<span className={style.tag}>// 04. PROJECTS</span>
<h2 className={style.sectionTitle}>Things I've built.</h2>
```

Remove the `SectionTitle` import if no longer needed.

**Step 2: Add tech badge tags to card preview**

Inside `style.cardText`, after description, add tech tags from caseStudy (if available):
```tsx
{item.caseStudy?.technologies && (
  <div className={style.techTags}>
    {item.caseStudy.technologies.slice(0, 3).map(tech => (
      <span key={tech} className={style.techTag}>{tech}</span>
    ))}
  </div>
)}
```

**Step 3: Rewrite `Projects.module.scss`** (key rules — keep all existing Flip-related classes):

```scss
.projects {
  background: var(--re-bg-primary);
  padding: 100px 80px;

  @media (max-width: 1023px) {
    padding: 80px 24px;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.tag {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.sectionTitle {
  font-family: var(--re-font-sans);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--re-text-primary);
  margin: 0;
}

.projectsWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
}

.cardWrapper {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  background: var(--re-bg-card);
  border: 1px solid var(--re-accent-muted);
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--re-accent-border);
    transform: translateY(-2px);
  }
}

.cardWrapperActive {
  cursor: default;
  border-color: var(--re-accent-border);
  &:hover { transform: none; }
}

.cardInner { display: flex; flex-direction: column; height: 100%; }

.cardPreview { display: flex; flex-direction: column; }

.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.cardText {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  font-family: var(--re-font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--re-text-primary);
  margin: 0;
}

.description {
  font-family: var(--re-font-sans);
  font-size: 13px;
  color: var(--re-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.additionalInfo {
  font-family: var(--re-font-sans);
  font-size: 12px;
  color: var(--re-text-muted);
  margin: 0;
}

.techTags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.techTag {
  padding: 3px 10px;
  background: var(--re-accent-muted);
  color: var(--re-accent);
  font-family: var(--re-font-mono);
  font-size: 11px;
  border-radius: 4px;
}

// Details panel (when card is active/expanded)
.details {
  padding: 32px;
  border-top: 1px solid var(--re-border);
}

.caseStudy { display: flex; flex-direction: column; gap: 24px; }

.sectionTitle {  // case study section title
  font-family: var(--re-font-sans);
  font-size: 20px;
  font-weight: 700;
  color: var(--re-text-primary);
  margin: 0;
}

.subsectionTitle {
  font-family: var(--re-font-sans);
  font-size: 16px;
  font-weight: 600;
  color: var(--re-text-primary);
  margin: 0 0 8px;
}

.section { display: flex; flex-direction: column; }

.text {
  font-family: var(--re-font-sans);
  font-size: 14px;
  color: var(--re-text-secondary);
  line-height: 1.65;
  margin: 0;
}

.technologies { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }

.techBadge {
  padding: 4px 12px;
  background: var(--re-accent-muted);
  color: var(--re-accent);
  font-family: var(--re-font-mono);
  font-size: 12px;
  border-radius: 4px;
}

.diagramsSection { display: flex; flex-direction: column; gap: 16px; }

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--re-border);
}

.visitButton {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 24px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.85; }
}

.closeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--re-bg-primary);
  border: 1px solid var(--re-border);
  border-radius: 50%;
  color: var(--re-text-secondary);
  cursor: pointer;
  font-size: 16px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover { border-color: var(--re-accent); color: var(--re-accent); }
}

// Demo banner
.demoBanner {
  padding: 32px 40px;
  background: var(--re-bg-secondary);
  border: 1px solid var(--re-accent-border);
  border-radius: 12px;
}

.demoContent {
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
}

.demoIcon { font-size: 32px; flex-shrink: 0; }

.demoText {
  flex: 1;
  h3 { font-family: var(--re-font-sans); font-size: 18px; color: var(--re-text-primary); margin: 0 0 4px; }
  p { font-family: var(--re-font-sans); font-size: 14px; color: var(--re-text-secondary); margin: 0; }
}

.demoButton {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 24px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.85; }
}

.additionalInfoBlock {
  padding: 16px;
  background: var(--re-bg-primary);
  border-radius: 8px;
  border: 1px solid var(--re-border);
  font-family: var(--re-font-sans);
  font-size: 14px;
  color: var(--re-text-secondary);
  line-height: 1.6;
}
```

**Step 4: Verify** — 3-column project grid, GSAP Flip expand still works, tech tags visible, Demo banner styled.

**Step 5: Commit**
```bash
git add src/components/Projects/
git commit -m "feat: redesign projects — new card style, keep GSAP Flip animation"
```

---

## Task 9: Contact Redesign (SendMail)

**Files:**
- Modify: `src/components/SendMail/SendMail.tsx`
- Modify: `src/components/SendMail/SendMail.module.scss`

Keep: emailjs submission logic, `useTextInput` validation, `isSending` state.

**Step 1: Rewrite `SendMail.tsx` JSX**

```tsx
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTextInput } from "../../hooks/useTextInput/useTextInput";
import style from "./SendMail.module.scss";

export const SendMail = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => { emailjs.init("_t-9w7H78xR5SS4K6"); }, []);

  const formData = {
    name: useTextInput({ isRequired: true, validators: ["name"], filters: ["name"] }),
    email: useTextInput({ isRequired: true, validators: ["email"], filters: ["email"] }),
    text: useTextInput({ isRequired: true, validateOnChange: true }),
  };

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;
    setIsSending(true);
    try {
      await emailjs.sendForm("service_f6tyqgq", "template_5lm9rln", form.current, "_t-9w7H78xR5SS4K6");
      alert(t.thankYouMessage);
      formData.name.reset();
      formData.email.reset();
      formData.text.reset();
    } catch (error: any) {
      alert(error?.text || "Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const isValidForm = formData.name.isValid && formData.email.isValid && formData.text.isValid;

  return (
    <section className={style.contact} id="mail" aria-labelledby="contact-title">
      <div className={style.inner}>
        <span className={style.tag}>// 05. CONTACT</span>
        <h2 className={style.title} id="contact-title">Let's work together.</h2>
        <p className={style.subtitle}>Have a project in mind? I'd love to hear about it.</p>

        <form className={style.form} ref={form} onSubmit={onSubmit} aria-busy={isSending}>
          <div className={style.row}>
            <div className={style.field}>
              <label className={style.label} htmlFor="user_name">NAME</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                className={style.input}
                placeholder={t.namePlaceholder}
                {...formData.name.inputProps}
              />
              {formData.name.errors.map((err, i) => (
                <span key={i} className={style.error}>{err}</span>
              ))}
            </div>
            <div className={style.field}>
              <label className={style.label} htmlFor="user_email">EMAIL</label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                className={style.input}
                placeholder={t.emailPlaceholder}
                {...formData.email.inputProps}
              />
              {formData.email.errors.map((err, i) => (
                <span key={i} className={style.error}>{err}</span>
              ))}
            </div>
          </div>

          <div className={style.field}>
            <label className={style.label} htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              className={style.textarea}
              placeholder={t.messagePlaceholder}
              rows={5}
              {...formData.text.inputProps}
            />
            {formData.text.errors.map((err, i) => (
              <span key={i} className={style.error}>{err}</span>
            ))}
          </div>

          <button
            type="submit"
            className={style.submit}
            disabled={!isValidForm || isSending}
            aria-label={isSending ? "Sending…" : t.sendButton}
          >
            {isSending ? "sending…" : "send message →"}
          </button>
        </form>
      </div>
    </section>
  );
};
```

**Step 2: Rewrite `SendMail.module.scss`**

```scss
.contact {
  background: var(--re-bg-secondary);
  padding: 100px 80px;

  @media (max-width: 1023px) {
    padding: 80px 24px;
  }
}

.inner {
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
}

.tag {
  font-family: var(--re-font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--re-accent);
  letter-spacing: 0.2em;
}

.title {
  font-family: var(--re-font-sans);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  color: var(--re-text-primary);
  line-height: 1.1;
  margin: 0;
}

.subtitle {
  font-family: var(--re-font-sans);
  font-size: 16px;
  color: var(--re-text-muted);
  margin: 0;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}

.label {
  font-family: var(--re-font-mono);
  font-size: 10px;
  font-weight: 500;
  color: var(--re-text-muted);
  letter-spacing: 0.15em;
}

.input,
.textarea {
  width: 100%;
  padding: 0 16px;
  background: var(--re-bg-card);
  color: var(--re-text-primary);
  font-family: var(--re-font-sans);
  font-size: 14px;
  border: 1px solid var(--re-accent-border);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder { color: var(--re-text-muted); }
  &:focus { border-color: var(--re-accent); }
}

.input { height: 48px; }

.textarea {
  padding: 16px;
  height: 130px;
  resize: vertical;
}

.error {
  font-family: var(--re-font-mono);
  font-size: 11px;
  color: #f87171;
}

.submit {
  width: 100%;
  height: 52px;
  background: var(--re-accent);
  color: #0A0F1C;
  font-family: var(--re-font-mono);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) { opacity: 0.85; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
}
```

**Step 3: Verify** — Centered contact form, two inputs in a row, textarea, submit button.

**Step 4: Commit**
```bash
git add src/components/SendMail/
git commit -m "feat: redesign contact section — centered form layout"
```

---

## Task 10: Footer Redesign

**Files:**
- Modify: `src/components/Footer/Footer.tsx`
- Modify: `src/components/Footer/Footer.module.scss`

**Step 1: Rewrite `Footer.tsx`**

```tsx
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="#" className={style.logo} aria-label="Back to top">VP.</a>
      <p className={style.copy}>© 2025 Volodymyr Pestov — built with passion</p>
      <nav className={style.links} aria-label="Social links">
        <a href="https://github.com/pestov-v" target="_blank" rel="noopener noreferrer" className={style.link}>github</a>
        <a href="http://linkedin.com/in/pestov-volodymyr-405011206/" target="_blank" rel="noopener noreferrer" className={style.link}>linkedin</a>
        <a href="mailto:pestov.volodymyr@gmail.com" className={`${style.link} ${style.linkAccent}`}>email</a>
      </nav>
    </footer>
  );
};
```

**Step 2: Rewrite `Footer.module.scss`**

```scss
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 80px;
  background: var(--re-bg-primary);
  border-top: 1px solid var(--re-border);

  @media (max-width: 1023px) {
    flex-direction: column;
    height: auto;
    padding: 32px 24px;
    gap: 16px;
    text-align: center;
  }
}

.logo {
  font-family: var(--re-font-mono);
  font-size: 20px;
  font-weight: 700;
  color: var(--re-accent);
  text-decoration: none;
}

.copy {
  font-family: var(--re-font-mono);
  font-size: 11px;
  color: var(--re-text-muted);
  margin: 0;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.link {
  font-family: var(--re-font-mono);
  font-size: 11px;
  color: var(--re-text-muted);
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: var(--re-text-secondary); }
}

.linkAccent {
  color: var(--re-accent);
  &:hover { opacity: 0.8; }
}
```

**Step 3: Verify** — Footer has VP. logo, copyright, 3 links in a row.

**Step 4: Commit**
```bash
git add src/components/Footer/
git commit -m "feat: redesign footer — logo, copyright, social links"
```

---

## Task 11: Cleanup + ThemeSwitcher / LanguageSwitcher Integration

**Files:**
- Check: `src/components/ThemeSwitcher/ThemeSwitcher.module.scss`
- Check: `src/components/LanguageSwitcher/LanguageSwitcher.tsx`
- Modify: `src/styles/globals.scss` (remove conflicting global font overrides)

**Step 1: Verify ThemeSwitcher renders inside Navbar correctly**

ThemeSwitcher currently uses `style.themeSwitcher` for positioning (it was absolute/fixed positioned). Now it's inline in Navbar — remove any `position: fixed` from its SCSS.

Update `ThemeSwitcher.module.scss`:
```scss
.themeSwitcher {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--re-bg-card);
  border: 1px solid var(--re-border);
  border-radius: 6px;
  cursor: pointer;
  color: var(--re-text-secondary);
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--re-accent);
    color: var(--re-accent);
  }
}

.icon { display: block; }
```

**Step 2: Check LanguageSwitcher positioning**

Read `LanguageSwitcher.tsx` and its SCSS. Remove any `position: fixed/absolute` since it's now inside Navbar. Keep its dropdown logic intact, just update positioning to be relative to its container.

**Step 3: Add `padding-top: 72px` to `<main>` in `pages/index.tsx`**

Since Navbar is now fixed, the main content needs top padding to not be hidden under it:
```tsx
<main id="main-content" className={style.main} style={{ paddingTop: "72px" }}>
```

Or add to `Home.module.scss`:
```scss
.main {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  padding-top: 72px;  // add this
}
```

**Step 4: Build check**
```bash
npx tsc --noEmit
```

Fix any TypeScript errors.

**Step 5: Final visual pass**

Open `http://localhost:3000` and check:
- [ ] Dark theme by default
- [ ] ThemeSwitcher toggles to light (light theme uses `--re-*` light vars)
- [ ] LanguageSwitcher works, translations load
- [ ] Navbar fixed, VP. logo, links, hire me button
- [ ] Hero: badge, name GSAP, Typed.js role, stats bar
- [ ] About: 2-column, ScrambleText on info keys
- [ ] Experience: 3 cards, first with cyan left border
- [ ] Skills: 3-column grid, progress bars
- [ ] Projects: 3-column, GSAP Flip expand works
- [ ] Contact: centered form, submissions work
- [ ] Footer: logo + copy + links

**Step 6: Commit**
```bash
git add -A
git commit -m "feat: final cleanup — switchers in navbar, padding fix, build clean"
```

---

## Task 12: Mobile Responsiveness Pass

**Files:** All component SCSS modules (already have `@media` breakpoints from plan above)

**Step 1: Test at 375px, 768px, 1024px breakpoints**

Key areas to verify:
- Navbar: burger menu appears ≤1023px, links/controls hidden
- Hero: name scales down via `clamp()`, stats wrap or stack
- About: columns stack vertically
- Skills: 3-col → 1-col at ≤1023px
- Projects: 3-col → 1-col at ≤1023px
- Contact: row → stack at ≤600px

**Step 2: Fix any overflow or layout issues found**

Targeted SCSS fixes only.

**Step 3: Final build**
```bash
npx tsc --noEmit && pnpm build
```

**Step 4: Final commit**
```bash
git add -A
git commit -m "feat: mobile responsive fixes — all breakpoints verified"
```
