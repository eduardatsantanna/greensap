import React, { useEffect, useState } from "react";
import { Project} from './';
import { Row, Col } from "react-bootstrap";
import { SumaryCard, AddProjectCard } from "./";
import { dashboardService } from "@/services";

export const Sumary = (props) => {
  const [projects, setProjects] = useState([]);
  const { user } = props;

  useEffect(() => {
    dashboardService.getProjectAnalytics(user.type, user.id)
      .then(analytics => setProjects(analytics));
  }, [props.user]);

  return (
    <Row >
      {projects.map(project => (
        <Col sm={12} md={4} lg={3} key={project.id} className="mt-3">
          <SumaryCard type={user.type} isDashboard={props.isDashboard} project={project} v1={10000} v2={30000} v3={5000} v4={12000} />
        </Col>
      ))}
      {props.isDashboard && user.type === 'nonprofit' && (
        <Col sm={12} md={4} lg={3} className="mt-3">
          <AddProjectCard/>
        </Col>
      )}
    </Row>
  );
}

