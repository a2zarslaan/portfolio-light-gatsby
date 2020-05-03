import React from "react";
import { graphql } from "gatsby";

import Container from "components/Container";
import Layout from "components/Layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const ProjectComp = (props) => {
  return (
    <Layout>
      <Container>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </Container>
    </Layout>
  );
};

export default ProjectComp;
