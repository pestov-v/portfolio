import { useLanguage } from "../../contexts/LanguageContext";
import { socialLinks } from "../../util/constants";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import style from "./About.module.scss";
import { AboutImage } from "./AboutImage/AboutImage";
import { InfoItem } from "./InfoItem/InfoItem";

export const About = () => {
  const { t } = useLanguage();

  const additionalInfo = [
    { id: "name", title: t.personalInfo.name, value: "Volodymyr Pestov" },
    {
      id: "birthday",
      title: t.personalInfo.birthday,
      value: "15 September 1987",
    },
    { id: "degree", title: t.personalInfo.degree, value: t.master },
    {
      id: "experience",
      title: t.personalInfo.experience,
      value: t.fiveYearsPlus,
    },
    {
      id: "phone",
      title: t.personalInfo.phone,
      value: "+38 (097) 00 97 343",
      icon: "phone",
    },
    {
      id: "email",
      title: t.personalInfo.email,
      value: "pestov.volodymyr@gmail.com",
      icon: "email",
    },
    {
      id: "address",
      title: t.personalInfo.address,
      value: "Nesebar, Bulgaria",
    },
    { id: "freelance", title: t.personalInfo.freelance, value: t.available },
    {
      id: "telegram",
      title: t.personalInfo.telegram,
      value: "@pestov_v",
      icon: "telegram",
    },
    {
      id: "viber",
      title: t.personalInfo.viber,
      value: "+380970097343",
      icon: "viber",
    },
    {
      id: "whatsapp",
      title: t.personalInfo.whatsapp,
      value: "+380970097343",
      icon: "whatsapp",
    },
    {
      id: "facebook",
      title: t.personalInfo.facebook,
      value: "Facebook",
      icon: "facebook",
      href: socialLinks.find((link) => link.id === "facebook")?.href,
      hideTitle: true,
    },
    {
      id: "github",
      title: t.personalInfo.github,
      value: "GitHub",
      icon: "github",
      href: socialLinks.find((link) => link.id === "github")?.href,
      hideTitle: true,
    },
    {
      id: "linkedin",
      title: t.personalInfo.linkedin,
      value: "LinkedIn",
      icon: "linkedin",
      href: socialLinks.find((link) => link.id === "linkedin")?.href,
      hideTitle: true,
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
              {additionalInfo.map(
                ({ id, title, value, icon, href, hideTitle }, index) => (
                  <div
                    key={id}
                    className={`animate-on-scroll scale-in stagger-${Math.min(
                      index + 1,
                      5,
                    )}`}
                  >
                    <InfoItem
                      title={title}
                      value={value}
                      icon={icon}
                      href={href}
                      hideTitle={hideTitle}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <i className={style["arrow-next"]} />
    </section>
  );
};
