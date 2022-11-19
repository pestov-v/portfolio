import React from "react";
import { projects } from "../../../util/constants";
import BookCard from "../../BookCard/BookCard";
import style from "./ProjectList.module.scss";

export default function ProjectList() {
  return (
    <div className={style.projects}>
      {projects.map((item) => (
        <BookCard key={item.id} {...item} />
      ))}
    </div>
  );
}
