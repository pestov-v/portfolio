export const throttle = (func: (e: any) => void, timeFrame: number) => {
    let lastTime = 0;
    return function (event: any) {
      const now = Number(new Date());
      if (now - lastTime >= timeFrame) {
        func(event);
        lastTime = now;
      }
    };
  }

 export const isInView = (el: HTMLElement | null) => {
    if (!el) return false;
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
  };