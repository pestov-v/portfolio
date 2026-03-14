import { RefObject, useEffect } from "react";

const TILT_MAX = 8; // degrees
const SCALE = 1.02;

export const useTilt = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-tilt]");

    const handleMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      card.style.transform =
        `perspective(800px) rotateX(${-y * TILT_MAX}deg) rotateY(${x * TILT_MAX}deg) scale3d(${SCALE}, ${SCALE}, ${SCALE})`;
    };

    const handleLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = "";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
        card.style.transform = "";
      });
    };
  }, [containerRef]);
};
