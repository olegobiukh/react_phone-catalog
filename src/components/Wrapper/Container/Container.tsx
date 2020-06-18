import "./index.scss";

import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import Breadcrumbs from "./Breadcrumbs";
import Top from "./Top";

interface Props {
  children: ReactNode;
  classes?: string;
  title?: string;
  quantity?: number;
}

const Container: FC<Props> = ({ children, classes, title, quantity }) => {
  const containerClass = classNames({
    container: true,
    "container--catalog": classes === "catalog",
  });

  return (
    <div className={containerClass}>
      {classes !== "cart" && <Breadcrumbs />}
      <Top title={title} quantity={quantity} classes={classes} />

      {children}
    </div>
  );
};

export default Container;
