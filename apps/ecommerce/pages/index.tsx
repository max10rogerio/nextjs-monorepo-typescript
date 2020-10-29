import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Title } from "@b2b/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title color="red">dsadsa</Title>
      </main>
    </div>
  );
}
