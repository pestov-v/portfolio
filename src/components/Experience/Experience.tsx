import { useLanguage } from "../../contexts/LanguageContext";
import { EXPERIENCE } from "../../util/constants";
import { Timeline } from "../ui/timeline";
import style from "./Experience.module.scss";

export const Experience = () => {
  const { t } = useLanguage();

  const timelineData = EXPERIENCE.map((item) => {
    const data =
      t.experienceData[item.translationKey as keyof typeof t.experienceData];

    return {
      title: item.period,
      content: (
        <div className="pb-8">
          <h4 className="text-lg md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            {data.position}
          </h4>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4">
            {item.company} · {item.location}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-6 leading-relaxed max-w-2xl">
            {data.companyDescription}
          </p>

          {data.achievements?.length > 0 && (
            <ul className="space-y-2 mb-6">
              {data.achievements.map((ach, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                >
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                  {ach}
                </li>
              ))}
            </ul>
          )}

          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section
      className={style.experience}
      id="experience"
      aria-labelledby="exp-title"
    >
      <div className={style.inner}>
        <span className={style.tag}>{t.ui.tagExperience}</span>
        <h2 className={style.title} id="exp-title">
          {t.whereIveWorked}
        </h2>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
};
