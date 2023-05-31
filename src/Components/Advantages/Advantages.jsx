import React from "react";
import { useTranslation } from "react-i18next";
import "./Advantages.scss";
import Card from "./Card/Card";
import data from "../../Service/i18next/translations/ru/translation.json";
import { CooperationImage, HeaderLogo } from "../../Assets/Index";
console.log();
function Advantages({ data, page }) {
  const { t } = useTranslation();
  return (
    <div className="advantages container">
      <div className="advantages_title">
        <img src={HeaderLogo} alt="" />
        <h2>{t(`${page}.advantages.title`)}</h2>
      </div>
      <div className="advantages_cards">
        {data.map((item) => (
          <Card key={item} page={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Advantages;
