import type { NextPage } from "next";
import { ISectionProps } from "../../interfaces";
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

const imgPath = "img/about/about";
const About: NextPage<ISectionProps> = ({ sectionRef }) => {
  return (
    <section className={style.about} ref={sectionRef}>
      <div className={style.container}>
        <h2
          className={style["section--title"]}
          data-text="About"
          title="About page"
        >
          About
        </h2>

        <div className={style.info}>
          <picture className={style.imageWrapper}>
            <source
              media="(min-width: 796px)"
              srcSet={`${imgPath}.webp`}
              type="image/webp"
            />
            <source media="(min-width: 796px)" srcSet={`${imgPath}.jpg`} />
            <source
              srcSet={`${imgPath}.jpg 3x, ${imgPath}.jpg 2x, ${imgPath}-small.jpg 1x`}
            />
            <source srcSet={`${imgPath}-small.webp`} type="image/webp" />
            <img
              src={`${imgPath}-small.jpg`}
              alt="me"
              className={style.image}
            />
          </picture>

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
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      <i className={style["arrow-next"]} />
    </section>
  );
};

export default About;
