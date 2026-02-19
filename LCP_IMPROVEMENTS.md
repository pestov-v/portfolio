# LCP Improvements (Largest Contentful Paint: 1.3s)

## 🔴 Критично — прямий вплив на LCP

- [x] **LCP-зображення без preload**
  - Файл: `src/components/Header/Header.tsx:80–88`
  - Проблема: `<picture><img>` без `priority` — браузер завантажує в звичайній черзі
  - Рішення: замінити на `<Image priority fetchpriority="high" />` з `next/image`

- [x] **LCP-зображення в `opacity: 0` через `animate-on-scroll scale-in`**
  - Файл: `src/components/Header/Header.tsx:79`, `src/styles/_scroll-animations.scss:128`
  - Проблема: IntersectionObserver показує зображення тільки після спрацювання JS — LCP затримується
  - Рішення: прибрати `animate-on-scroll scale-in` з wrapper'а LCP-зображення

- [x] **GSAP SplitText на `h1` з `autoAlpha: 0` + `repeat: 2`**
  - Файл: `src/components/Header/Header.tsx:50–75`
  - Проблема: `visibility: hidden` на символах h1, анімація програється 3 рази — LCP фіксується після третього циклу
  - Рішення: прибрати `repeat: 2, yoyo: true` або замінити на одноразову анімацію без `autoAlpha`

---

## 🟠 Серйозно — збільшують TTI/TTFB

- [ ] **GSAP (3 плагіни) + Typed.js статично в main bundle**
  - Файл: `src/components/Header/Header.tsx:1–11`
  - Проблема: `CustomBounce`, `CustomEase`, `SplitText`, `Typed` входять у головний JS-бандл, блокують гідрацію
  - Рішення: перенести GSAP-анімації у `dynamic(() => import(...), { ssr: false })` або lazy-ініціалізацію через `useEffect`

- [ ] **Google Fonts — render-blocking `<link rel="stylesheet">`**
  - Файл: `pages/_document.tsx:13–16`
  - Проблема: браузер блокується на CSSOM до завантаження зовнішнього CSS
  - Рішення: перейти на `next/font/google` — автоматичний preload, zero layout shift, без зовнішніх запитів

- [ ] **Шрифт `Syne` для `h1` не підключений**
  - Файл: `src/styles/globals.scss:98`, `pages/_document.tsx`
  - Проблема: `h1` використовує `font-family: "Syne"` але він відсутній у завантаженнях → FOUT → LCP зсув
  - Рішення: додати Syne до `_document.tsx` або замінити на вже підключений `Unbounded`

- [ ] **`mermaid` (~1MB) без перевірки на dynamic import**
  - Файл: `package.json:19`
  - Проблема: якщо потрапляє в main bundle — критичне збільшення parse time
  - Рішення: перевірити що `MermaidDiagram` використовується тільки через `dynamic(() => import(...), { ssr: false })`

---

## 🟡 Помірно

- [ ] **`AboutImage` без `loading="lazy"`**
  - Файл: `src/components/About/AboutImage/AboutImage.tsx:17–22`
  - Проблема: конкурує за bandwidth з LCP-зображенням
  - Рішення: додати `loading="lazy"` або замінити на `<Image loading="lazy" />`

- [ ] **`next.config.js` без оптимізацій зображень**
  - Файл: `next.config.js`
  - Проблема: немає `images.formats`, cache headers не налаштовані
  - Рішення:
    ```js
    images: {
      formats: ['image/avif', 'image/webp'],
    }
    ```

- [ ] **Next.js 13.0.2 — дуже застаріла версія**
  - Файл: `package.json:21`
  - Проблема: відсутні LCP-оптимізації що з'явилися у 13.1–15.x
  - Рішення: оновити до Next.js 14 або 15 (breaking changes потребують тестування)

---

## Очікуваний ефект

| Виправлення | Очікуване покращення LCP |
|---|---|
| `next/image priority` на фото | −150–200ms |
| Прибрати `opacity: 0` з LCP wrapper | −100ms |
| `next/font` замість Google Fonts link | −100–150ms |
| Dynamic import GSAP / Typed.js | −50–80ms |
| Виправити шрифт h1 | −30–50ms |
| `loading="lazy"` на AboutImage | −20ms |

**Потенційне LCP після виправлень: < 0.8s (Good)**
