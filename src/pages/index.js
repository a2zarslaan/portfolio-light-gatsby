import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

// import img_gatsby from "assets/images/gatsby-astronaut.png";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        {/* <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p> */}
        <h1>Hello! I'm Amar</h1>
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
