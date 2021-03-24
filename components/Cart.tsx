import React from "react";
import type { Item } from "../utils/types";

type CartProps = {
  items: Item[];
  onClear(): void;
};
function Cart({ items, onClear }: CartProps) {
  const totalPrice = items.reduce<number>((prev, item) => prev + item.price, 0);

  return (
    <div>
      <div>{items.length} items</div>
      <div>${totalPrice.toFixed(2)}</div>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Cart;
