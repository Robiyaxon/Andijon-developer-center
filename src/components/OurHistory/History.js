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
          <div className="col-md-6"  >
            <video width="750" height="500" controls >
              <source src="https://youtu.be/Cnt_gBTzRVk" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
