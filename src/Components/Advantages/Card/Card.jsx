import React from "react";
import { CheckMarkImg } from "../../../Assets/Index";
import { useTranslation } from "react-i18next";
import "./Card.scss"
function Card({ page }) {
  const { t } = useTranslation();
  return (
    <div className="card">
      <img src={CheckMarkImg} alt="img" />
      <p>{t(page)}</p>
    </div>
  );
}

export default Card;
