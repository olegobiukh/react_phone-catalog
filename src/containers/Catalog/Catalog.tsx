import "./index.scss";

import React from "react";
import WrapperContainer from "../../components/Wrapper/Container";
import Container from "../../components/Catalog/Container";

const Catalog = () => {
  const title = "Mobile phones";
  return (
    <WrapperContainer classes={"catalog"} title={title} quantity={39}>
      <Container />
    </WrapperContainer>
  );
};

export default Catalog;
