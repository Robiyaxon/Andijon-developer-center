/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import img1 from '../../assets/projects/ielts2.jpg'
import img2 from '../../assets/projects/ielts3.jpg'
import img3 from '../../assets/projects/ielts4.jpg'
import img4 from '../../assets/projects/ielts7.jpg'
import img5 from '../../assets/projects/ielts0.jpg'
import "./project.css";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
export const ProjectName = () => {
  const { t } = useTranslation();
  const map = [
    { img: img1, id: 1, linke: "singularproject1", title: t("homeProjects.subTitle1"), item: t("homeProjects.title1") },
    { img: img2, id: 2, linke: "singularproject1", title: t("homeProjects.subTitle3"), item: t("homeProjects.title3") },
    { img: img3, id: 3, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title_Shaxlo") },
    { img: img4, id: 4, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title6") },
    { img: img5, id: 5, linke: "singularproject1", title: t("homeProjects.subTitle6"), item: t("homeProjects.title6") },
  ]
  const map2 = map.map(a => <div class="box" id={a.id}>
    <img class="main-img" src={a.img} alt="image" />
    <div class="box-content">
      <NavLink to={a.linke} className="PageameNavlink">
        {" "}
        <div class="item">{a.item}</div>
        <div class="description show-animate">{a.title}</div>
      </NavLink>
    </div>
  </div>)

  return (
    <div className="PrejectName">
      <h1> {t("ourproject")}</h1>
      <div className="wrapper_project">
        {map2}
      </div>
    </div>
  );
};


export default ProjectName