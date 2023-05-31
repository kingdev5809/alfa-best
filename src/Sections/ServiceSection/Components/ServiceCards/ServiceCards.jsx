import React from "react";
import "./ServiceCards.scss";
import { useTranslation } from "react-i18next";

function ServiceCards({ cardsData, page }) {
  const { t } = useTranslation();
  return (
    <div className="service_cards container">
      <div className="service_cards_title">
        <h1>{t(`${page}.cards.h1`)}</h1>
        <p>{t(`${page}.cards.p`)}</p>
      </div>
      <div className="service_cards_content">
        {cardsData.map((card) => (
          <div className="service_cards_content_item">
            <img src={card.img} alt="" />
            <p>{t(card.name)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
