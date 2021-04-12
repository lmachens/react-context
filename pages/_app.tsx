import type { AppProps } from "next/app";
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContext";
import "../styles/globals.css";
import { Item } from "../utils/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Item[]>([]);

  function onClear() {
    setItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        items,
        onClear,
      }}
    >
      <AppHeader>
        <Cart />
      </AppHeader>

      <Component
        onItemAdd={(item: Item) => setItems((items) => [...items, item])}
        {...pageProps}
      />
    </CartContext.Provider>
  );
}

export default MyApp;
