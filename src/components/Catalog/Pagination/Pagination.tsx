import "./index.scss";

import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Arrow from "../../Arrow";

const Pagination = () => {
  return (
    <div className={`pagination`}>
      <Arrow
        isDisabled={false}
        icon={<BsChevronLeft />}
        handleClick={() => {}}
      />

      <div className={`pagination__numbers`}>
        <div className={`pagination__item`}>1</div>
        <div className={`pagination__item`}>2</div>
        <div
          className={`pagination__item ${true && "pagination__item--active"}`}
        >
          3
        </div>
        <div className={`pagination__item`}>4</div>
        <div className={`pagination__item`}>5</div>
      </div>
      <Arrow
        isDisabled={false}
        icon={<BsChevronRight />}
        handleClick={() => {}}
      />
    </div>
  );
};

export default Pagination;
