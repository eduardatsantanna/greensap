import "@/scss/project/index.scss";
import { useState, useEffect } from 'react';
import { LoadContent } from "@/pages/general";
import { ProjectForm } from './';
import { Container, Card, } from 'react-bootstrap';
import { useQuery } from "@/hooks";

export const Project = (props) => {
  const id = useQuery("id");
  const [project, setProject] = useState(false);

  useEffect(() => {
    if (id) {
      setProject(true);
    } else {
      setProject(false);
    }
  }, [id]);

  return (
    <LoadContent>
      <main id="project">
        <Container as="main" fluid="md">
          <ProjectForm project={project}/>
        </Container>
      </main>
    </LoadContent>
  );
};