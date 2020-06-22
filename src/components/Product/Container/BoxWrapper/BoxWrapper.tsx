import "./index.scss";

import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface Props {
  title: string;
  type?: string;
  children: ReactNode;
}

const BoxWrapper: FC<Props> = ({ children, title, type }) => {
  const ProductBlockWrapperClass = classNames({
    "product-block__wrapper": true,
    "product-block__wrapper--tech": type === "tech",
    "product-block__wrapper--about": type === "about",
  });

  return (
    <div className={ProductBlockWrapperClass}>
      <h2 className={`product-block__title`}>{title}</h2>
      {children}
    </div>
  );
};

export default BoxWrapper;
