import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTextInput } from "../../hooks/useTextInput/useTextInput";
import style from "./SendMail.module.scss";

export const SendMail = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("_t-9w7H78xR5SS4K6");
  }, []);

  const formData = {
    name: useTextInput({
      isRequired: true,
      validators: ["name"],
      filters: ["name"],
    }),
    email: useTextInput({
      isRequired: true,
      validators: ["email"],
      filters: ["email"],
    }),
    text: useTextInput({ isRequired: true, validateOnChange: true }),
  };

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_f6tyqgq",
        "template_5lm9rln",
        form.current,
        "_t-9w7H78xR5SS4K6",
      );
      alert(t.thankYouMessage);
      formData.name.reset();
      formData.email.reset();
      formData.text.reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert(error?.text || "Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const isValidForm =
    formData.name.isValid && formData.email.isValid && formData.text.isValid;

  return (
    <section className={style.contact} id="mail" aria-labelledby="contact-title">
      <div className={style.inner}>
        <span className={style.tag}>// 05. CONTACT</span>
        <h2 className={style.title} id="contact-title">
          Let&apos;s work together.
        </h2>
        <p className={style.subtitle}>
          Have a project in mind? I&apos;d love to hear about it.
        </p>

        <div className={style.formWrap}>
        <form
          className={style.form}
          ref={form}
          onSubmit={onSubmit}
          aria-busy={isSending}
        >
          <div className={style.row}>
            <div className={style.field}>
              <label className={style.label} htmlFor="user_name">
                NAME
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                className={style.input}
                placeholder={t.namePlaceholder}
                {...formData.name.inputProps}
              />
              {formData.name.errors.map((err, i) => (
                <span key={i} className={style.error}>
                  {err}
                </span>
              ))}
            </div>
            <div className={style.field}>
              <label className={style.label} htmlFor="user_email">
                EMAIL
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                className={style.input}
                placeholder={t.emailPlaceholder}
                {...formData.email.inputProps}
              />
              {formData.email.errors.map((err, i) => (
                <span key={i} className={style.error}>
                  {err}
                </span>
              ))}
            </div>
          </div>

          <div className={style.field}>
            <label className={style.label} htmlFor="message">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              className={style.textarea}
              placeholder={t.messagePlaceholder}
              rows={5}
              {...formData.text.inputProps}
            />
            {formData.text.errors.map((err, i) => (
              <span key={i} className={style.error}>
                {err}
              </span>
            ))}
          </div>

          <button
            type="submit"
            className={style.submit}
            disabled={!isValidForm || isSending}
            aria-label={isSending ? "Sending…" : t.sendButton}
          >
            {isSending ? "sending…" : "send message →"}
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};
