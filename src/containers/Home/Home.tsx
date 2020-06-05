import "./index.scss";

import React from "react";
import Slideshow from "../../components/Home/Slideshow";
import ProductSlideshow from "../../components/Home/ProductSlideshow";

const Home = () => {
  return (
    <div className={`home`}>
      home
      <Slideshow />
      <ProductSlideshow />
    </div>
  );
};

export default Home;
