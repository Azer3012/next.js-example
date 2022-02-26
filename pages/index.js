import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Head from 'next/head'
import Link from "next/link";
const HomePage = () => {
  return (
    <>
    <Head>
      <title> Home Page</title>
      <meta name="keywords" content="Ninjas" />
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id
        molestiae eius dolor dolores sunt. Assumenda, delectus laudantium
        adipisci beatae debitis autem magnam quas illum aliquid eum eligendi
        repellendus explicabo!
      </p>

      <Link href="/ninjas">
        <a className={styles.btn}> Ninjas Listing</a>
      </Link>
    </div>
    </>
  );
};

export default HomePage;
