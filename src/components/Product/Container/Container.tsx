import "./index.scss";

import React, { FC } from "react";
import Gallery from "./Gallery";
import Toolbar from "./Toolbar";
import ItemToolbar from "../../ItemToolbar";

interface Props {
  title: string;
}

const Container: FC<Props> = ({ title }) => {

  return (
    <main className={`product`}>
      <h1 className={`product__title`}>{title}</h1>
      <Gallery />
      <Toolbar />
      <ItemToolbar />
    </main>
  );
};

export default Container;
