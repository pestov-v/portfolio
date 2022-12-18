import { useRef } from "react";
import { useVisible } from "hooks/useVisible";
import style from "./ScrollTopButton.module.scss";

export const ScrollTopButton = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useVisible({
    element: ref,
    style: style.visible,
    throttleTime: 10,
    offsetY: 100,
  });

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <button className={style.button} onClick={clickHandler} ref={ref} />;
};
