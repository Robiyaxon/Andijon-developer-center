import React from "react";
import {useTranslation} from 'react-i18next'
import logo from "../../assets/logo_adc.png";
import "./Footer.scss";
function Footer() {
  const {t} = useTranslation();
  const map = [
    { id: 1, to: "/#about", name: t("navbar2") },
    { id: 2, to: "/#services", name:  t("navbar1")},
    { id: 3, to: "project", name: t("navbar3") },
    { id: 4, to: "news", name: t("navbar4") },
  ];
  const map2 = map.map((a) => (
    <li key={a.id}>
      <a href={a.to}>{a.name}</a>
    </li>
  ));
  return (
    <div className="Footer">
      <div className="wrapper container">
        <div className="left_box">
          <a href="/">
            <img src={logo} alt="rasm bor edi!" />
          </a>
          <p>
            {t("footer.motto")}
          </p>
        </div>
        <div className="right_box">
          <div className="navigation">
            <h6>{t("footer.quickLinks")}</h6>
            <ul>{map2}</ul>
          </div>
          <div className="contacts">
            <h6>{t("navbar5")}</h6>
            <p>
             <span>{t("footer.adress")}</span>
            </p>
            <p>
            {t("footer.tell")} <a href="tel: +998 99 969 00 70">+998 99 969 00 70</a>
            </p>
            <p className="email">
            {t("footer.email")} <span>building_mega_service@mail.ru</span>
            </p>
            <p className="worktime">
            {t("footer.workTime")} <span>Du-Ju, 9:00 - 18:00</span>
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">"BUILDING MEGA SERVICE" Holding. All right reserved. Copyright<a href="http://softcity.uz">SoftCity ©</a></p>
    </div>
  );
}

export default Footer;
