import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/cover.png";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="cover">
          <img src={img_gatsby} alt="Amar Zia Arslaan Being Artsy" />
        </p>
        <h1 className="heading">Hello! I'm Amar</h1>
        <p>
          Welcome to my site. Its a living digital space where I've gathered my
          work, ideas, hobbies, goals, and passions.
        </p>

        {/* <p>Run the following in your terminal!</p>
        <pre>
          <code>
            gatsby new [directory]
            https://github.com/colbyfayock/gatsby-starter-sass
          </code>
        </pre> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
