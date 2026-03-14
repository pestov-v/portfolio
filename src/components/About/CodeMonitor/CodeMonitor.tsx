import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./CodeMonitor.module.scss";

gsap.registerPlugin(ScrollTrigger);

// Pre-tokenized code lines for consistent SSR/CSR rendering
type TokenType = "keyword" | "string" | "type" | "component" | "tag" | "operator" | "bracket" | "text";

interface Token {
  type: TokenType;
  value: string;
}

interface CodeLine {
  indent: number;
  tokens: Token[];
}

const t = (type: TokenType, value: string): Token => ({ type, value });

const CODE_LINES: CodeLine[] = [
  { indent: 0, tokens: [t("keyword", "import"), t("text", " { "), t("type", "Project"), t("text", " } "), t("keyword", "from"), t("text", " "), t("string", '"@/types"'), t("text", ";")] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [t("keyword", "async"), t("text", " "), t("keyword", "function"), t("text", " getProjects"), t("bracket", "("), t("bracket", ")"), t("text", " "), t("bracket", "{")] },
  { indent: 1, tokens: [t("keyword", "const"), t("text", " res = "), t("keyword", "await"), t("text", " fetch"), t("bracket", "("), t("string", '"/api/projects"'), t("text", ", "), t("bracket", "{")] },
  { indent: 2, tokens: [t("text", "next: "), t("bracket", "{"), t("text", " revalidate: "), t("string", "3600"), t("text", " "), t("bracket", "}"), t("text", ",")] },
  { indent: 1, tokens: [t("bracket", "}"), t("bracket", ")"), t("text", ";")] },
  { indent: 1, tokens: [t("keyword", "return"), t("text", " res.json"), t("bracket", "("), t("bracket", ")"), t("text", ";")] },
  { indent: 0, tokens: [t("bracket", "}"), t("text", "")] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [t("keyword", "export"), t("text", " "), t("keyword", "default"), t("text", " "), t("keyword", "async"), t("text", " "), t("keyword", "function"), t("text", " "), t("type", "Portfolio"), t("bracket", "("), t("bracket", ")"), t("text", " "), t("bracket", "{")] },
  { indent: 1, tokens: [t("keyword", "const"), t("text", " projects: "), t("type", "Project"), t("text", "[] = "), t("keyword", "await"), t("text", " getProjects"), t("bracket", "("), t("bracket", ")"), t("text", ";")] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [t("keyword", "return"), t("text", " "), t("bracket", "(")] },
  { indent: 2, tokens: [t("operator", "<"), t("tag", "main"), t("text", " className="), t("string", '"portfolio"'), t("operator", ">")] },
  { indent: 3, tokens: [t("operator", "<"), t("component", "Header"), t("text", " "), t("operator", "/>")] },
  { indent: 3, tokens: [t("operator", "<"), t("component", "About"), t("text", " "), t("operator", "/>")] },
  { indent: 3, tokens: [t("operator", "<"), t("component", "Projects"), t("text", " data="), t("bracket", "{"), t("text", "projects"), t("bracket", "}"), t("text", " "), t("operator", "/>")] },
  { indent: 3, tokens: [t("operator", "<"), t("component", "Contact"), t("text", " "), t("operator", "/>")] },
  { indent: 2, tokens: [t("operator", "</"), t("tag", "main"), t("operator", ">")] },
  { indent: 1, tokens: [t("bracket", ")"), t("text", ";")] },
  { indent: 0, tokens: [t("bracket", "}")] },
];

// Fixed particle positions to avoid SSR/CSR mismatch
const PARTICLES = [
  { x: "25%", y: "15%", size: "3px", delay: "0s" },
  { x: "70%", y: "30%", size: "4px", delay: "0.5s" },
  { x: "45%", y: "65%", size: "2px", delay: "1.2s" },
  { x: "80%", y: "50%", size: "5px", delay: "2.0s" },
  { x: "35%", y: "80%", size: "3px", delay: "1.8s" },
  { x: "60%", y: "20%", size: "4px", delay: "0.8s" },
];

const TOKEN_STYLE_MAP: Record<TokenType, string> = {
  keyword: style.hlKeyword,
  string: style.hlString,
  type: style.hlType,
  component: style.hlComponent,
  tag: style.hlTag,
  operator: style.hlOperator,
  bracket: style.hlBracket,
  text: "",
};

export const CodeMonitor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const monitor = monitorRef.current;
    const screen = screenRef.current;
    const code = codeRef.current;
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!container || !monitor || !screen || !code || !cursor || !glow) return;

    // Get all code lines
    const lines = code.querySelectorAll(`.${style.codeLine}`);

    // Set initial states
    gsap.set(monitor, {
      rotateY: 25,
      rotateX: 10,
      scale: 0.85,
      opacity: 0,
    });
    gsap.set(lines, { opacity: 0, x: 20 });
    gsap.set(cursor, { opacity: 0 });
    gsap.set(glow, { opacity: 0 });

    // Main scroll-driven timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 0.8,
      },
    });

    // Phase 1: Monitor appears with 3D rotation
    tl.to(
      monitor,
      {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

    // Phase 1b: Glow effect
    tl.to(
      glow,
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      0.05
    );

    // Phase 2: Cursor appears
    tl.to(
      cursor,
      {
        opacity: 1,
        duration: 0.05,
      },
      0.2
    );

    // Phase 3: Code lines appear one by one
    lines.forEach((line, i) => {
      const startTime = 0.25 + i * 0.03;
      tl.to(
        line,
        {
          opacity: 1,
          x: 0,
          duration: 0.04,
          ease: "power1.out",
        },
        startTime
      );
    });

    // Cursor blink animation (independent of scroll)
    const cursorBlink = gsap.to(cursor, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "steps(1)",
      paused: true,
    });

    // Start cursor blink when it enters viewport
    const blinkTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top 60%",
      onEnter: () => cursorBlink.play(),
      onLeaveBack: () => cursorBlink.pause(),
    });

    return () => {
      tl.kill();
      cursorBlink.kill();
      blinkTrigger.kill();
    };
  }, []);

  return (
    <div className={style.monitorContainer} ref={containerRef}>
      <div className={style.perspective}>
        <div className={style.monitor} ref={monitorRef}>
          {/* Screen glow */}
          <div className={style.screenGlow} ref={glowRef} />

          {/* Monitor bezel */}
          <div className={style.bezel}>
            {/* Top bar */}
            <div className={style.topBar}>
              <div className={style.trafficLights}>
                <span className={style.trafficRed} />
                <span className={style.trafficYellow} />
                <span className={style.trafficGreen} />
              </div>
              <span className={style.fileName}>portfolio.tsx</span>
              <div className={style.topBarRight} />
            </div>

            {/* Screen content */}
            <div className={style.screen} ref={screenRef}>
              {/* Line numbers */}
              <div className={style.lineNumbers}>
                {CODE_LINES.map((_, i) => (
                  <span key={i} className={style.lineNum}>
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Code content */}
              <div className={style.codeContent} ref={codeRef}>
                {CODE_LINES.map((line, i) => (
                  <div
                    key={i}
                    className={style.codeLine}
                    style={
                      { "--indent": line.indent } as React.CSSProperties
                    }
                  >
                    {line.tokens.length > 0 ? (
                      line.tokens.map((token, j) => {
                        const cls = TOKEN_STYLE_MAP[token.type];
                        return cls ? (
                          <span key={j} className={cls}>
                            {token.value}
                          </span>
                        ) : (
                          <span key={j}>{token.value}</span>
                        );
                      })
                    ) : (
                      "\u00A0"
                    )}
                  </div>
                ))}
                <span className={style.cursor} ref={cursorRef}>
                  █
                </span>
              </div>
            </div>
          </div>

          {/* Monitor stand */}
          <div className={style.stand}>
            <div className={style.standNeck} />
            <div className={style.standBase} />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className={style.particles}>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={style.particle}
            style={
              {
                "--x": p.x,
                "--y": p.y,
                "--size": p.size,
                "--delay": p.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};
