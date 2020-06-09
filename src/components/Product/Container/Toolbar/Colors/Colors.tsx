import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

const Colors = () => {
  const colors = ["#FCDBC1", "#5F7170", "#4C4C4C", "#F0F0F0"];
  const [chosenColor, setChosenColor] = useState<string>(colors[0]);

  const newItems = colors.map((item) => (
    <div
      className={`colors__item-wrapper ${
        chosenColor === item && "colors__item-wrapper--active"
      }`}
      key={uid()}
      onClick={() => setChosenColor(item)}
    >
      <div className={`colors__item`} style={{ backgroundColor: item }} />
    </div>
  ));

  return <div className={`colors`}>{newItems}</div>;
};

export default Colors;
