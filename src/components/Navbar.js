import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

function Navbar() {
  //using useStaticQuery hook to get data from graphql for components
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //destructure title
  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
