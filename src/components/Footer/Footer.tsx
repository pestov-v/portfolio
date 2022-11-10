import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";

export const links = [
  {
    id: "facebook",
    href: "https://www.facebook.com/nakrytvp",
    title: "Facebook",
  },
  { id: "github", href: "https://github.com/nakryt", title: "GitHub" },
  { id: "email", href: "mailto:pestov.v@yahoo.com", title: "Send email" },
  { id: "phone", href: "tel:+380970097343", title: "Call me" },
];

const Footer = () => {
  return (
    <section className={style.section} id="contact">
      <div className={style.header}>
        <h2>Let&apos;s work together...</h2>
      </div>
      <div className={style.links}>
        {links.map(({ id, href, title }) => (
          <a
            id={id}
            href={href}
            className={style.details}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          >
            <Image
              width={48}
              height={48}
              src={`/img/icons/${id}.svg`}
              alt={title}
              className={id === "phone" ? style.debounce : ""}
            />
            {title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
