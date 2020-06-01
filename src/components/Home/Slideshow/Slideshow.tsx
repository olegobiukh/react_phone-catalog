import "./index.scss";

import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "./Button";
import uid from "uid";
const BannerImg = require("../../../assets/images/banner.png");

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const images: string[] = [BannerImg, BannerImg, BannerImg];

  const newImages = images.map((item) => (
    <div
      key={uid()}
      className={`slideshow__image`}
      style={{ backgroundImage: `url(${item})` }}
    />
  ));

  const pills = images.map((item?: string, index?: number) => (
    <div
      key={uid()}
      onClick={() => setActiveSlide(index)}
      className={`slideshow__toolbar-item ${
        activeSlide === index ? "slideshow__toolbar-item--active" : null
      }`}
    />
  ));

  return (
    <div className={`slideshow`}>
      <Button
        isDisables={activeSlide === 0}
        changeSlide={() => setActiveSlide(activeSlide - 1)}
        renderProp={<MdChevronLeft />}
      />
      <div className={`slideshow__wrapper`}>
        <div
          className={`slideshow__container`}
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${
              activeSlide === 0 ? 0 : (100 / images.length) * activeSlide
            }%)`,
          }}
        >
          {newImages}
        </div>
      </div>
      <Button
        isDisables={activeSlide === images.length - 1}
        changeSlide={() => setActiveSlide(activeSlide + 1)}
        renderProp={<MdChevronRight />}
      />
      <div className={`slideshow__toolbar`}>{pills}</div>
    </div>
  );
};

export default Slideshow;
