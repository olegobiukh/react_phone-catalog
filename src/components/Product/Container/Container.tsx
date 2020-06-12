import "./index.scss";

import React from "react";
import Gallery from "./Gallery";
import About from "./About";
import Tech from "./Tech";
import Options from "./Options";

const Container = () => {
  return (
    <main className={`product-container`}>
      <Gallery />
      <Options />
      <About />
      <Tech />
    </main>
  );
};

export default Container;
