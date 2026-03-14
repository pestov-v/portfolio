import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "./CodeToUI.module.scss";

gsap.registerPlugin(ScrollTrigger);

const FRAGMENTS = [
  { code: "<Sidebar />", x: "8%", y: "15%" },
  { code: "<Stats count={142} />", x: "65%", y: "10%" },
  { code: "<Chart data={metrics} />", x: "12%", y: "55%" },
  { code: '<KPICard value="89%" />', x: "70%", y: "60%" },
  { code: 'className="dashboard"', x: "50%", y: "80%" },
  { code: '<Header title="Analytics" />', x: "30%", y: "35%" },
];

const BARS = [60, 80, 40, 90, 55, 70, 45, 85];

export const CodeToUI = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion) return;

    const fragments = section.querySelectorAll<HTMLElement>("[data-fragment]");
    const dashboard = section.querySelector<HTMLElement>("[data-dashboard]");
    const sidebarItems = section.querySelectorAll<HTMLElement>(
      "[data-sidebar-item]"
    );
    const statCards = section.querySelectorAll<HTMLElement>("[data-stat-card]");
    const chart = section.querySelector<HTMLElement>("[data-chart]");
    const bars = section.querySelectorAll<HTMLElement>("[data-bar]");

    if (!dashboard) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.5,
        },
      });

      // Phase 1 (0–40%): fragments converge to center and fade
      tl.to(
        fragments,
        {
          x: 0,
          y: 0,
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          rotation: 0,
          opacity: 0,
          scale: 0.6,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.in",
        },
        0
      );

      // Phase 2 (40–60%): dashboard fades in
      tl.fromTo(
        dashboard,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" },
        0.35
      );

      // Phase 3 (60–100%): dashboard internals stagger in
      tl.to(
        sidebarItems,
        {
          opacity: 1,
          stagger: 0.015,
          duration: 0.1,
        },
        0.55
      );

      tl.fromTo(
        statCards,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.12,
          ease: "power2.out",
        },
        0.58
      );

      tl.to(chart, { opacity: 1, duration: 0.08 }, 0.7);

      tl.fromTo(
        bars,
        { height: 0 },
        {
          height: (i: number) => `${BARS[i]}%`,
          stagger: 0.02,
          duration: 0.15,
          ease: "power2.out",
        },
        0.72
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={style.section}>
      {/* Floating code fragments */}
      <div className={style.fragments}>
        {FRAGMENTS.map((f, i) => (
          <span
            key={i}
            data-fragment
            className={`${style.fragment} ${style[`fragment${i}`]}`}
            style={{ left: f.x, top: f.y }}
          >
            {f.code}
          </span>
        ))}
      </div>

      {/* Dashboard */}
      <div data-dashboard className={style.dashboard}>
        <div className={style.dashTitlebar}>
          <div className={`${style.dot} ${style.dotRed}`} />
          <div className={`${style.dot} ${style.dotYellow}`} />
          <div className={`${style.dot} ${style.dotGreen}`} />
          <span className={style.dashFilename}>dashboard.tsx</span>
        </div>
        <div className={style.dashBody}>
          <div className={style.dashSidebar}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                data-sidebar-item
                className={style.sidebarItem}
              />
            ))}
          </div>
          <div className={style.dashMain}>
            <div className={style.statsRow}>
              {[
                { value: "142", label: "Users", color: "#4ecdc4" },
                { value: "89%", label: "Uptime", color: "#ffa726" },
                { value: "2.4s", label: "Latency", color: "#c678dd" },
              ].map((stat, i) => (
                <div key={i} data-stat-card className={style.statCard}>
                  <span
                    className={style.statValue}
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <span className={style.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
            <div data-chart className={style.chart}>
              {BARS.map((h, i) => (
                <div
                  key={i}
                  data-bar
                  className={style.bar}
                  style={{ "--bar-h": `${h}%` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
