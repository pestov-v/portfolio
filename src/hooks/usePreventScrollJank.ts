import { useEffect } from "react";

/**
 * Prevents scroll jank on mobile by disabling transitions during scroll
 * and preventing overscroll bounce
 */
export const usePreventScrollJank = () => {
  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth >= 1024) {
      return;
    }

    let scrollTimer: NodeJS.Timeout;
    let isScrolling = false;
    let lastScrollY = window.scrollY;
    let lastTouchY = 0;

    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add("is-scrolling");
      }

      // Clear existing timer
      clearTimeout(scrollTimer);

      // Set new timer to remove class after scroll ends
      scrollTimer = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove("is-scrolling");
      }, 150); // Wait 150ms after scroll stops
    };

    // Prevent elastic/rubber band scrolling on iOS
    const preventOverscroll = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Detect if we're at the top or bottom
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;

      // Prevent overscroll at boundaries
      if (isAtTop && currentY > lastTouchY) {
        // Scrolling down at top - prevent
        e.preventDefault();
      } else if (isAtBottom && currentY < lastTouchY) {
        // Scrolling up at bottom - prevent
        e.preventDefault();
      }

      lastTouchY = currentY;
    };

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
      lastScrollY = window.scrollY;
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScrollStart, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleScrollStart, { passive: true });

    // Prevent overscroll bounce
    document.body.addEventListener("touchmove", preventOverscroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleScrollStart);
      document.body.removeEventListener("touchmove", preventOverscroll);
      clearTimeout(scrollTimer);
      document.body.classList.remove("is-scrolling");
    };
  }, []);
};
