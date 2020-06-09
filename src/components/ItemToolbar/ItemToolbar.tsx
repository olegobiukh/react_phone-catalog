import "./index.scss";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ItemToolbar = () => {
  return (
    <div className="item__toolbar">
      <button type="button" className={`item__button`}>
        Add to cart
      </button>
      <button type="button" className={`item__button-heart`}>
        <AiOutlineHeart size={20} />
      </button>
    </div>
  );
};

export default ItemToolbar;
