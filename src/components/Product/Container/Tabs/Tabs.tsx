import "./index.scss";

import React, { useState } from "react";
import Options from "../Options";
import About from "../About";
import Tech from "../Tech";
import uid from "uid";

const Tabs = () => {
  const [title, setTitle] = useState<string>("options");

  const data = {
    options: {
      screen: "5.8” OLED",
      capacity: "64 GB",
      RAM: "4 GB",
    },
    about: "",
    tech: "",
  };

  const pills = Object.keys(data).map((item) => (
    <li
      key={uid()}
      className={`tabs__pill ${title === item && "tabs__pill--active"}`}
      onClick={() => setTitle(item)}
    >
      {item}
    </li>
  ));

  return (
    <div className={`tabs`}>
      <ul className={`tabs__pills`}>{pills}</ul>
      <div className={`tabs__content`}>
        {title === "options" ? (
          <Options />
        ) : title === "about" ? (
          <About />
        ) : title === "tech" ? (
          <Tech />
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
