import { createContext, ReactNode, useState } from "react";
import type { Item } from "../utils/types";

type CartContextType = {
  items: Item[];
  onClear(): void;
  onItemAdd(item: Item): void;
};
export const CartContext = createContext<CartContextType>(null);

type CartContextProviderProps = {
  children: ReactNode;
};
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Item[]>([]);

  function onClear() {
    setItems([]);
  }

  function onItemAdd(item: Item) {
    setItems((items) => [...items, item]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        onClear,
        onItemAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
