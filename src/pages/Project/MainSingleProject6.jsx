import React from "react";
import style from "./MainSingleProject.module.css";
import { useTranslation } from 'react-i18next'
export const MainSingleProject6 = () => {
  const { t } = useTranslation()
  return (
    <div className={style.lavhalar}>
      <h1>{t('innerProject.intro6')}</h1>
      <p>Listening: 7.5 ⭐️⭐️⭐️</p>
      <p>Reading: 6.5 ⭐️⭐️⭐️</p>
      <p>Writing: 6.5⭐️⭐️⭐️</p>
      <p>Speaking: 6.5 ⭐️⭐️⭐️</p>
      <h2>{t('innerProject.imto_sx')}</h2>
      <div className={style.lavhalar1}>
      </div>
    </div>
  );
};
