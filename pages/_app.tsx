import type { AppProps } from "next/app";
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import "../styles/globals.css";
import { Item } from "../utils/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <AppHeader items={items} onItemsClear={() => setItems([])} />

      <Component
        onItemAdd={(item: Item) => setItems((items) => [...items, item])}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
