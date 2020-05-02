import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Container from "components/Container";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <Container>
        <p>Made by {data.site.siteMetadata.author} with Gatsby.</p>
        <p>Typeset in Space Mono.</p>
        <p>Hosted with Github Pages.</p>
      </Container>
    </footer>
  );
};

export default Footer;
