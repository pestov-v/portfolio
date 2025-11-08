import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import style from "./About.module.scss";
import { AboutImage } from "./AboutImage/AboutImage";
import { InfoItem } from "./InfoItem/InfoItem";

const additionalInfo = [
  { title: "Name", value: "Volodymyr Pestov" },
  { title: "Birthday", value: "15 September 1987" },
  { title: "Degree", value: "Master" },
  { title: "Experience", value: "5+ years" },
  { title: "Phone", value: "+38 (097) 00 97 343" },
  { title: "Email", value: "pestov.volodymyr@gmail.com" },
  { title: "Address", value: "Nesebar, Bulgaria" },
  { title: "Freelance", value: "Available" },
];

export const About = () => {
  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <SectionTitle title="About me" bgText="About" />

        <div className={style.info}>
          <AboutImage />

          <div className={style.infoWrapper}>
            <h3 className={style.infoTitle}>Web Developer & UI/UX Designer</h3>

            <p className={style.description}>
              Front-end developer with 5+ years of experience designing and
              building responsive web design and mobile apps. Proficient with
              CSS and JS Frameworks, with extensive knowledge of UX and user
              psychology.
            </p>

            <div className={style.additionalInfo}>
              {additionalInfo.map(({ title, value }) => (
                <InfoItem key={title} title={title} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <i className={style["arrow-next"]} />
    </section>
  );
};
