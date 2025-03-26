import React, { useState, useEffect, useTransition } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scroller, animateScroll as scroll } from "react-scroll";
import "./HeaderNav.css";
import { useTranslation } from "react-i18next";

const HeaderNav = ({ changeLang }) => {
  const { t } = useTranslation();

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Sahifa skroll qilganda "scrolled" class qo‘shiladi
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // URL hash bo‘lsa, darhol skroll qiladi
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scroller.scrollTo(id, {
        duration: 0, // ⚡ Instant skroll
        smooth: false,
        offset: -50, // ✅ Header balandligini hisobga olamiz
      });
    }
  }, [location]);

  // ✅ Home tugmasiga bosilganda darhol yuqoriga chiqish
  const handleHomeClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop({
      duration: 0, // ⚡ Instant skroll
      smooth: false,
    });
  };

  return (
    <>
      <div id="HeaderNav" className={scrolled ? "scrolled" : ""}>
        {/* 🍔 Burger menyu tugmasi */}
        <div id="BurgerMenu" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* 📌 Katta ekran uchun navigatsiya */}
        <div id="HeaderNavTools">
          <ul>
            <li>
              <NavLink id="HeaderNavLink" to="/" onClick={handleHomeClick}>
                {t(`headerNavHome`)}
              </NavLink>
            </li>
            <li>
              <NavLink id="HeaderNavLink" to="/#MainTop">
                {t(`headerNavProduct`)}
              </NavLink>
            </li>
            <li>
              <NavLink id="HeaderNavLink" to="/#MainBottom">
                {t('headerNavAbout')}
              </NavLink>
            </li>
            <li>
              <NavLink id="HeaderNavLink" to="/#Footer">
                {t('headerNavContact')}
              </NavLink>
            </li>
          </ul>
        </div>

        <div id="HeaderLogo">
          <img src="https://i.imgur.com/bG2meb1.png" alt="CompanyLogo" />
        </div>

        {/* 🌍 Ijtimoiy tarmoqlar */}
        <div id="SocialMedia">
          <div id="MediaBox">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <select onChange={changeLangHandler} defaultValue='en' style={{background:"transparent" , padding: "7px 20px" , color: "white"
          }}>
            <option style={{color: "black"}} value="en">English</option>
            <option style={{color: "black"}} value="uz">Uzbek</option>
            <option style={{color: "black"}} value="ru">Russian</option>
          </select>
        </div>
      </div>

      {/* 🍔 Burger menyu to‘liq ekran */}
      <div id="BurgerMenuContainer" className={menuOpen ? "active" : ""}>
        <div id="CloseMenu" onClick={() => setMenuOpen(false)}>
          ✖
        </div>
        <nav id="BurgerNav">
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  handleHomeClick(e);
                  setMenuOpen(false);
                }}
              >
                {t(`headerNavHome`)}
              </NavLink>
            </li>
            <li>
              <NavLink to="/#MainTop" onClick={() => setMenuOpen(false)}>
              {t(`headerNavProduct`)}
              </NavLink>
            </li>
            <li>
              <NavLink to="/#MainBottom" onClick={() => setMenuOpen(false)}>
              {t(`headerNavAbout`)}
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Footer" onClick={() => setMenuOpen(false)}>
                {t(`headerNavHome`)}
              </NavLink>
            </li>
          </ul>
          <div id="MediaBox">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNav;
