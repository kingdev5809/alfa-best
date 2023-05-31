import React from "react";
import "./Navbar.scss";
import {
  HeaderLogo,
  barsIcon,
  blackLogo,
  closeIcon,
  facebookDark,
  instagramDark,
  langIcon,
  mobileLogo,
  plusLogo,
  telegramDark,
} from "../../Assets/Index";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { t, i18n } = useTranslation("translation");
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div
          className={`desktop ${location.pathname === "/" ? "dark" : "light"} `}
        >
          <div className="desktop_section_one container">
            <div className="desktop_section_one_logo">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/"}
              >
                <img
                  src={location.pathname === "/" ? HeaderLogo : blackLogo}
                  alt="Logo"
                />
              </NavLink>
            </div>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/about"}
                >
                  {t("about_company")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/career"}
                >
                  {t("career")}{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/purchases"}
                >
                  {t("purchases")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/cooperation"}
                >
                  {t("cooperation")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/contact"}
                >
                  {t("contacts")}
                </NavLink>
              </li>
              <div className="desktop_section_one_change-lang">
                <span
                  className={i18n.language === "ru" ? "active" : ""}
                  onClick={() => i18n.changeLanguage("ru")}
                >
                  RU
                </span>
                <div className="h-line"></div>
                <span
                  className={i18n.language === "uz" ? "active" : ""}
                  onClick={() => i18n.changeLanguage("uz")}
                >
                  UZ
                </span>
              </div>
            </ul>
          </div>
          <div className="h-line-sections"></div>
          <div className="desktop_section_two container">
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/engineering"}
                >
                  {t("engineering")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/household"}
                >
                  {t("service")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/catering"}
                >
                  {t("corporate")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/transportation"}
                >
                  {t("transportation")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="h-line-sections"></div>
        </div>
        <div className="mobile">
          <div className="mobile_title">
            <img className="left-logo" src={mobileLogo} alt="Logo" />
            <div className="right">
              <img className="logo-1" src={langIcon} alt="logo" />
              {mobileNavVisible ? (
                <img
                  className="logo-2"
                  src={closeIcon}
                  alt="bars"
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                />
              ) : (
                <img
                  className="logo-2"
                  src={barsIcon}
                  alt="bars"
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                />
              )}
            </div>
          </div>
          <div className={`mobile_content ${mobileNavVisible ? "active" : ""}`}>
            <ul>
              <li className="dropdown">
                <p onClick={() => setDropdownVisible(!dropdownVisible)}>
                  <span className={dropdownVisible ? "active" : ""}>
                    {t("services")}
                  </span>{" "}
                  <img src={plusLogo} alt="" />
                </p>

                <ul
                  className={`dropdown_content ${
                    dropdownVisible ? "active" : ""
                  }`}
                >
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to={"/engineering"}
                      onClick={() => setMobileNavVisible(!mobileNavVisible)}
                    >
                      {t("engineering")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={() => setMobileNavVisible(!mobileNavVisible)}
                      to={"/household"}
                    >
                      {t("service")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={() => setMobileNavVisible(!mobileNavVisible)}
                      to={"/catering"}
                    >
                      {t("corporate")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={() => setMobileNavVisible(!mobileNavVisible)}
                      to={"/transportation"}
                    >
                      {t("transportation")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                  to={"/about"}
                >
                  {t("about_company")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                  to={"/career"}
                >
                  {t("career")}{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                  to={"/purchases"}
                >
                  {t("purchases")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                  to={"/cooperation"}
                >
                  {t("cooperation")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMobileNavVisible(!mobileNavVisible)}
                  to={"/contact"}
                >
                  {t("contacts")}
                </NavLink>
              </li>
            </ul>
            <div className="contact">
              <p>Следите в телеграмме</p>
              <div className="icons">
                <img src={telegramDark} alt="" />
                <img src={instagramDark} alt="" />
                <img src={facebookDark} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
