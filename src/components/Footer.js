import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";
import dribbble from "assets/images/SVG/dribbble.svg";
import insta from "assets/images/SVG/instagram.svg";

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
        <p>
          Made by {data.site.siteMetadata.author} with Gatsby. {"\n"} Typeset in
          Space Mono. {"\n"} Hosted on Hithub Pages.
        </p>
        {/* <p>Typeset in Space Mono.</p>
        <p>Hosted with Github Pages.</p> */}
        <div className="footer__icons">
          <a
            href="https://www.linkedin.com/in/arslaanamar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${linked.id}`} />
            </svg>
          </a>

          <a
            href="https://github.com/a2zarslaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>

          <a
            href="https://dribbble.com/arslaanamar/shots"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${dribbble.id}`} />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/arslaanamar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="footer__icons-item">
              <use xlinkHref={`#${insta.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
