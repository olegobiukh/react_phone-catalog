import "./index.scss";

import React from "react";
// import Breadcrumbs from "../../components/Wrapper/Container/Breadcrumbs";
// import Back from "../../components/Back";
import WrapperContainer from "../../components/Wrapper/Container";
import Container from "../../components/Product/Container";
import ProductSlideshow from "../../components/Home/ProductSlideshow";

const Product = () => {
  const title = "Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)";
  return (
    <WrapperContainer title={title} classes={`product`}>
      {/* <div className={`product`}> */}
      {/* <Breadcrumbs product={title} /> */}
      {/* <Back classes={`product__back`} /> */}
      {/* <h1 className={`product__title`}>{title}</h1> */}
      <Container />
      <ProductSlideshow title="You may also like" />
      {/* </div> */}
    </WrapperContainer>
  );
};

export default Product;
