import React from 'react'
import "./MainBottom.css"
import "../../responsive/Main/MainBottomRes.css"
import { useTranslation } from 'react-i18next'
const MainBottom = () => {
  const {t} = useTranslation()
  return (
    <div id='MainBottom'>
      <div id="MainBottomCard">
        <div id="MainBottomLCard">
          <img style={{height:"200px"}} src="https://i.imgur.com/bG2meb1.png" alt="CompanyLogo + Hamkorlik" />
        </div>
        <div id="MainBottomMCard">
          <div id="MainBottomMCard_Overlay"></div>
          {/* <img src="../../../photos/3.jpg" alt="Company card" /> */}
        </div>
        <div id="MainBottomRCard">
          <h2>{t(`mainBottomH2`)}</h2>
          <p>
            #LOCATION
          </p>
          <a href="#">
            <button>{t(`mainBottomBtn`)}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainBottom
