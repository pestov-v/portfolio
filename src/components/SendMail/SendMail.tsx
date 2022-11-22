import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

import { TextInput } from "../ui/FormControls/TextInput/TextInput";
import { useTextInput } from "../ui/FormControls/TextInput/useTextInput";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import style from "./SendMail.module.scss";

export const SendMail = () => {
  const form = useRef<HTMLFormElement>(null);

  const formData = {
    input: useTextInput(),
    email: useTextInput(),
    text: useTextInput(),
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    try {
      await emailjs.sendForm(
        "service_f6tyqgq",
        "template_5lm9rln",
        form.current,
        "_t-9w7H78xR5SS4K6"
      );

      alert("Thank you for your message!");
      formData.input.setValue("");
      formData.email.setValue("");
      formData.text.setValue("");
    } catch (e) {}
  };

  return (
    <section className={style.SendMail} id="mail">
      <div className={style.container}>
        <SectionTitle
          title="Send me a letter"
          bgText="Mail me"
          className={style.SendMail__title}
        />

        <form className={style.SendMail__form} ref={form} onSubmit={onSubmit}>
          <TextInput
            {...formData.input}
            name="user_name"
            placeholder="Name..."
          />
          <TextInput
            {...formData.email}
            name="user_email"
            placeholder="Email..."
          />

          <TextInput
            {...formData.text}
            textarea
            name="message"
            placeholder="Your message..."
          />
          <button className={style.btn}>Send</button>
        </form>
      </div>
    </section>
  );
};
