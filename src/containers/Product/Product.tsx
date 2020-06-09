import "./index.scss";

import React from "react";
import Breadcrumbs from "../../components/Catalog/Breadcrumbs";
import Back from "../../components/Back";
import Container from "../../components/Product/Container";

const Product = () => {
  const title = "Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)";
  return (
    <div className={`product`}>
      <Breadcrumbs product={title} />
      <Back classes={`product__back`} />
      <Container title={title} />
    </div>
  );
};

export default Product;
