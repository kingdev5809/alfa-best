import React from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import FactsCard from "./Components/FactsCard";
import OurGoal from "./Components/OurGoal";
import Partners from "../../../../Components/Partners/Partners";
import Story from "../../Components/Story";

function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <FactsCard />
      <OurGoal />
      <Partners page={'home'} />
      <Story />
    </div>
  );
}

export default Home;
