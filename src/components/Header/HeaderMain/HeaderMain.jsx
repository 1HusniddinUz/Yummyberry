import React from 'react'
import { NavLink } from "react-router-dom";
import "./HeaderMain.css"
import { useTranslation } from 'react-i18next';
const HeaderMain = () => {
    const { t } = useTranslation();
  
  return (
    <div id='HeaderMain'>
      <div className="container">
        <div id="HeaderMainTop">
          <h1>{t(`headerBottomH1`)}</h1>

          <div id='HeaderMainPDiv'>
            <p>{t(`headerBottomBtn`)}</p>
          </div>
        </div> 
        <div id="HeaderMainBottom">
          <button><NavLink to="/" id="HeaderMainBottom_NavLink" className={({ isActive }) => isActive ? "active" : ""}>{t(`headerBottomBtn2`)}</NavLink></button>
        </div>
      </div>
      <div id="HeaderGradientOverlay"></div>
    </div>
  )
}

export default HeaderMain
