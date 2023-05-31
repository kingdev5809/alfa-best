import React from "react";
import Header from "../../../../Components/Header/Header";
import {
  EngineeringBack,
  engineringCard1,
  engineringCard2,
  engineringCard3,
  engineringCard4,
  engineringCard5,
  engineringCard6,
} from "../../../../Assets/Index";
import ServiceCards from "../../Components/ServiceCards/ServiceCards";
import Partners from "../../../../Components/Partners/Partners";
import Advantages from "../../../../Components/Advantages/Advantages";
import PhotoGallery from "../../../../Components/PhotoGallery/PhotoGallery";
const cardsData = [
  { img: engineringCard1, name: "engineeringPage.cards.card1" },
  { img: engineringCard2, name: "engineeringPage.cards.card2" },
  { img: engineringCard3, name: "engineeringPage.cards.card3" },
  { img: engineringCard4, name: "engineeringPage.cards.card4" },
  { img: engineringCard5, name: "engineeringPage.cards.card5" },
  { img: engineringCard6, name: "engineeringPage.cards.card6" },
];
const advantagesData = [
  { name: "engineeringPage.advantages.cards.card1" },
  { name: "engineeringPage.advantages.cards.card2" },
  { name: "engineeringPage.advantages.cards.card3" },
  { name: "engineeringPage.advantages.cards.card4" },
  { name: "engineeringPage.advantages.cards.card5" },
  { name: "engineeringPage.advantages.cards.card6" },
  { name: "engineeringPage.advantages.cards.card7" },
  { name: "engineeringPage.advantages.cards.card8" },
];

function Engineering() {
  return (
    <div>
      <Header title={"engineeringPage"} img={EngineeringBack} />
      <ServiceCards cardsData={cardsData} page={"engineeringPage"} />
      <Partners page={"engineeringPage"} />
      <Advantages page={"engineeringPage"} data={advantagesData} />
      <PhotoGallery/>
    </div>
  );
}

export default Engineering;
