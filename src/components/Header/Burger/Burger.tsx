import "./index.scss";

import React from "react";

const Burger = () => {
  return (
    <div className="burger burger--active">
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
    </div>
  );
};

export default Burger;
