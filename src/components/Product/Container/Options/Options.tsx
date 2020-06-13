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
      <Toolbar />
      <PriceSale
        price={1199}
        sale={100}
        classes={'options'}
      />
      <ItemToolbar classToolbar={`product-options__toolbar`} />
      <Specs items={specs} classes='options' />
    </div>
  );
};

export default Options;
