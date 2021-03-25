import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Item } from "../utils/types";

type ItemDetailsProps = {
  item: Item;
};
function ItemDetails({ item }: ItemDetailsProps) {
  const { onItemAdd } = useContext(CartContext);

  return (
    <>
      {item.name} <b>${item.price}</b>
      <button onClick={() => onItemAdd(item)}>Add to cart</button>
    </>
  );
}

export default ItemDetails;
