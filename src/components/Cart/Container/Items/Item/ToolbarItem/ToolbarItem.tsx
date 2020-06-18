import "./index.scss";

import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  isButton?: boolean;
  isDisabled?: boolean;
}

const ToolbarItem: FC<Props> = ({ children, isButton, isDisabled }) => {
  const ToolbarItemClass = classNames({
    "toolbar-item": true,
    "toolbar-item__button": isButton,
    "toolbar-item__button--disabled": isDisabled,
  });

  return <div className={ToolbarItemClass}>{children}</div>;
};

export default ToolbarItem;
