import "./index.scss";

import React from "react";
import Container from "../../components/Catalog/Container";
import Breadcrumbs from "../../components/Catalog/Breadcrumbs";
import Top from "../../components/Catalog/Top";

const Catalog = () => {
  return (
    <div className="catalog">
      <Breadcrumbs />
      <Top />
      <Container />
    </div>
  );
};

export default Catalog;
