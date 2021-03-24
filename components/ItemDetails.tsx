import React from "react";
import { Item } from "../utils/types";

type ItemDetailsProps = {
  item: Item;
  onAdd(): void;
};
function ItemDetails({ item, onAdd }: ItemDetailsProps) {
  return (
    <>
      {item.name} <b>${item.price}</b>
      <button onClick={onAdd}>Add to cart</button>
    </>
  );
}

export default ItemDetails;
