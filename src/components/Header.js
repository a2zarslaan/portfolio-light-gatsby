import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Container from "components/Container";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);
  return (
    <header>
      <Container>
        <p>{data.site.siteMetadata.author}</p>
        <ul>
          <li>
            <AniLink cover to="/" duration={0.7}>
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/about/"
              bg="#da7cff"
              duration={0.7}
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink cover to="/projects/" bg="#fccd04" duration={0.7}>
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              direction="right"
              to="/contact/"
              bg="#17e9e0"
              duration={0.7}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
