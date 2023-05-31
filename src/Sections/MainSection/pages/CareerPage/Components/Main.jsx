import React from "react";
import "./Main.scss";
import { HeaderLogo } from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";
function Main() {
  const { t } = useTranslation("translation");

  return (
    <div className="career_main container">
      <div className="left">
        <img src={HeaderLogo} alt="logo" />
        <h2>{t("careerpage.h1")}</h2>
      </div>
      <div className="right">
        <p>{t("careerpage.p")}</p>
        <h3>{t("careerpage.h2")}</h3>
        <a href="https://tashkent.hh.uz" rel="noreferrer" target="_blank">
          https://tashkent.hh.uz/employer/925221
        </a>
        <h4>{t("careerpage.h3")}</h4>
        <div className="cards">
          <div className="card">
            <h5>01</h5>
            <p>
              {t("careerpage.card.1.h2")}{" "}
              <span>{t("careerpage.card.1.p")}</span>
            </p>
          </div>
          <div className="card">
            <h5>02</h5>
            <p>
              {t("careerpage.card.2.h2")}{" "}
              <span>{t("careerpage.card.2.p")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
