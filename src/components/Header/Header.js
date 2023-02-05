import React from "react";
import logo from "../../assets/logo_adc.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  
  const mapHeader = [
    { id: 4, name: t("navbar4"), url: "news" },
    { id: 5, name: t("navbar5"), url: "contact" },
  ];
  const HeaderMap = mapHeader.map((a) => (
    <li key={a.id}>
      <Link to={a.url}>{a.name}</Link>
    </li>
  ));
  return (
    <div className="Header">
      <div className="container">
        <div className="smth">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="/#about">{t("navbar1")}</a>
              </li>
              <li>
                <a href="/#services">{t("navbar2")}</a>
              </li>
              <li>
                <a href="/project">{t("navbar3")}</a>
              </li>
            
              {HeaderMap}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
