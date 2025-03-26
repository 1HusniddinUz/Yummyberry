import React from "react";
import "./FooterBottom.css";
import { useTranslation } from "react-i18next";
const FooterBottom = () => {
  const {t} = useTranslation()
  return (
    <div id="FooterBottom">
      <div className="container">
        <h3>{t(`footerLText`)}<a target="_blank" style={{color: "white", textDecoration: "underline" , fontWeight:600}} href="https://t.me/xusni_ axi">KHALIMOV</a> .</h3>
        <p>{t(`footerRText`)}</p>
      </div>
    </div>
  );
};

export default FooterBottom;
