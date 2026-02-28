import { useLanguage } from "../../contexts/LanguageContext";
import { EXPERIENCE } from "../../util/constants";
import style from "./Experience.module.scss";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section
      className={style.experience}
      id="experience"
      aria-labelledby="exp-title"
    >
      <div className={style.inner}>
        <span className={style.tag}>// 02. EXPERIENCE</span>
        <h2 className={style.title} id="exp-title">
          Where I&apos;ve worked.
        </h2>
        <div className={style.list}>
          {EXPERIENCE.map((item, index) => (
            <ExperienceItem
              key={item.id}
              company={item.company}
              position={
                t.experienceData[
                  item.translationKey as keyof typeof t.experienceData
                ].position
              }
              period={item.period}
              location={item.location}
              companyDescription={
                t.experienceData[
                  item.translationKey as keyof typeof t.experienceData
                ].companyDescription
              }
              achievements={
                t.experienceData[
                  item.translationKey as keyof typeof t.experienceData
                ].achievements
              }
              tags={
                t.experienceData[
                  item.translationKey as keyof typeof t.experienceData
                ].tags
              }
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
