import style from "./Navbar.module.scss";
import { RefObject, useRef } from "react";
import { useVisible } from "../../hooks/useVisible";

const links = [
  { id: 1, href: "#about", title: "about" },
  { id: 2, href: "#skills", title: "skills" },
  { id: 3, href: "#projects", title: "projects" },
  { id: 4, href: "#mail", title: "mail me" },
];

interface Refs {
  [key: string]: RefObject<HTMLElement>;
}
interface IProps {
  refs: Refs;
}
export const Navbar = () => {
  const navbar = useRef<HTMLElement>(null);
  useVisible({
    element: navbar,
    style: style.visible,
    throttleTime: 10,
    offsetY: 100,
  });

  return (
    <nav className={style.navbar} ref={navbar}>
      <ul className={style.links}>
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
