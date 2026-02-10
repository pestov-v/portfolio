import { RefObject, useEffect } from "react";
import { isInView } from "util/helpers";

interface IProps {
    ref: RefObject<HTMLElement>
    className: string;
}
export const useShowSkills = (props: IProps) => {
const { ref, className } = props;

useEffect(() => {
    const handler = () => {
      if (!ref.current || !isInView(ref.current))
        return;
      ref.current.classList.add(className);
    };

    // Check visibility on mount (important for mobile)
    handler();

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ref, className]);
}