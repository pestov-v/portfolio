import React from "react";
import style from "./Title.module.scss";

export default function Title() {
  return (
    <div className={style.titleWrapper}>
      <div className={style.sign}>
        <p>
          <span className={style.fastFlicker}>t</span>here ar
          <span className={style.fastFlicker}>e</span> some of{" "}
          <span className={style.flicker}>m</span>
          <span className={style.fastFlicker}>y</span> proj
          <span className={style.flicker}>e</span>cts
        </p>
      </div>
    </div>
  );
}
