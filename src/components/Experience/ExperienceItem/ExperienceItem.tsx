import style from "./ExperienceItem.module.scss";

interface IExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  companyDescription: string;
  achievements: string[];
  isActive?: boolean;
}

export const ExperienceItem = ({
  company,
  position,
  period,
  location,
  companyDescription,
  achievements,
  isActive = false,
}: IExperienceItemProps) => {
  return (
    <div className={`${style.card} ${isActive ? style.active : ""}`}>
      <div className={style.left}>
        <span className={style.period}>{period}</span>
        <h3 className={style.position}>{position}</h3>
        <span className={style.company}>
          {company} · {location}
        </span>
        <p className={style.description}>{companyDescription}</p>
      </div>
      {isActive && achievements?.length > 0 && (
        <div className={style.tags}>
          {achievements.slice(0, 3).map((ach, i) => (
            <span key={i} className={style.tag}>
              {ach}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
