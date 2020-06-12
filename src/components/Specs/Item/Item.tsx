import React, { FC } from "react";

interface Props {
  name: string;
  value: string | number;
}

const Item: FC<Props> = ({ name, value }) => {
  return (
    <li className={`specs__item`}>
      <p className={`specs__item-key`}>{name}</p>
      <p className={`specs__item-value`}>{value}</p>
    </li>
  );
};

export default Item;
