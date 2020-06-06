import "./index.scss";

import React from "react";
import uid from "uid";

const MobileImg = require("../../../assets/images/categories/1.png");
const TabletImg = require("../../../assets/images/categories/2.png");
const AccessoriesImg = require("../../../assets/images/categories/3.png");

const Categories = () => {
  const categories = [
    {
      title: "Mobile phones",
      image: MobileImg,
      quantity: 95,
      background: "#fcdbc1",
      size: "100%",
    },
    {
      title: "Tablets",
      image: TabletImg,
      quantity: 24,
      background: "#8d8d92",
      size: "100%",
    },
    {
      title: "Accessories",
      image: AccessoriesImg,
      quantity: 100,
      background: "#973D5F",
      size: "127%",
    },
  ];

  const newItems = categories.map((item) => (
    <article className="home-categories__item" key={uid()}>
      <div
        className="home-categories__image"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundColor: item.background,
          backgroundSize: item.size,
        }}
      />
      <h3 className="home-categories__item-title">{item.title}</h3>
      <p className="home-categories__subtitle">{item.quantity} models</p>
    </article>
  ));

  return (
    <section className="home-categories">
      <h1 className={`home-categories__title`}>Shop by category</h1>
      <div className="home-categories__container">{newItems}</div>
    </section>
  );
};

export default Categories;
