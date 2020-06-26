import "./index.scss";
import React from "react";
import ToolbarItem from "./ToolbarItem";
import { BsPlus, BsDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
const ItemImg = require("../../../../../assets/images/cart/phone.png");

const Item = () => {
  return (
    <article className={`cart-item`}>
      <IoMdClose className={`cart-item__close`} />
      <img src={ItemImg} alt="phone" className={`cart-item__image`} />
      <h2 className={`cart-item__title`}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      <div className={`cart-item__toolbar`}>
        <ToolbarItem isButton isDisabled={1 === 1}>
          <BsDash />
        </ToolbarItem>
        <ToolbarItem>1</ToolbarItem>
        <ToolbarItem isButton isDisabled={false}>
          <BsPlus />
        </ToolbarItem>
      </div>
      <span className={`cart-item__price`}>$1099</span>
    </article>
  );
};

export default Item;
