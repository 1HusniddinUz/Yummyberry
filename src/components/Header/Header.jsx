import React from 'react'
import "./Header.css"
import "../responsive/HeaderRes.css"
import HeaderNav from "./HeaderNav/HeaderNav"
import HeaderMain from "./HeaderMain/HeaderMain"
import videoBg from "../../photos/HeaderBG.mp4"
const Header = ({changeLang}) => {
  return (
    <header>
      <video src={videoBg} autoPlay muted loop id="myVideo" />
      <div id="HeaderOverlay">
        <div className="container">
          <HeaderNav changeLang={changeLang} />
        </div>
          <HeaderMain changeLang={changeLang}/>
      </div>
    </header>
  )
}

export default Header
