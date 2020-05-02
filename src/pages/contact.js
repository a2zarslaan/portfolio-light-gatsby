import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const ContactPage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <h1>contact</h1>
        <p>Welcome to contact page</p>
      </Container>
    </Layout>
  );
};

export default ContactPage;
