import React from "react";
import { aboutUsImg, aboutusIcon } from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";
import './AboutUs.scss'

function AboutUs() {
  const { t } = useTranslation("translation");

  return (
    <div className="aboutus container">
      <div className="aboutus_image">
        <img src={aboutUsImg} alt="logo" />
      </div>
      <div className="aboutus_content">
        <img src={aboutusIcon} alt="icon" />
        <h3>{t("home.aboutsec.h3")}</h3>
        <p>{t("home.aboutsec.p")}</p>
        <button>{t("home.aboutsec.button")}</button>
      </div>
    </div>
  );
}

export default AboutUs;
