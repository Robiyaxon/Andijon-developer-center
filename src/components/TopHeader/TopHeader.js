import "./TopHeader.scss";
import "./TopHeaderSellect.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import i18n from "../../i18n";

function TopHeader() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const map = [
    { link: "https://www.facebook.com/adceducate/", id: 1, class: "facebook", icon: faFacebook },
    { link: "https://t.me/adceducate", id: 2, class: "tele", icon: faTelegramPlane },
    { link: "https://www.instagram.com/adc_educate/", id: 3, class: "insta", icon: faInstagram },
    { link: "https://www.youtube.com/channel/UCx3m1wneUWfOwf8dGbYnMfw", id: 4, class: "youtube", icon: faYoutube },
  ];
  const map2 = map.map((a) => (
    <li key={a.id} className={a.class}>
      <a href={a.link} >
        <FontAwesomeIcon icon={a.icon}></FontAwesomeIcon>{" "}
      </a>
    </li>
  ));
  return (
    <div className="TopHeader">
      <div className="container">
        <div className="wrapper">
          <div className="left_box">
            <div className="adress">
              <p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
                Андижане
              </p>
            </div>
            <div className="call_me">
              <a href="tel: +998 74 228 11 21">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phones : 
                (74)228-11-21
              </a>
            </div>
          </div>
          <div className="right_box">
            <div className="socials_l">
              <ul>
                <li className="facebook">
                  <div className="select">
                    <select name="lang" value={lang} onChange={handleChange}>
                      <option value="uz">UZ</option>
                      <option value="ru">RU</option>
                    </select>
                  </div>
                </li>
                {map2}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
