import "@/scss/project/index.scss";
import { useState, useEffect } from 'react';
import { useQuery } from "@/hooks";
import { LoadContent } from "@/pages/general";
import { ProjectForm } from './';

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
        <ProjectForm project={project}/>
      </main>
    </LoadContent>
  );
};