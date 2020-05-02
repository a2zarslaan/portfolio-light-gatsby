import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <h1>About</h1>
        <p>
          I strongly believe in the Japanese philosophy of work, also known as
          Kaizen, which means continuous improvement. This motivates me to
          invest all my free time in learning something new, honing my skills
          and improving personal efficiency. In design and development of
          products, I prioritise utility and minimalism. Having worked with
          diverse teams on several projects in the past, I consider myself a
          great team player who believes that individual action supported by a
          collaborative effort is the crux of great achievements. In my past
          projects I have strictly followed the most up to date industry
          practices and workflows.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
