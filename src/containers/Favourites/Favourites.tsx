import "./index.scss";

import React from "react";
import WrapperContainer from "../../components/Wrapper/Container";
import Items from "../../components/common/Items";

const Favourites = () => {
  const title = "Favourites";
  return (
    <WrapperContainer title={title} classes={`favourites`} quantity={5}>
      <Items classes={`favourites`} />
    </WrapperContainer>
  );
};

export default Favourites;
