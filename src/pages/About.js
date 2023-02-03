import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";

function About() {
  return (
    <Layout>
      <div>
        <h1 className="aboutTitle">About Page</h1>
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

export default About;
