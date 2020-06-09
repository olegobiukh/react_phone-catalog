import "./index.scss";
import React from "react";
import ItemToolbar from "../ItemToolbar";

const ItemImg = require("../../assets/images/item.png");

const Item = () => {
  return (
    <div className="item">
      <img src={ItemImg} alt="product" />
      <div className="item__box">
        <h2 className={`item__title`}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </h2>
        <p className={`item__pricing`}>
          <span className={`item__price`}>$799</span>
          <span className={`item__sale`}>$899</span>
        </p>
        <ul className={`item__characteristics`}>
          <li className={`item__line`}>
            <p className={`item__line-key`}>Screen</p>
            <p className={`item__line-value`}>5.8” OLED</p>
          </li>
          <li className={`item__line`}>
            <p className={`item__line-key`}>Capacity</p>
            <p className={`item__line-value`}>64 GB</p>
          </li>
          <li className={`item__line`}>
            <p className={`item__line-key`}>RAM</p>
            <p className={`item__line-value`}>4 GB</p>
          </li>
        </ul>
        <ItemToolbar />
      </div>
    </div>
  );
};

export default Item;
