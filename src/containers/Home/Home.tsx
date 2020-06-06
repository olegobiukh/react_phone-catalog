import "./index.scss";

import React from "react";
import Slideshow from "../../components/Home/Slideshow";
import ProductSlideshow from "../../components/Home/ProductSlideshow";
import Categories from "../../components/Home/Categories";

const Home = () => {
  return (
    <div className={`home`}>
      <Slideshow />
      <ProductSlideshow title="Hot prices" />
      <Categories />
      <ProductSlideshow title="Brand new models" />
    </div>
  );
};

export default Home;
