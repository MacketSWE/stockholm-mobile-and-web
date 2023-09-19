import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Title } from "../components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stockholm Mobile & Web</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title />
        </div>
      </div>
    </>
  );
};

export default Home;
