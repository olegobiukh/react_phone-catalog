import "./index.scss";

import React from "react";
import BoxWrapper from "../BoxWrapper";
import Specs from "../../../Specs";

const Tech = () => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    RAM: "4 GB",
  };

  return (
    <BoxWrapper title={"Tech specs"}>
      <div className="tech">
        <Specs items={specs} />
      </div>
    </BoxWrapper>
  );
};

export default Tech;
