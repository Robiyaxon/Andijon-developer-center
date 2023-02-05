import React from "react";
import style from "../news/HeaderNews/HeaderNews.module.css";
import {useTranslation} from 'react-i18next'
import { NavLink } from "react-router-dom";
import img from "../../assets/projects/poliklinikaK.jpg";

export function SingleHeader3() {
  const {t} = useTranslation();
  return (
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.SingleNews1Wrapper}></div>

      <div className={style.HeaderNews}>
        <img src={img} alt="rasm bor edi" />
        <div className={style.BlockLink}>
          <h1>
            {t("homeProjects.title3")}
          </h1>
          <NavLink
            to="/"
            className={style.Block1}
          >
            {t("homapage_r")}
          </NavLink>
          <a
            href="/project"
            className={style.Block2}
          >
            / {t("innerProject.project")}{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
