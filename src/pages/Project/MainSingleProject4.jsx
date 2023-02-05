import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/Build/fasad1.jpg";
import img2 from "../../assets/Build/fasad2.jpg";
import img3 from "../../assets/Build/fasad3.jpg";
import img4 from "../../assets/Build/fasad4.jpg";

import style from "./MainSingleProject.module.css";
import {useTranslation} from 'react-i18next'
export const MainSingleProject4 = () => {
  const {t} = useTranslation()
  return (
    <div className={style.lavhalar}>
      <h1>{t('innerProject.intro4')}</h1>
      <div className={style.lavhalar1}>
        <SRLWrapper>
          <div>
            <a href={img1}>
              <img src={img1} alt="Loyiha1" />
            </a>
            <a href={img2}>
              <img src={img2} alt="Loyiha2" />
            </a>
            <a href={img3}>
              <img src={img3} alt="Loyiha3" />
            </a>
            <a href={img4}>
              <img src={img4} alt="Loyiha4" />
            </a>
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};
