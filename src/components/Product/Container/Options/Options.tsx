import "./index.scss";

import React, { FC } from "react";
import classNames from "classnames";
import ItemToolbar from "../../../ItemToolbar";
import Specs from "../../../Specs";
import PriceSale from "../../../PriceSale";
import Toolbar from "../Toolbar";

interface Props {
  isTabletHide?: boolean;
}

const Options: FC<Props> = ({ isTabletHide }) => {
  const specs = {
    screen: "5.8” OLED",
    capacity: "64 GB",
    Processor: "Apple A12 Bionic",
    RAM: "3 GB",
  };

  const optionsClass = classNames({
    "product-options": true,
    "product-options--tablet": isTabletHide,
  });

  return (
    <div className={optionsClass}>
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
