import React from "react";
import Helmet from "react-helmet";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "components/Layout";
import Container from "components/Container";
import ProjectComp from "components/ProjectComp";

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageName="projects">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Container>
        <h1 className="project-title">Projects</h1>
        {/* <ProjectComp
          title={data.allMarkdownRemark.edges.node.frontmatter.title}
          date={data.allMarkdownRemark.edges.node.frontmatter.date}
          html={data.allMarkdownRemark.edges.node.html}
        /> */}

        <ol className="list">
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className="list__element">
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
