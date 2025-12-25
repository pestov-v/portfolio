import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";

import { useLanguage } from "../../contexts/LanguageContext";
import { useTextInput } from "../../hooks/useTextInput/useTextInput";
import { TextInput } from "../ui/FormControls/TextInput/TextInput";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
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
        "_t-9w7H78xR5SS4K6"
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
    <section className={style.SendMail} id="mail">
      <div className={style.container}>
        <SectionTitle
          title={t.sendMeLetter}
          bgText={t.mailMe}
          className={style.SendMail__title}
        />

        <form className={style.SendMail__form} ref={form} onSubmit={onSubmit}>
          <TextInput
            {...formData.name.inputProps}
            errors={formData.name.errors}
            name="user_name"
            placeholder={t.namePlaceholder}
          />
          <TextInput
            {...formData.email.inputProps}
            errors={formData.email.errors}
            name="user_email"
            placeholder={t.emailPlaceholder}
          />

          <TextInput
            {...formData.text.inputProps}
            errors={formData.text.errors}
            textarea
            name="message"
            placeholder={t.messagePlaceholder}
          />
          <button className={style.btn} disabled={!isValidForm || isSending}>
            {isSending ? <div className={style.loader} /> : t.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};
