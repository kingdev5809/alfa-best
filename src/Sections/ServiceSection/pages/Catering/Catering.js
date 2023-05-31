import React from "react";
import ServiceCards from "../../Components/ServiceCards/ServiceCards";
import Partners from "../../../../Components/Partners/Partners";
import Advantages from "../../../../Components/Advantages/Advantages";
import PhotoGallery from "../../../../Components/PhotoGallery/PhotoGallery";
import Header from "../../../../Components/Header/Header";
import {
  cateringBack,
  engineringCard1,
  householdBack,
  householdCard1,
  householdCard2,
  householdCard3,
  householdCard4,
  householdCard5,
  householdCard6,
  householdCard7,
  householdCard8,
} from "../../../../Assets/Index";

function Catering() {
  const cardsData = [
    { img: householdCard1, name: "householdPage.cards.card1" },
    { img: householdCard2, name: "householdPage.cards.card2" },
    { img: householdCard3, name: "householdPage.cards.card3" },
    { img: householdCard4, name: "householdPage.cards.card4" },
    { img: householdCard5, name: "householdPage.cards.card5" },
    { img: householdCard6, name: "householdPage.cards.card6" },
    { img: householdCard7, name: "householdPage.cards.card7" },
    { img: householdCard8, name: "householdPage.cards.card8" },
    { img: engineringCard1, name: "householdPage.cards.card9" },
  ];

  const advantagesData = [
    { name: "householdPage.advantages.cards.card1" },
    { name: "householdPage.advantages.cards.card2" },
    { name: "householdPage.advantages.cards.card3" },
    { name: "householdPage.advantages.cards.card4" },
    { name: "householdPage.advantages.cards.card5" },
    { name: "householdPage.advantages.cards.card6" },
    { name: "householdPage.advantages.cards.card7" },
    { name: "householdPage.advantages.cards.card8" },
  ];
  return (
    <div>
      <Header title={"cateringPage"} img={cateringBack} />
      <ServiceCards cardsData={cardsData} page={"engineeringPage"} />
      <Partners page={"engineeringPage"} />
      <Advantages page={"engineeringPage"} data={advantagesData} />
      <PhotoGallery />
    </div>
  );
}

export default Catering;
