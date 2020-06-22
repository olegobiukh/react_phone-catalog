import "./index.scss";

import React from "react";
import Tabs from "./Tabs";
import BoxWrapper from "./BoxWrapper";
import Gallery from "./Gallery";
import About from "./About";
import Tech from "./Tech";
import Options from "./Options";

const Container = () => {
  return (
    <main className={`product-container`}>
      <Gallery />
      <Options isTabletHide />
      <BoxWrapper title={"About"} type={"about"}>
        <About />
      </BoxWrapper>
      <BoxWrapper title={"Tech specs"} type={"tech"}>
        <Tech />
      </BoxWrapper>

      <Tabs />
    </main>
  );
};

export default Container;
