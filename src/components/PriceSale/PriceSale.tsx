import "./index.scss";
import React, { FC } from "react";
import classNames from "classnames";

interface Props {
  price: number;
  sale: number;
  classes?: string;
}

const PriceSale: FC<Props> = ({
  price,
  sale,
  classes,
}) => {
  const pricingClass = classNames({
    pricing: true,
    "pricing--options": classes === "options",
  });

  const priceClass = classNames({
    pricing__price: true,
    "pricing__price--options": classes === "options",
  });
  const saleClass = classNames({
    pricing__sale: true,
    "pricing__sale--options": classes === "options",
  });

  return (
    <p className={`pricing ${pricingClass}`}>
      <span className={priceClass}>
        ${price - sale}
      </span>
      <span className={saleClass}>
        ${price}
      </span>
    </p>
  );
};

export default PriceSale;
