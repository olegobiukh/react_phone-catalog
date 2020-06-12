import "./index.scss";
import React, { FC } from "react";

interface Props {
  price: number;
  sale: number;
  classPrice?: string;
  classSale?: string;
  classPricing?: string;
}

const PriceSale: FC<Props> = ({ price, sale, classPrice, classSale, classPricing }) => {
  return (
    <p className={`pricing ${classPricing && classPricing}`}>
      <span className={`pricing__price ${classPrice && classPrice}`}>
        ${price - sale}
      </span>
      <span className={`pricing__sale ${classSale && classSale}`}>
        ${price}
      </span>
    </p>
  );
};

export default PriceSale;
