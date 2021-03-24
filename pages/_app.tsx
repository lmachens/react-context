import type { AppProps } from "next/app";
import { useState } from "react";
import Cart from "../components/Cart";
import "../styles/globals.css";
import { Item } from "../utils/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <header>
        <Cart items={items} onClear={() => setItems([])} />
      </header>
      <Component
        onItemAdd={(item: Item) => setItems((items) => [...items, item])}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
