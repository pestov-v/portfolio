import type { NextPage } from "next";
import { ISectionProps } from "../../interfaces";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { AboutImage } from "./AboutImage/AboutImage";
import { InfoItem } from "./InfoItem/InfoItem";
import style from "./About.module.scss";

const additionalInfo = [
  { title: "Name", value: "Volodymyr Pestov" },
  { title: "Birthday", value: "15 September 1987" },
  { title: "Degree", value: "Master" },
  { title: "Experience", value: "3+ years" },
  { title: "Phone", value: "+38 (097) 00 97 343" },
  { title: "Email", value: "pestov.volodymyr@gmail.com" },
  { title: "Address", value: "Kamianets-Podilskiy, Ukraine" },
  { title: "Freelance", value: "Available" },
];

export const About: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.about} ref={sectionRef}>
      <div className={style.container}>
        <SectionTitle title="About" bgText="About" />

        <div className={style.info}>
          <AboutImage />

          <div className={style.infoWrapper}>
            <h3 className={style.infoTitle}>Web Developer & UI/UX Designer</h3>

            <p className={style.description}>
              Front-end developer with 3+ years of experience designing and
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
