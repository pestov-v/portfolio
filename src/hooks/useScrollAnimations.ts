import { useEffect } from "react";

export const useScrollAnimations = () => {
  useEffect(() => {
    // Disable all scroll animations on mobile to prevent scroll jank
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      return; // Early return - no scroll animations on mobile
    }
    // Intersection Observer для анімацій при появі елементів
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px 100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Знаходимо всі елементи для анімації
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    // Track animation frame and scroll direction to prevent jumps
    let ticking = false;
    let lastScrollY = window.pageYOffset;
    let lastScrollTime = Date.now();

    // Parallax ефект для фону
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-bg");

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Smooth reveal анімації
    const handleSmoothReveal = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const revealElements = document.querySelectorAll(".smooth-reveal");
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrolled;
        const elementHeight = element.clientHeight;
        const revealPoint = elementTop + elementHeight / 4;

        if (scrolled + windowHeight > revealPoint) {
          element.classList.add("revealed");
        }
      });
    };

    // Floating elements ефект
    const handleFloatingElements = () => {
      const scrolled = window.pageYOffset;
      const floatingElements = document.querySelectorAll(".floating-element");

      floatingElements.forEach((element, index) => {
        const speed = 0.02 + index * 0.01;
        const yPos = Math.sin(scrolled * speed) * 10;
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Combined scroll handler with requestAnimationFrame to prevent jank
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;

      // Detect rapid direction changes (potential scroll bounce)
      const scrollDelta = currentScrollY - lastScrollY;
      const isRapidDirectionChange = timeDiff < 50 && Math.abs(scrollDelta) > 5;

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;

      // Skip animation frame if already scheduled or rapid direction change detected
      if (ticking || isRapidDirectionChange) {
        return;
      }

      ticking = true;

      requestAnimationFrame(() => {
        handleParallax();
        handleSmoothReveal();
        handleFloatingElements();
        ticking = false;
      });
    };

    // Додаємо обробники подій
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Початкова перевірка для елементів, що вже видимі
    handleSmoothReveal();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
