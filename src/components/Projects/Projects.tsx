import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { SectionTitle } from "components/ui/SectionTitle/SectionTitle";
import { MermaidDiagram } from "components/ui/MermaidDiagram/MermaidDiagram";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { IProject, projects } from "util/constants";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Projects.module.scss";

gsap.registerPlugin(Flip);

export const Projects = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (project: IProject) => {
    if (!gridRef.current) return;

    const isClosing = activeId === project.id;

    // 1. Capture positions BEFORE DOM changes
    const state = Flip.getState(gridRef.current.querySelectorAll("[data-flip-id]"));

    // 2. Update DOM synchronously so Flip.from() sees the final layout
    flushSync(() => {
      setActiveId(isClosing ? null : project.id);
    });

    // 3. Animate FROM old positions TO new positions (no absolute — keeps elements in flow)
    Flip.from(state, {
      duration: 0.55,
      ease: "power2.inOut",
      stagger: 0.03,
      onComplete: () => {
        if (!isClosing) {
          // Scroll only after layout is fully settled
          const activeCard = gridRef.current?.querySelector(
            `[data-flip-id="card-${project.id}"]`
          );
          activeCard?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      },
    });

    // 4. Fade in details panel after cards settle
    if (!isClosing) {
      gsap.fromTo(
        `[data-details="${project.id}"]`,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.35, delay: 0.4 }
      );
    }
  };

  return (
    <section className={style.projects} id="projects">
      <div className={style.container}>
        <SectionTitle title={t.portfolio} bgText={t.portfolioBgText} />

        <div className={style.projectsWrapper} ref={gridRef}>
          {projects.map((item, index) => {
            const isActive = activeId === item.id;
            const projectData = (t.projectsData as any)[item.translationKey];
            const title = projectData?.title || item.title;
            const description = projectData?.description || item.description;
            const additionalInfo = projectData?.additionalInfo || item.additionalInfo;
            const hasCaseStudy = !!item.caseStudy;
            const caseStudyData = hasCaseStudy
              ? (t.caseStudies as any)[item.translationKey]
              : null;

            return (
              // Outer div owns animate-on-scroll — its className never changes,
              // so React won't wipe the `animate-in` class added by IntersectionObserver
              <div
                key={item.id}
                className={`animate-on-scroll scale-in stagger-${Math.min((index % 3) + 1, 5)}`}
                style={isActive ? { gridColumn: "1 / -1", height: "auto" } : undefined}
              >
              <div
                data-flip-id={`card-${item.id}`}
                className={`${style.cardWrapper} ${isActive ? style.cardWrapperActive : ""}`}
                onClick={() => !isActive && handleCardClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (!isActive) handleCardClick(item);
                  }
                }}
              >
                <div className={style.cardInner}>
                  {/* Always-visible preview */}
                  <div className={style.cardPreview}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className={style.image}
                      width={480}
                      height={270}
                    />
                    <div className={style.cardText}>
                      <h2 className={style.title}>{title}</h2>
                      <p className={style.description}>{description}</p>
                      {additionalInfo && !isActive && (
                        <p className={style.additionalInfo}>{additionalInfo}</p>
                      )}
                    </div>
                  </div>

                  {/* Details — only when active */}
                  {isActive && (
                    <div
                      className={style.details}
                      data-details={item.id}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {hasCaseStudy && (
                        <div className={style.caseStudy}>
                          <h3 className={style.sectionTitle}>
                            {t.projectModal.caseStudy}
                          </h3>

                          <div className={style.section}>
                            <h4 className={style.subsectionTitle}>
                              🎯 {t.projectModal.challenge}
                            </h4>
                            <p className={style.text}>
                              {caseStudyData?.challenge ||
                                item.caseStudy!.challenge}
                            </p>
                          </div>

                          <div className={style.section}>
                            <h4 className={style.subsectionTitle}>
                              💡 {t.projectModal.solution}
                            </h4>
                            <p className={style.text}>
                              {caseStudyData?.solution ||
                                item.caseStudy!.solution}
                            </p>
                          </div>

                          <div className={style.section}>
                            <h4 className={style.subsectionTitle}>
                              ✨ {t.projectModal.result}
                            </h4>
                            <p className={style.text}>
                              {caseStudyData?.result || item.caseStudy!.result}
                            </p>
                          </div>

                          {item.caseStudy!.technologies && (
                            <div className={style.section}>
                              <h4 className={style.subsectionTitle}>
                                🛠 {t.projectModal.technologies}
                              </h4>
                              <div className={style.technologies}>
                                {item.caseStudy!.technologies.map((tech) => (
                                  <span key={tech} className={style.techBadge}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.caseStudy!.diagrams &&
                            item.caseStudy!.diagrams.length > 0 && (
                              <div className={style.diagramsSection}>
                                <h4 className={style.subsectionTitle}>
                                  📊 Architecture & System Design
                                </h4>
                                {item.caseStudy!.diagrams.map((diagram, i) => (
                                  <MermaidDiagram
                                    key={i}
                                    chart={diagram.chart}
                                    caption={diagram.caption}
                                  />
                                ))}
                              </div>
                            )}
                        </div>
                      )}

                      {additionalInfo && !hasCaseStudy && (
                        <div className={style.additionalInfoBlock}>
                          <p>{additionalInfo}</p>
                        </div>
                      )}

                      <div className={style.footer}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={style.visitButton}
                        >
                          {t.projectModal.visitProject} →
                        </a>
                        <button
                          className={style.closeButton}
                          onClick={() => handleCardClick(item)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>

        <div className={`${style.demoBanner} animate-on-scroll fade-in-up`}>
          <div className={style.demoContent}>
            <div className={style.demoIcon}>⚡</div>
            <div className={style.demoText}>
              <h3>{t.demo.tryLiveDemo}</h3>
              <p>{t.demo.subtitle}</p>
            </div>
            <Link href="/demo" className={style.demoButton}>
              {t.demo.tryLiveDemo} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
