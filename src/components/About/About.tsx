import style from "./About.module.scss";
import type { NextPage } from "next";
import Image from "next/image";
import TitleSection from "../ui/TitleSection/TitleSection";
import { ISectionProps } from "../../interfaces";

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

const About: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.about} ref={sectionRef}>
      <TitleSection title="About Me" backgroundText="About" />

      <div className={style.info}>
        <Image width={330} height={402} src="/img/about.jpg" alt="" />

        <div className={style.infoWrapper}>
          <h3 className={style.title}>Web Developer & UI/UX Designer</h3>

          <p className={style.description}>
            Front-end developer with 3+ years of experience designing and
            building responsive web design and mobile apps. Proficient with CSS
            and JS Frameworks, with extensive knowledge of UX and user
            psychology.
          </p>

          <div className={style.additionalInfo}>
            {additionalInfo.map(({ title, value }) => (
              <h4 key={title} className={style.item}>
                {title}:{" "}
                <span
                  className={[
                    style.value,
                    value === "Available" ? style.success : "",
                  ].join(" ")}
                >
                  {value}
                </span>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
