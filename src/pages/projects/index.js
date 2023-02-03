import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";

function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h2>Projects and websites I created</h2>
      </div>
    </Layout>
  );
}

export default Projects;
