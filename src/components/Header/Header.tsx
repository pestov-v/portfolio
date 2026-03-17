import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { trackResumeDownload } from "../../lib/analytics";
import { cn } from "../../lib/utils";
import style from "./Header.module.scss";

export const imgPath = "img/profile/profile";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const Header: NextPage = () => {
  const { t, language } = useLanguage();
  const el = useRef(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const skillsEn =
      "Full-Stack Developer, Frontend Architect, Software Engineer";
    const skillsUk =
      "Full-Stack Розробник, Frontend Архітектор, Software Engineer";
    const skillsBg =
      "Full-Stack Разработчик, Frontend Архитект, Software Engineer";
    let skills = skillsEn;
    if (language === "uk") skills = skillsUk;
    else if (language === "bg") skills = skillsBg;
    if (!el?.current) return;
    let instance: any;
    import("typed.js").then(({ default: Typed }) => {
      if (!el.current) return;
      instance = new Typed(el.current, {
        strings: skills.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
      typed.current = instance;
    });
    return () => {
      instance?.destroy();
    };
  }, [language]);

  return (
    <header className={style.hero} id="home">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-cyan-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-teal-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-sky-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-emerald-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-7 md:gap-7">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={style.badge}>
            <span className={style.badgeDot} aria-hidden="true" />
            <span className={style.badgeText}>available for work</span>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={style.name}>{t.name}</h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className={style.role}>
            <span ref={el} aria-live="polite" aria-atomic="true" />
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className={style.description}>
            Building high-performance web applications with modern technologies
            and clean, maintainable architecture.
          </p>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={style.btns}>
            <a href="#projects" className={style.btnPrimary}>
              view my work
            </a>
            <a
              href="/Volodymyr_Pestov.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className={style.btnSecondary}
              aria-label={`${t.downloadCV} (PDF, opens in new tab)`}
              onClick={() => trackResumeDownload()}
            >
              {t.downloadCV}
            </a>
          </div>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={style.stats}>
            <div className={style.statItem}>
              <span className={style.statNumber}>6+</span>
              <span className={style.statLabel}>YEARS EXP.</span>
            </div>
            <div className={style.statDivider} aria-hidden="true" />
            <div className={style.statItem}>
              <span className={style.statNumber}>10+</span>
              <span className={style.statLabel}>PROJECTS</span>
            </div>
            <div className={style.statDivider} aria-hidden="true" />
            <div className={style.statItem}>
              <span className={style.statNumber}>∞</span>
              <span className={style.statLabel}>COFFEE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--re-bg-primary)] via-transparent to-[var(--re-bg-primary)]/80 pointer-events-none" />
    </header>
  );
};
