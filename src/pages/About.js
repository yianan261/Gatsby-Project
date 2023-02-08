import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";
import PropTypes from "prop-types";

function About({ data }) {
  const { description, title } = data.site.siteMetadata;
  return (
    <Layout>
      <div>
        <h1 className="aboutTitle">About Page</h1>
        <br />
        <h2>Title: {title}</h2>
        <p>Description: {description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut quae
          vel qui natus voluptates, veniam aliquid inventore delectus saepe
          asperiores molestias ea suscipit perspiciatis temporibus
          necessitatibus. Laborum, tempore sit?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sapiente
          odio rem ducimus vitae. Dolore aspernatur adipisci quam quasi,
          nesciunt pariatur laudantium ut nisi vel consequatur labore suscipit
          accusantium sed.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          perferendis molestiae voluptates ipsum harum iusto modi blanditiis,
          voluptatibus eos dignissimos nesciunt repudiandae, hic provident
          maiores. Ipsam enim culpa quibusdam voluptate?
        </p>
      </div>
    </Layout>
  );
}

About.propTypes = {
  data: PropTypes.any,
};

export default About;

//get info from graphql
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
