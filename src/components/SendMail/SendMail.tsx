import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { TextInput } from '../ui/FormControls/TextInput/TextInput';
import { SectionTitle } from '../ui/SectionTitle/SectionTitle';
import { useTextInput } from '../../hooks/useTextInput/useTextInput';
import { useLanguage } from '../../contexts/LanguageContext';
import style from './SendMail.module.scss';

export const SendMail = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  const formData = {
    name: useTextInput({
      isRequired: true,
      validators: ['name'],
      filters: ['name'],
    }),
    email: useTextInput({
      isRequired: true,
      validators: ['email'],
      filters: ['email'],
    }),
    text: useTextInput({ isRequired: true, validateOnChange: true }),
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    try {
      await emailjs.sendForm(
        'service_f6tyqgq',
        'template_5lm9rln',
        form.current,
        '_t-9w7H78xR5SS4K6'
      );

      alert(t.thankYouMessage);
      formData.name.reset();
      formData.email.reset();
      formData.text.reset();
    } catch (e) {}
  };

  const isValidForm =
    formData.name.isValid && formData.email.isValid && formData.text.isValid;

  return (
    <section className={style.SendMail} id='mail'>
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
            name='user_name'
            placeholder={t.namePlaceholder}
          />
          <TextInput
            {...formData.email.inputProps}
            errors={formData.email.errors}
            name='user_email'
            placeholder={t.emailPlaceholder}
          />

          <TextInput
            {...formData.text.inputProps}
            errors={formData.text.errors}
            textarea
            name='message'
            placeholder={t.messagePlaceholder}
          />
          <button className={style.btn} disabled={!isValidForm}>
            {t.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};
