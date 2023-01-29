import { IProject } from './constants';

export const throttle = (func: (e: any) => void, timeFrame: number) => {
  let lastTime = 0;
  return function (event: any) {
    const now = Number(new Date());
    if (now - lastTime >= timeFrame) {
      func(event);
      lastTime = now;
    }
  };
};

export const isInView = (el: HTMLElement | null) => {
  if (!el) return false;
  const box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
};

const IMG_PATH = '/img/projects/';
export const getImagePath = (name: string) => `${IMG_PATH}${name}.jpg`;
export const addImagePath = (projects: IProject[]) => {
  return projects.map((item) => ({ ...item, image: getImagePath(item.image) }));
};

export const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
