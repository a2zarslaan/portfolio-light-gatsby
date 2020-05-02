import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
