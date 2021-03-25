import { createContext } from "react";
import type { Item } from "../utils/types";

type CartContextType = {
  items: Item[];
  onClear(): void;
};
export const CartContext = createContext<CartContextType>(null);
