import React from "react";
import style from "../news/HeaderNews/HeaderNews.module.css";
import {useTranslation} from 'react-i18next'
import { NavLink } from "react-router-dom";
import img from "../../assets/Build/food1.jpg";

export function SingleHeader1(props) {
  const {t} = useTranslation();
  return (
    <div>
      sasa
      <h1> {props.name}</h1>
    
    </div>
  );
}
