import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Design</h1>
          <h2>Develop and Deploy</h2>
          <p>UX designer & web developer </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  );
}
