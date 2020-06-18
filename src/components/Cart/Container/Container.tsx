import "./index.scss";

import React from "react";
import Total from "./Total";
import Items from "./Items";

const Cart = () => {
  return (
    <section className={`cart__container`}>
      <Items />
      <Total />
    </section>
  );
};

export default Cart;
