import style from "./Navbar.module.scss";
import { useEffect, useRef } from "react";

const links = [
  { id: 1, href: "#welcome", title: "Welcome" },
  { id: 2, href: "#projects", title: "Projects" },
  { id: 3, href: "#contacts", title: "Contacts" },
];

const Navbar = () => {
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = () => {
      if (window?.scrollY > 200) {
        linksRef?.current?.classList.add(style.visible);
      } else {
        linksRef?.current?.classList.remove(style.visible);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav className={style.navbar}>
      <ul ref={linksRef} className={style.links}>
        {links.map(({ id, href, title }) => (
          <li key={id}>
            <a href={href} className={style.link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
