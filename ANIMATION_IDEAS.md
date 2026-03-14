# Animation Ideas & Improvements

> Analysis date: March 2026
> Based on current stack: Next.js, GSAP 3.14, Motion/React 12.34, CSS Modules

---

## Current Animation Inventory

The project already has a solid animation foundation:

| Component | Technology | Effect |
|-----------|-----------|--------|
| About — text | GSAP ScrambleTextPlugin | Character scramble on scroll |
| About — CodeMonitor | GSAP + ScrollTrigger | 3D monitor reveal + code typewriter |
| GradientText (ui) | Motion/React + useAnimationFrame | Continuous gradient shift |
| All sections | CSS keyframes + IntersectionObserver | fade-in, slide-in, scale-in |
| ProgressBar (Skills) | CSS transition + scroll listener | Width expand on scroll |
| CryptoTicker (Demo) | CSS classes | Flash on price update |

**Gap identified**: The Skills section is the simplest of all — basic progress bars — while other sections (About, Hero) have much more complex animations.

---

## Skills Section — Redesign Ideas

### 1. Staggered 3D Card Reveal ⭐ Recommended
Cards appear one-by-one with a `rotateY(90deg) → rotateY(0)` flip effect using GSAP ScrollTrigger stagger.

```
// Approximate implementation approach
gsap.fromTo('.skillItem',
  { rotateY: 90, opacity: 0 },
  { rotateY: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }
)
```

**Difficulty**: Medium | **Wow factor**: High

---

### 2. CountUp on Hover
The percentage number animates from 0 to its value when the user hovers over a skill card. Can use GSAP `gsap.to({ val: 0 }, { val: 90, onUpdate })` pattern or a lightweight `countup.js` library.

**Difficulty**: Low | **Wow factor**: Medium

---

### 3. Glow Border on Hover ⭐ Recommended
On hover, animate the card border to glow in the accent color (`#22D3EE`). Already has `--re-accent` CSS variable and similar styling in the design file.

```scss
.skillItem:hover {
  border-color: var(--re-accent);
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.05);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
```

**Difficulty**: Low | **Wow factor**: Medium

---

### 4. Circular / Radial Progress
Replace linear progress bars with SVG circular progress rings. Each skill gets a ring that "draws itself" using `stroke-dashoffset` animation on scroll.

```
// SVG circle math
circumference = 2 * Math.PI * radius
offset = circumference - (percent / 100) * circumference
```

**Difficulty**: High | **Wow factor**: Very High

---

### 5. Skill Orbit (Alternative Layout)
Technology icons orbit a central element. Icon size is proportional to skill level. Uses CSS `animation: spin` with `animation-delay` offsets per skill.

**Difficulty**: High | **Wow factor**: Very High (but may be overkill)

---

## Other Sections — Enhancement Ideas

### 6. Hero — Typing Effect for Role Title
"Senior Full-Stack Developer" types character-by-character. The `typewriter` CSS keyframe is already defined in `_scroll-animations.scss` but unused in Hero.

**File to modify**: `src/components/Header/Header.tsx` + `Header.module.scss`
**Difficulty**: Low | **Wow factor**: Medium

---

### 7. Experience — Timeline Draw Animation
The vertical timeline line "draws" itself as the user scrolls using SVG `stroke-dashoffset` + GSAP ScrollTrigger. Experience cards slide in from alternating sides (left/right).

**File to modify**: `src/components/Experience/`
**Difficulty**: High | **Wow factor**: High

---

### 8. Projects — 3D Tilt on Hover ⭐ Recommended
Project cards follow mouse cursor with a subtle 3D perspective tilt effect. No extra library needed — pure mouse event tracking with CSS transform.

```ts
// Mouse tracking approach
const handleMouseMove = (e) => {
  const { left, top, width, height } = card.getBoundingClientRect()
  const x = (e.clientX - left - width / 2) / 20
  const y = (e.clientY - top - height / 2) / 20
  card.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`
}
```

**File to modify**: `src/components/Projects/Projects.tsx`
**Difficulty**: Medium | **Wow factor**: High

---

### 9. Contact — Animated Gradient Border
Form container with a rotating `conic-gradient` border. The gradient angle animates continuously using a CSS `@property` animation or JS-driven `requestAnimationFrame`.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
@keyframes rotate { to { --angle: 360deg } }
.form { border-image: conic-gradient(from var(--angle), #22D3EE, transparent) 1; }
```

**Difficulty**: Medium | **Wow factor**: Medium

---

### 10. Scroll Progress Indicator
A thin `#22D3EE` line at the top of the page that fills from left to right as the user scrolls. Minimal implementation with `scroll` event listener + `scaleX` transform.

**File to add**: Hook `useScrollProgress.ts` + small `ScrollProgress` UI component
**Difficulty**: Low | **Wow factor**: Low-Medium (but polished UX)

---

## Priority Matrix

| Priority | Feature | Difficulty | Impact |
|----------|---------|-----------|--------|
| 🥇 1 | Skills: Staggered 3D card reveal | Medium | High |
| 🥈 2 | Projects: 3D tilt on hover | Medium | High |
| 🥉 3 | Skills: Glow border on hover | Low | Medium |
| 4 | Skills: CountUp on hover | Low | Medium |
| 5 | Experience: Timeline draw | High | High |
| 6 | Skills: Circular progress (full redesign) | High | Very High |
| 7 | Hero: Typing effect | Low | Medium |
| 8 | Scroll progress indicator | Low | Low |
| 9 | Contact: Gradient border | Medium | Medium |
| 10 | Skills: Orbit layout | Very High | Very High |

---

## Implementation Notes

- All heavy animations should remain **desktop-only** (`>= 1024px`) — the existing `useScrollAnimations` hook already handles this pattern
- Prefer GSAP for scroll-triggered effects (already installed, ScrollTrigger registered)
- Prefer Motion/React for continuous/loop animations (already installed)
- Pure CSS for hover effects (no JS overhead)
- Test on mobile after each change — `usePreventScrollJank` hook is in place but needs testing with new transforms
