import React from "react";
import { CareerHeaderback } from "../../../../Assets/Index";
import Header from "../../../../Components/Header/Header";
import Main from "./Components/Main";

function Career() {
  return (
    <div>
      <Header title={"careerpage"} img={CareerHeaderback} />
      <Main/>
    </div>
  );
}

export default Career;
