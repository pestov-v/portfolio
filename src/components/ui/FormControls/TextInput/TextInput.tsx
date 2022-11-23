import { FC, InputHTMLAttributes } from "react";
import style from "./TextInput.module.scss";

interface IProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  errors?: string[];
  label?: string;
  textarea?: boolean;
}
export const TextInput: FC<IProps> = (props) => {
  const { errors, label, textarea, ...rest } = props;

  const isErrors = !!errors?.length;
  const errorClass = isErrors ? style.error : "";
  return (
    <label className={style.TextInput}>
      {label && <p className={style.TextInput__label}>{label}</p>}

      {textarea ? (
        <textarea
          className={`${style.TextInput__input} ${errorClass}`}
          {...rest}
        />
      ) : (
        <input
          className={`${style.TextInput__input} ${errorClass}`}
          type={props?.type ?? "text"}
          {...rest}
        />
      )}

      {isErrors && (
        <p className={style.TextInput__errors}>{errors.join(" ")}</p>
      )}
    </label>
  );
};
