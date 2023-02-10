import React from "react";
import style from "./HeaderNews/HeaderNews.module.css";
import {useTranslation} from 'react-i18next'
import img2 from "../../assets/projects/bogcha1.jpg";

const SingleNews1 = (props) => {
  const {t} = useTranslation();
  return (
    <div className={style.WrappererNews}>
     <h1>{props.name}</h1>
    </div>
  );
};
export default SingleNews1;
