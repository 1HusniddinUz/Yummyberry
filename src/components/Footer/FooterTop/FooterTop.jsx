import React from "react";
import "./FooterTop.css";
import "../../responsive/Footer/FooterTop.css"
import { useTranslation } from "react-i18next";
const FooterTop = () => {
  const {t} = useTranslation()
  return (
    <div id="FooterTop">
      <div id="FooterTopCards">
        <div id="FooterTopLCard">
          <img style={{height: "200px" , width: "auto"}} src="https://i.imgur.com/bG2meb1.png" loading="lazy" alt="CompanyLogo" />
        </div>
        <div id="FooterTopMCard">
          <div id="FooterTopMSCard">
            <h3>{t(`footerTopH31`)}</h3>
            <ul>
              <li>
                <a href="#">{t(`footerTopLi1`)}</a>
              </li>
              <li>
                <a href="#">{t(`footerTopLi2`)}</a>
              </li>
              {/* <li>
                <a href="#">{t(`footerTopLi3`)}</a>
              </li> */}
            </ul>
          </div>
          <div id="FooterTopMSCard">
            <h3>{t(`footerTopH32`)}</h3>
            <ul>
              <li>
                <a href="#">{t(`footerTopLi4`)}</a>
              </li>
              <li>
                <a href="#">{t(`footerTopLi5`)}</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="FooterTopRCard">
          <h2>{t(`footerTopRH2`)}</h2>
          <p>
          {t(`footerTopRP`)}
          </p>
          <div id="FooterTopRSCard">
            <input type="email" placeholder={t(`footerTopRUserPs`)} />
            <input type="text" placeholder={t(`footerTopRNumberPs`)} />
            <button>Sign Up</button>
          </div>
          <a href="https://maps.app.goo.gl/amqBbtDeaU1YQcex9" id="mainBottomLocation" target="_blank" >
            <button>{t(`mainBottomBtn`)}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
