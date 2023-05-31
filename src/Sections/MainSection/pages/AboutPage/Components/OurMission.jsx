import React from "react";
import { useTranslation } from "react-i18next";
import "./OurMission.scss";
import {
  HeaderLogo,
  aboutCard1,
  aboutCard2,
  aboutCard3,
  aboutCard4,
  rightIcon,
  vektorImg,
} from "../../../../../Assets/Index";
function OurMission() {
  const { t } = useTranslation("translation");

  return (
    <div className="our_mission container">
      <div className="our_mission_header">
        <p>{t("about.ourmission.h1")}</p>
        <div className="our_mission_header_title">
          <img src={HeaderLogo} alt="" />
          <h3>{t("about.ourmission.h3")}</h3>
        </div>
        <div className="our_mission_header_content">
          <p>{t("about.ourmission.p")}</p>
          <h2>
            <span>ALFABEST</span> {t("about.ourmission.h2")}
          </h2>
          <img src={vektorImg} alt="" />
        </div>
      </div>
      <div className="our_mission_cards">
        <div className="our_mission_cards_item">
          <div className="left">
            <h2>{t("about.ourmission.cards.1")}</h2>
            <p>
              {t("about.ourmission.cards.p")} <img src={rightIcon} alt="" />
            </p>
          </div>
          <div className="right">
            <img src={aboutCard1} alt="CARD" />
          </div>
        </div>

        <div className="our_mission_cards_item">
          <div className="left">
            <h2>{t("about.ourmission.cards.2")}</h2>
            <p>
              {t("about.ourmission.cards.p")} <img src={rightIcon} alt="" />
            </p>
          </div>
          <div className="right">
            <img src={aboutCard2} alt="CARD" />
          </div>
        </div>

        <div className="our_mission_cards_item">
          <div className="left">
            <h2>{t("about.ourmission.cards.3")}</h2>
            <p>
              {t("about.ourmission.cards.p")} <img src={rightIcon} alt="" />
            </p>
          </div>
          <div className="right">
            <img src={aboutCard3} alt="CARD" />
          </div>
        </div>
        <div className="our_mission_cards_item">
          <div className="left">
            <h2>{t("about.ourmission.cards.4")}</h2>
            <p>
              {t("about.ourmission.cards.p")} <img src={rightIcon} alt="" />
            </p>
          </div>
          <div className="right">
            <img src={aboutCard4} alt="CARD" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
