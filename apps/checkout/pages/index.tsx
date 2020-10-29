import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Title } from "@mono/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title color="blue">Checkout</Title>
      </main>
    </div>
  );
}
