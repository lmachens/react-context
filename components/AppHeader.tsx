import React from "react";
import { Item } from "../utils/types";
import Cart from "./Cart";

type AppHeaderProps = {
  items: Item[];
  onItemsClear(): void;
};
function AppHeader({ items, onItemsClear }: AppHeaderProps) {
  return (
    <header>
      <h1>MyShopping24</h1>
      <Cart items={items} onClear={onItemsClear} />
    </header>
  );
}

export default AppHeader;
