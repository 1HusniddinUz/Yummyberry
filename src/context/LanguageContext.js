import React, { createContext, useState } from "react";
import i18n from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLang = (value) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
