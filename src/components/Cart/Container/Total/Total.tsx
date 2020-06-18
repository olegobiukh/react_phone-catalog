import "./index.scss";

import React from "react";
import ButtonBlack from "../../../common/ButtonBlack";

const Total = () => {
  return (
    <div className={`cart-total`}>
      <div className="cart-total__content">
        <p className={`cart-total__price`}>$3297</p>
        <p className={`cart-total__text`}>Total for 3 items</p>
      </div>
      <ButtonBlack text="Checkout" />
    </div>
  );
};

export default Total;
