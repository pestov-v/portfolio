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
  const errorId = rest.name ? `${rest.name}-error` : undefined;

  return (
    <label className={style.TextInput}>
      {label && <span className={style.TextInput__label}>{label}</span>}

      {textarea ? (
        <textarea
          className={`${style.TextInput__input} ${errorClass}`}
          aria-invalid={isErrors || undefined}
          aria-describedby={isErrors && errorId ? errorId : undefined}
          {...rest}
        />
      ) : (
        <input
          className={`${style.TextInput__input} ${errorClass}`}
          type={props?.type ?? "text"}
          aria-invalid={isErrors || undefined}
          aria-describedby={isErrors && errorId ? errorId : undefined}
          {...rest}
        />
      )}

      {isErrors && (
        <span id={errorId} className={style.TextInput__errors} role="alert">
          {errors.join(" ")}
        </span>
      )}
    </label>
  );
};
