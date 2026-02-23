import style from "./ExperienceItem.module.scss";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  companyDescription: string;
  achievements: string[];
}

export const ExperienceItem = ({
  company,
  position,
  period,
  location,
  companyDescription,
  achievements,
}: ExperienceItemProps) => {
  return (
    <article className={style.item}>
      <div className={style.header}>
        <div className={style.titleGroup}>
          <h3 className={style.position}>{position}</h3>
          <div className={style.company}>{company}</div>
          <div className={style.companyDescription}>{companyDescription}</div>
        </div>
        <div className={style.meta}>
          <span className={style.period}>{period}</span>
          <span className={style.location}>{location}</span>
        </div>
      </div>
      <ul className={style.achievements}>
        {achievements.map((achievement, index) => (
          <li key={index} className={style.achievement}>
            {achievement}
          </li>
        ))}
      </ul>
    </article>
  );
};
