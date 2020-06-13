import "./index.scss";

import React from "react";
import ItemToolbar from "../../../ItemToolbar";
import Specs from "../../../Specs";
import PriceSale from "../../../PriceSale";
import Toolbar from "../Toolbar";

const Options = () => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    Processor: "Apple A12 Bionic",
    RAM: "3 GB",
  };

  return (
    <div className={`product-options`}>
      <div className={`product-options__left`}>
        <Toolbar />
        <PriceSale price={1199} sale={100} classes={"options"} />
        <ItemToolbar classes="options" />
        <Specs items={specs} classes="options" />
      </div>
      <span className={`product-options__id`}>ID: 802390</span>
    </div>
  );
};

export default Options;
