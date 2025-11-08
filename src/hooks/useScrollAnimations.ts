import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer для анімацій при появі елементів
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Знаходимо всі елементи для анімації
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Parallax ефект для фону
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Smooth reveal анімації
    const handleSmoothReveal = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      const revealElements = document.querySelectorAll('.smooth-reveal');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrolled;
        const elementHeight = element.clientHeight;
        const revealPoint = elementTop + elementHeight / 4;
        
        if (scrolled + windowHeight > revealPoint) {
          element.classList.add('revealed');
        }
      });
    };

    // Floating elements ефект
    const handleFloatingElements = () => {
      const scrolled = window.pageYOffset;
      const floatingElements = document.querySelectorAll('.floating-element');
      
      floatingElements.forEach((element, index) => {
        const speed = 0.02 + (index * 0.01);
        const yPos = Math.sin(scrolled * speed) * 10;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Додаємо обробники подій
    window.addEventListener('scroll', handleParallax, { passive: true });
    window.addEventListener('scroll', handleSmoothReveal, { passive: true });
    window.addEventListener('scroll', handleFloatingElements, { passive: true });

    // Початкова перевірка для елементів, що вже видимі
    handleSmoothReveal();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', handleSmoothReveal);
      window.removeEventListener('scroll', handleFloatingElements);
    };
  }, []);
};
