import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import ProjectComp from "components/ProjectComp";

const ProjectsPage = () => {
  return (
    <Layout pageName="projects">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Container>
        <h1>Projects</h1>
        <ProjectComp name="Amar Arslaan" />
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
