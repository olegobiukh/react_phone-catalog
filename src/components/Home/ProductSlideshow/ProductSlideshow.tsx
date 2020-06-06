import "./index.scss";

import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Item from "../../Item";
import uid from "uid";
import Arrow from "../../Arrow";

interface Props {
  title: string;
}

const ProductSlideshow: FC<Props> = ({ title }) => {
  const [currentSlide, manageSlides] = useState<number>(0);
  const items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const renderedItems = items.map(() => <Item key={uid()} />);

  return (
    <section className="product-slideshow">
      <div className="product-slideshow__top">
        <h1 className={`product-slideshow__title`}>{title}</h1>
        <div className="product-slideshow__toolbar">
          <Arrow
            isDisabled={currentSlide === 0}
            icon={<BsChevronLeft />}
            handleClick={() => manageSlides(currentSlide - 1)}
          />
          <Arrow
            isDisabled={currentSlide === items.length - 1}
            icon={<BsChevronRight />}
            handleClick={() => manageSlides(currentSlide + 1)}
          />
        </div>
      </div>
      <div className="product-slideshow__container">
        <div
          className="product-slideshow__container-wrapper"
          style={{ transform: `translateX(${currentSlide * (-272 - 16)}px` }}
        >
          {renderedItems}
        </div>
      </div>
    </section>
  );
};

export default ProductSlideshow;
