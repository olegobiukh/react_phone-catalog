import "./index.scss";

import React from "react";
// import BoxWrapper from "../BoxWrapper";
import Specs from "../../../Specs";

const Tech = () => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    RAM: "4 GB",
  };

  return (
    // <BoxWrapper title={"Tech specs"} type="tech">
      <Specs items={specs} classes='tech' />
    // </BoxWrapper>
  );
};

export default Tech;
