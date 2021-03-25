import React from "react";
import { useCartContext } from "../contexts/CartContext";

function Cart() {
  const { items, onClear } = useCartContext();

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
