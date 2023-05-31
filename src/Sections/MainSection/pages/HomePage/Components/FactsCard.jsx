import React from "react";
import "./FactsCard.scss";
import { foodImg, locationImg, objectImg } from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";

function FactsCard() {
  const { t } = useTranslation("translation");

  return (
    <div className="facts_card container">
      <div className="facts_card_item">
        <div className="title">
          <img src={locationImg} alt="location" />
          <h1>
            <b>+320.000</b> <span>{t("home.factscard.span")}</span>
          </h1>
        </div>
        <p>{t("home.factscard.p1")} </p>
      </div>

      <div className="facts_card_item">
        <div className="title">
          <img src={locationImg} alt="location" />
          <h1>
            <b>+320.000</b> <span>{t("home.factscard.span")}</span>
          </h1>
        </div>
        <p>{t("home.factscard.p2")} </p>
      </div>

      <div className="facts_card_item">
        <div className="title">
          <img src={objectImg} alt="location" />
          <h1>
            <b>+70.000</b> <span>{t("home.factscard.span")}</span>
          </h1>
        </div>
        <p>{t("home.factscard.p3")} </p>
      </div>

      <div className="facts_card_item">
        <div className="title">
          <img src={foodImg} alt="location" />
          <h1>
            <b>+1000</b> <span></span>
          </h1>
        </div>
        <p>{t("home.factscard.p4")} </p>
      </div>
    </div>
  );
}

export default FactsCard;
