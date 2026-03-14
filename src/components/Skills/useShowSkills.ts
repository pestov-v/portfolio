import { RefObject, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_BREAKPOINT = 1024;

interface IProps {
  ref: RefObject<HTMLElement>;
}

export const useShowSkills = ({ ref }: IProps) => {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const isDesktop = window.matchMedia(
      `(min-width: ${DESKTOP_BREAKPOINT}px)`
    ).matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-skill-card]");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, { rotateY: 90, opacity: 0 });
      gsap.to(cards, {
        rotateY: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);
};
