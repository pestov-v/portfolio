import { useLanguage } from "../../contexts/LanguageContext";
import { EXPERIENCE } from "../../util/constants";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { ExperienceItem } from "./ExperienceItem/ExperienceItem";
import style from "./Experience.module.scss";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className={style.experience} id="experience" aria-labelledby="experience-title">
      <SectionTitle title={t.myExperience} bgText={t.experienceBgText} />

      <div className={style.timeline}>
        {EXPERIENCE.map((item, index) => (
          <div
            key={item.id}
            className={`${style.timelineItem} animate-on-scroll ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} stagger-${Math.min(index + 1, 5)}`}
          >
            <ExperienceItem
              company={item.company}
              position={t.experienceData[item.translationKey as keyof typeof t.experienceData].position}
              period={item.period}
              location={item.location}
              companyDescription={t.experienceData[item.translationKey as keyof typeof t.experienceData].companyDescription}
              achievements={t.experienceData[item.translationKey as keyof typeof t.experienceData].achievements}
            />
          </div>
        ))}
      </div>

      <i className={style["arrow-next"]} aria-hidden="true" />
    </section>
  );
};
