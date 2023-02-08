import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";

export default function Home({ data }) {
  console.log("Data", data);
  const { description, title } = data.site.siteMetadata;
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
        <p>
          {title} -{description}
        </p>
      </section>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.any,
};

//getting info from graphql
export const query = graphql`
  query SiteInfo {
    site {
      host
      port
      siteMetadata {
        description
        title
      }
    }
  }
`;
