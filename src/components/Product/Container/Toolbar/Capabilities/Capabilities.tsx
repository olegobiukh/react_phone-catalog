import "./index.scss";

import React, { useState } from "react";
import uid from "uid";

const Capabilities = () => {
  const capabilities = [64, 256, 512];
  const [chosenCapability, setChosenCapability] = useState<number>(
    capabilities[0]
  );

  const newItems = capabilities.map((item) => (
    <button
      className={`capabilities__item ${
        chosenCapability === item && "capabilities__item--active"
      }`}
      key={uid()}
      onClick={() => setChosenCapability(item)}
    >
      {item}gb
    </button>
  ));

  return <div className={`capabilities`}>{newItems}</div>;
};

export default Capabilities;
