import "./index.scss";

import React, { FC } from "react";
import classNames from "classnames";

import ItemToolbar from "../../ItemToolbar";
import PriceSale from "../../PriceSale";
import Specs from "../../Specs";

const ItemImg = require("../../../assets/images/item.png");

interface Props {
  pathname?: string;
}

const Item: FC<Props> = ({ pathname }) => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    RAM: "4 GB",
  };

  const itemClass = classNames({
    item: true,
    "item--catalog": pathname === "catalog" || pathname === "favourites",
  });

  return (
    <div className={itemClass}>
      <img src={ItemImg} alt="product" />
      <div className="item__box">
        <h2 className={`item__title`}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </h2>
        <PriceSale price={899} sale={100} />
        <Specs items={specs} />
        <ItemToolbar />
      </div>
    </div>
  );
};

export default Item;
