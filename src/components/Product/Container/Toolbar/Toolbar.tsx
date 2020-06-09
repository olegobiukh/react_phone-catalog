import "./index.scss";

import React from "react";
import Colors from "./Colors";
import Wrapper from "./Wrapper";
import Capabilities from "./Capabilities";

const Toolbar = () => {
  return (
    <div className={`toolbar`}>
      <Wrapper title={"Available colors"}>
        <Colors />
      </Wrapper>
      <Wrapper title={"Select capacity"}>
        <Capabilities />
      </Wrapper>
    </div>
  );
};

export default Toolbar;
