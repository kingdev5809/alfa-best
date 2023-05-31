import React from "react";
import "./OurGoal.scss";
import { aboutusIcon, ourGoalImg1, ourGoalImg2, ourGoalImg3, ourGoalImg4 } from "../../../../../Assets/Index";
import { useTranslation } from "react-i18next";

function OurGoal() {
  const { t } = useTranslation("translation");

  return (
    <div className="our_goal container">
      <div className="our_goal_title">
        <img src={aboutusIcon} alt="icon" />
        <h1>
          {t("home.ourgoal.h1")} <span>{t("home.ourgoal.span")}</span>
        </h1>
      </div>
      <div className="our_goal_content">
        <div className="left">
          <p>{t("home.ourgoal.p")} </p>
        </div>
        <div className="right">
          <div className="item">
            <div>
              <span>01</span>
              <li>{t("home.ourgoal.ul.1")}</li>
            </div>
            <img src={ourGoalImg1} alt="1" />
          </div>

          <div className="item">
            <div>
              <span>02</span>
              <li>{t("home.ourgoal.ul.2")}</li>
            </div>
            <img src={ourGoalImg2} alt="2" />
          </div>

          <div className="item">
            <div>
              <span>03</span>
              <li>{t("home.ourgoal.ul.3")}</li>
            </div>
            <img src={ourGoalImg3} alt="3" />
          </div>

          <div className="item">
            <div>
              <span>04</span>
              <li>{t("home.ourgoal.ul.4")}</li>
            </div>
            <img src={ourGoalImg4} alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGoal;
