import "./index.scss";

import React, { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const BoxWrapper: FC<Props> = ({ children, title }) => {
  return (
    <div className={`product-block__wrapper`}>
      <h2 className={`product-block__title`}>{title}</h2>
      {children}
    </div>
  );
};

export default BoxWrapper;
