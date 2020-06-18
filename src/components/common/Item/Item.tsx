import "./index.scss";
import React from "react";
import ItemToolbar from "../../ItemToolbar";
import PriceSale from "../../PriceSale";
import Specs from "../../Specs";

const ItemImg = require("../../../assets/images/item.png");

const Item = () => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    RAM: "4 GB",
  };
  console.log();
  return (
    <div className="item">
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
