import "./index.scss";

import React from "react";
import Breadcrumbs from "../../components/Catalog/Breadcrumbs";
import Back from "../../components/Back";
import Container from "../../components/Product/Container";
import ProductSlideshow from "../../components/Home/ProductSlideshow";

const Product = () => {
  const title = "Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)";
  return (
    <div className={`product`}>
      <Breadcrumbs product={title} />
      <Back classes={`product__back`} />
      <h1 className={`product__title`}>{title}</h1>
      <Container />
      <ProductSlideshow title="You may also like" />
    </div>
  );
};

export default Product;
