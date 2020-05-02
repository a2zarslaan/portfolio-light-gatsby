import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <p>My Gatsby Site</p>
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
