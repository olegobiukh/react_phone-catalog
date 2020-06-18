import "./index.scss";

import React, { FC } from "react";
import classNames from "classnames";
import Back from "./Back";

interface Props {
  title?: string;
  quantity?: number;
  classes?: string;
}

const Top: FC<Props> = ({ title, quantity, classes }) => {
  const TitleClass = classNames({
    "wrapper-top__title": true,
    "wrapper-top__title--mt16": classes === "product" || classes === "cart",
  });

  const quantityWord: false | "models" | "times" =
    classes === "catalog"
      ? "models"
      : classes === "favourites"
      ? "times"
      : false;

  return (
    <div className={`wrapper-top`}>
      {classes && ["product", "cart"].includes(classes) && <Back />}
      <h1 className={TitleClass}>{title}</h1>
      {quantity && (
        <p className="wrapper-top__subtitle">
          {quantity} {quantityWord}
        </p>
      )}
    </div>
  );
};

export default Top;
