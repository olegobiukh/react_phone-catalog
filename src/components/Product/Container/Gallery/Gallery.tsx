import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

const Img1 = require(`../../../../assets/images/product/1.png`);
const Img2 = require(`../../../../assets/images/product/2.png`);
const Img3 = require(`../../../../assets/images/product/3.png`);
const Img4 = require(`../../../../assets/images/product/4.png`);

const Gallery = () => {
  const images = [Img1, Img2, Img3, Img4, Img3];
  const [mainImg, setMainImg] = useState<string>(Img1);

  const newItems = images.map((item) => (
    <div
      key={uid()}
      className={`gallery__item ${mainImg === item && "gallery__item--active"}`}
      style={{ backgroundImage: `url(${item})` }}
      onClick={() => setMainImg(item)}
    />
  ));

  return (
    <div className={`gallery`}>
      <div className={`gallery__left`}>{newItems}</div>
      <img className={`gallery__main`} src={mainImg} alt={"phone"} />
    </div>
  );
};

export default Gallery;
