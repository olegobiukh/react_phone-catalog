import "./index.scss";

import React from "react";
import WrapperContainer from "../../components/Wrapper/Container";
import Container from "../../components/Cart/Container";

const Cart = () => {
  return (
    <WrapperContainer title={"Cart"} classes={`cart`}>
      <Container />
    </WrapperContainer>
  );
};

export default Cart;
