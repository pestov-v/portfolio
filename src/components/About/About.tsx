import { useLanguage } from "../../contexts/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import style from "./About.module.scss";
import { AboutImage } from "./AboutImage/AboutImage";
import { InfoItem } from "./InfoItem/InfoItem";

export const About = () => {
  const { t } = useLanguage();

  const additionalInfo = [
    { title: t.personalInfo.name, value: "Volodymyr Pestov" },
    { title: t.personalInfo.birthday, value: "15 September 1987" },
    { title: t.personalInfo.degree, value: t.master },
    { title: t.personalInfo.experience, value: t.fiveYearsPlus },
    {
      title: t.personalInfo.phone,
      value: "+38 (097) 00 97 343",
      icon: "phone",
    },
    {
      title: t.personalInfo.email,
      value: "pestov.volodymyr@gmail.com",
      icon: "email",
    },
    { title: t.personalInfo.address, value: "Nesebar, Bulgaria" },
    { title: t.personalInfo.freelance, value: t.available },
    { title: t.personalInfo.telegram, value: "@pestov_v", icon: "telegram" },
    { title: t.personalInfo.viber, value: "+380970097343", icon: "viber" },
    {
      title: t.personalInfo.whatsapp,
      value: "+380970097343",
      icon: "whatsapp",
    },
  ];

  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <SectionTitle title={t.aboutMe} bgText={t.aboutBgText} />

        <div className={style.info}>
          <div className="animate-on-scroll fade-in-left">
            <AboutImage />
          </div>

          <div className={style.infoWrapper}>
            <div className="animate-on-scroll fade-in-right stagger-1">
              <h3 className={style.infoTitle}>{t.jobTitle}</h3>
            </div>

            <div className="animate-on-scroll fade-in-up stagger-2">
              <p className={style.description}>{t.description}</p>
            </div>

            <div
              className={`${style.additionalInfo} animate-on-scroll fade-in-up stagger-3`}
            >
              {additionalInfo.map(({ title, value, icon }, index) => (
                <div
                  key={title}
                  className={`animate-on-scroll scale-in stagger-${Math.min(
                    index + 1,
                    5
                  )}`}
                >
                  <InfoItem title={title} value={value} icon={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <i className={style["arrow-next"]} />
    </section>
  );
};
