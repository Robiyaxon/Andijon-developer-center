import React, { useEffect } from "react";
import style from "../news/HeaderNews/HeaderNews.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/architecture2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
const ProjectHeader = (props) => {
    const { t } = useTranslation();
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.SingleNews1Wrapper}></div>

      <div className={style.HeaderNews}>
        <img src={img} alt="rasm bor edi!" />

        <div className={style.BlockLink}>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            {t("loyihalar")}
          </h1>
          <NavLink
            data-aos="fade-up"
            data-aos-duration="700"
            to="/"
            className={style.Block1}
          >
            {t("homapage_r")}
          </NavLink>
          <a
            data-aos="fade-up"
            data-aos-duration="700"
            href="project"
            className={style.Block2}
          >
            / {t("loyihalar")}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectHeader;
