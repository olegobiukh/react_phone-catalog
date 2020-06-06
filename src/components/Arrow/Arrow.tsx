import "./index.scss";

import React, {FC, ReactNode} from "react";

interface Props {
  icon: ReactNode;
  isDisabled?: boolean;
  handleClick: () => void
}


const Arrow:FC<Props> = ({isDisabled, handleClick, icon}) => {
  return (
    <div
      className={`arrow ${
        isDisabled && "arrow--disabled"
      }`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};

export default Arrow;
