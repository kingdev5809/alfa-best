import React from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { headerWhiteLogo } from "../../Assets/Index";
function Header({ title, img }) {
  const { t } = useTranslation("translation");

  return (
    <div
      className="header container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="header_content">
        <img src={headerWhiteLogo} alt="" />
        <h1>{t(`${title}.header`)}</h1> 
      </div>
      <div className="liner-gradient"></div>
    </div>
  );
}

export default Header;
