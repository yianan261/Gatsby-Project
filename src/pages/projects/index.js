import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import PropTypes from "prop-types";

function Projects({ data }) {
  console.log("projects data", data);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h2>Projects and websites I created</h2>
        <div className={styles.projects}>
          {/* map projects */}
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

Projects.propTypes = {
  data: PropTypes.any,
};

export default Projects;

//export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
        id
      }
    }
  }
`;
