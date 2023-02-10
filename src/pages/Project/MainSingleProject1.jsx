import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/projects/trastbank1.jpg";
import img2 from "../../assets/projects/trastbank2.jpg";
import img3 from "../../assets/projects/trastbank3.jpg";
import img4 from "../../assets/projects/trastbank4.jpg";

import style from "./MainSingleProject.module.css";
import {useTranslation} from 'react-i18next'
export const MainSingleProject1 = (props) => {
  debugger
  const {t} = useTranslation()
  return (
    <div className={style.lavhalar}>
     {props.name}
    </div>
  );
};
