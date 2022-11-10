import { RefObject, useEffect } from "react";
import { throttle } from "../util/helpers";

interface IProps {
    element: RefObject<HTMLElement>,
    style: string,
    throttleTime?: number,
    offsetY?: number
}
export const useVisible = (props: IProps) => {
    const {element, style, throttleTime = 0, offsetY = 0} = props;

    useEffect(() => {
        const handler = () => {
          if (window?.scrollY > offsetY) {
            element?.current?.classList.add(style);
          } else {
            element?.current?.classList.remove(style);
          }
        };
    
        const callback = throttleTime > 0 ? throttle(handler, throttleTime) : handler;

        window.addEventListener("scroll", callback);
    
        return () => {
          window.removeEventListener("scroll", callback);
        };
      }, [element, offsetY, throttleTime, style]);
}