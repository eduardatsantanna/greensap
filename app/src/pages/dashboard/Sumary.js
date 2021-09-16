import React, { useEffect, useState } from "react";
// import { useTransition, animated } from 'react-spring';
import { Project} from './';
import { Row, Col } from "react-bootstrap";
import { SumaryCard, AddProjectCard } from "./";
import { projectsService } from "@/services";

export const Sumary = (props) => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let response;
    if (props.type === "user") {
      response = projectsService.getUserInvestedProjects(props.ID);
    } else {
      response = projectsService.getNGOInvestedProjects(props.ID); 
    }
    response.then(data => setProjects(data));
  }, [props.type]);

  const onToggle = () => setShowModal(!showModal);

  const projectsComponents = projects && projects.map(element => (
    <Col sm={12} md={4} lg={3} key={element.ID} className="mt-3">
      <SumaryCard user ={props.type} {...element} onToggle={onToggle} v1={10000} v2={30000} v3={5000} v4={12000} />
    </Col>
  ));

  if (props.type === "user") {
    return (
      <Row>
        {projectsComponents}
        <Project show={showModal}/>
      </Row>
    );
  }

  return (
    <Row >
      {projectsComponents}
      <Col sm={12} md={4} lg={3} className="mt-3">
        <AddProjectCard onToggle={onToggle} />
      </Col>
      {showModal ? <Project show={showModal} onToggle={onToggle}/> : null }
    </Row>
  );
}

