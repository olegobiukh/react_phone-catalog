import "./index.scss";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import classNames from "classnames";

interface Props {
  classes?: string;
}

const ItemToolbar: FC<Props> = ({ classes }) => {
  const specsClass = classNames({
    item__toolbar: true,
    "item__toolbar--options": classes === "options",
  });

  return (
    <div className={specsClass}>
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
