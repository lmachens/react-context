import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "../utils/api";
import { useRouter } from "next/router";
import { Item } from "../utils/types";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ItemDetails from "../components/ItemDetails";

export default function ItemPage() {
  const router = useRouter();
  const { name } = router.query;

  const { data: item, error } = useSWR<Item>(`/api/items/${name}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!item) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ItemDetails item={item} />
        <Link href="/">
          <a>Back</a>
        </Link>
      </main>
    </>
  );
}
