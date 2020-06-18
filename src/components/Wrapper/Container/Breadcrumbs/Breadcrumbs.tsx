import "./index.scss";

import React, { FC } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";

interface Props {
  product?: string;
}

const Breadcrumbs: FC<Props> = ({ product }) => {
  return (
    <div className={`breadcrumbs`}>
      <AiOutlineHome />
      <div className="breadcrumbs__icon">
        <BsChevronLeft />
      </div>
      <span className="breadcrumbs__link">Phones</span>
      {product && (
        <>
          <div className="breadcrumbs__icon">
            <BsChevronLeft />
          </div>
          <span className="breadcrumbs__link">{product}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
