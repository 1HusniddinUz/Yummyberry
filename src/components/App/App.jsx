import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ScrollProvider } from "../../context/ScrollContext";
 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../../locale/translationsEn";
import translationsRu from "../../locale/translationsRu";
import translationsUz from "../../locale/translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: translationsEn},
    ru: {translation: translationsRu},
    uz: {translation: translationsUz},
  },
  lng: "en", // Change this value to switch languages
  fallbackLng: "en", // if user language isn't available, use en as fallback
});

const App = () => {
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }
  return (
    <div id="App">
      <Router>
        <ScrollProvider>
          {/* ✅ Header har doim chiqadi */}
          <Header changeLang={changeLang}/>

          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>

          {/* ✅ Footer har doim chiqadi */}
          <Footer />
        </ScrollProvider>
      </Router>
    </div>
  );
};

export default App;
