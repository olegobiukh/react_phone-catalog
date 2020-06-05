import "./index.scss";

import React from "react";
import Item from "../../Item";

const ProductSlideshow = ({}) => {
  return (
    <section className="product-slideshow">
      <h1 className={`product-slideshow__title`}>hot products</h1>
      <div className="product-slideshow__container">
        <Item />
      </div>
    </section>
  );
};

export default ProductSlideshow;
