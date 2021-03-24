import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import { fetcher } from "../utils/api";
import ItemCard from "../components/ItemCard";
import { Item } from "../utils/types";

export default function Home() {
  const { data: items, error } = useSWR<Item[]>("/api/items", fetcher);

  if (error) return <div>failed to load</div>;
  if (!items) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </main>
    </>
  );
}
