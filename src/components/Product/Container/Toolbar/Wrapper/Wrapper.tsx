import "./index.scss";

import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const Wrapper: FC<Props> = ({ children, title }) => {
  return (
    <div className={`product-left__wrapper`}>
      <h3 className={`product-left__wrapper-title`}>{title}</h3>
      {children}
    </div>
  );
};

export default Wrapper;
