/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
// import img from "../../assets/1.jpg";
import { useTranslation } from 'react-i18next'
import "aos/dist/aos.css";
import AOS from 'aos'
import "./History.scss";
function History() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });
  const { t } = useTranslation()
  return (
    <div className="History" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6"  >
            <div className="intro">
              <h3>{t('ourHistory.intro')}</h3>
              <h5>
                {t('ourHistory.title1')}
              </h5>
              <p>
                {t('ourHistory.subTitle1')}
              </p>
            </div>
          </div>
          <div className="col-md-6 "  >
          <iframe className="iframe9" src="https://www.youtube.com/embed/Cnt_gBTzRVk" title="ADC commercial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
