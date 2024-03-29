import { FC, useRef, useEffect } from "react";
import { COLORS, TColors } from "util/constants";
import { isInView, throttle } from "util/helpers";
import style from "./ProgressBar.module.scss";

interface IProps {
  transitionDelay?: number;
  percent: string;
  addWidthImmediately?: boolean;
  addWidth?: boolean;
  reverse?: boolean;
  color: TColors;
  showPercent?: boolean;
}

export const ProgressBar: FC<IProps> = (props) => {
  const { transitionDelay = 0, percent, color = COLORS.primary } = props;
  const {
    addWidthImmediately = true,
    reverse = false,
    showPercent = false,
  } = props;

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (addWidthImmediately || !progressRef.current) return;

    const handler = throttle(() => {
      if (!progressRef.current || !isInView(progressRef.current)) return;
      progressRef.current.style.width = percent;
    }, 100);

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [addWidthImmediately, percent]);

  const progressStyle = [style.progress, reverse ? style.reverse : ""].join(
    " "
  );

  const classes = [style.value, style[COLORS[color]]].join(" ");
  const barWidth = addWidthImmediately ? percent : 0;

  return (
    <div className={style.proggressWrapper}>
      <div className={progressStyle}>
        <div
          className={classes}
          ref={progressRef}
          style={{
            transitionDelay: `${transitionDelay}s`,
            width: barWidth,
          }}
        />
        {showPercent && <span>{percent}</span>}
      </div>
    </div>
  );
};
