import { FC, InputHTMLAttributes } from "react";
import style from "./TextInput.module.scss";

interface IProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value: string;
  errors?: string[];
  label?: string;
  textarea?: boolean;
}
export const TextInput: FC<IProps> = (props) => {
  const { value, onChange, errors, type = "text", label } = props;
  const { placeholder = "", textarea, name } = props;

  console.log("errors", errors);

  return (
    <label className={style.TextInput}>
      {label && <p className={style.TextInput__label}>{label}</p>}

      {textarea ? (
        <textarea
          className={style.TextInput__input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      ) : (
        <input
          className={style.TextInput__input}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      )}

      {!!errors?.length && (
        <p className={style.TextInput__errors}>{errors.join(" ")}</p>
      )}
    </label>
  );
};
