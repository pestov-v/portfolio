import { useRef, useState, useEffect } from 'react';
import { useVisible } from 'hooks/useVisible';
import style from './ScrollTopButton.module.scss';

export const ScrollTopButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [throttleTime, setThrottleTime] = useState(10);

  // Detect mobile on client side only (avoid SSR issues)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setThrottleTime(window.innerWidth < 1024 ? 100 : 10);
    }
  }, []);

  useVisible({
    element: ref,
    style: style.visible,
    throttleTime,
    offsetY: 100,
  });

  const clickHandler = () => {
    if (typeof window === 'undefined') return;

    // Disable smooth scroll on mobile to prevent jank
    const isMobile = window.innerWidth < 1024;
    window.scrollTo({
      top: 0,
      behavior: isMobile ? 'auto' : 'smooth',
    });
  };
  return (
    <button
      className={style.button}
      onClick={clickHandler}
      ref={ref}
      title='scroll to the top'
    />
  );
};
