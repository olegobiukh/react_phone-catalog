import "./index.scss";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  classToolbar?: string;
}

const ItemToolbar: FC<Props> = ({ classToolbar }) => {
  return (
    <div className={`item__toolbar ${classToolbar && classToolbar}`}>
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
