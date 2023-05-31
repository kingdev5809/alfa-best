import React from "react";
import "./Partners.scss";
import { PartnersBack, whiteLogo } from "../../Assets/Index";
import { useTranslation } from "react-i18next";
function Partners({ page }) {
  const { t } = useTranslation("translation");

  return (
    <div
      className="partners"
      style={{ backgroundImage: `url(${PartnersBack})` }}
    >
      <div className="container">
        <img src={whiteLogo} alt="" />
        <h1>{t(`${page}.partners.h1`)}</h1>
        <div className="line"></div>
        <p>{t(`${page}.partners.p`)}</p>
        <div className="dark-shadow"></div>
      </div>
    </div>
  );
}

export default Partners;
