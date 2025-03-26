import React from "react";
import "./MainTop.css";
import "../../responsive/Main/MainTopRes.css";
import { useTranslation } from "react-i18next";

const MainTop = () => {
      const { t } = useTranslation();
  
  return (
    <div id="MainTop">
      <div id="MainTopCards">

        <div id="MainTopCCard">
          <div id="MainTopCCard_Overlay"></div>
          <div id="MainTopLCard" className="MainTopLCard1">
            <h2>{t(`mainTop1H2`)}</h2>
            <p >
              {t(`mainTop1P`)}
            </p>
            <a href="#">
              <button>{t(`mainTopBtn`)}</button>
            </a>
          </div>
          <div id="MainTopRCard">
            <div id="MainTopRCard_Overlay"></div>
          </div>
        </div>

      </div>
      
      <div id="MainTopCards">

        <div id="MainTopCCard">
          <div id="MainTopCCard_Overlay"></div>
          
          <div id="MainTopRCard2">
            <div id="MainTopRCard_Overlay"></div>
          </div>

          <div id="MainTopLCard2" className="MainTopLCard2">
            <h2>{t(`mainTop2H2`)}</h2>
            <p style={{width: '30%'}}>{t(`mainTop2P`)}
            </p>
            <a href="#">
              <button>{t(`mainTopBtn`)}</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainTop;
