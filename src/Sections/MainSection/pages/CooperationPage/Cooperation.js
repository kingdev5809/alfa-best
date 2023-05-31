import React from "react";
import Header from "../../../../Components/Header/Header";
import { CooperationBack } from "../../../../Assets/Index";
import Advantages from "../../../../Components/Advantages/Advantages";
import Contact from "./Components/Contact";

function Cooperation() {
  const advantagesData = [
    { name: "engineeringPage.advantages.cards.card1" },
    { name: "engineeringPage.advantages.cards.card2" },
    { name: "engineeringPage.advantages.cards.card3" },
    { name: "engineeringPage.advantages.cards.card4" },
  ];
  return (
    <div>
      <Header title={"cooperationPage"} img={CooperationBack} />
      <Advantages page={"cooperationPage"} data={advantagesData} />
      <Contact />
    </div>
  );
}

export default Cooperation;
