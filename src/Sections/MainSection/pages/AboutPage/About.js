import React from "react";
import Header from "../../../../Components/Header/Header";
import { aboutHeader } from "../../../../Assets/Index";
import OurMission from "./Components/OurMission";
import OurTeam from "./Components/OurTeam";
import Partners from "../../../../Components/Partners/Partners";
import PartnerCompany from "./Components/PartnerCompany";
import PhotoGallery from "../../../../Components/PhotoGallery/PhotoGallery";
import Story from "../../Components/Story";

function About() {
  return (
    <div className="about ">
      <Header title={"about"} img={aboutHeader} />
      <OurMission />
      <OurTeam />
      <Partners page={"about"} />
      <PartnerCompany />
      <PhotoGallery />
      <Story />
    </div>
  );
}

export default About;
