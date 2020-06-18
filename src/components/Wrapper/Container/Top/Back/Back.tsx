import "./index.scss";

import React, { FC } from "react";
import { BsChevronLeft } from "react-icons/bs";

interface Props {
  classes?: string;
}

const Back: FC<Props> = ({ classes }) => {
  return (
    <div className={`back ${classes}`}>
      <BsChevronLeft />
      Back
    </div>
  );
};

export default Back;
