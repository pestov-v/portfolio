import style from "./Navbar.module.scss";
import type { NextPage } from "next";
import { RefObject } from "react";

const links = [
  { id: 1, href: "#about", title: "about" },
  { id: 2, href: "#skills", title: "skills" },
  { id: 3, href: "#projects", title: "projects" },
];

interface Refs {
  [key: string]: RefObject<HTMLElement>;
}
interface IProps {
  refs: Refs;
}

const Navbar: NextPage<IProps> = ({ refs }) => {
  const clickHandler = (title: string) => {
    window.scrollTo({
      top: refs[title].current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className={style.navbar} ref={refs.navbar}>
      <ul className={style.links}>
        {links.map(({ id, href, title }) => (
          <li key={id} onClick={() => clickHandler(title)}>
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
