import React from "react";
import { useHistory } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { useWidth } from "@/hooks";

export const AddProjectCard = ({ onToggle }) => {
    const history = useHistory();
    const bodyWidth = useWidth();

    const onRedirect = () => history.push(`/project`);

    return (
        <div>
            <Card className="summary-card">
                <Card.Img className="summary-image" variant="top" src={`${process.env.PUBLIC_URL}/assets/ngo-project-1.jpeg`} />
                <Card.ImgOverlay className={bodyWidth < 768 ? "px-3 py-1 image-overlay" : "image-overlay"} >
                    <Card.Title className="m-0 h-100 d-flex justify-content-around align-items-center">
                        <p className="mt-2">Add Project</p>
                    </Card.Title>
                </Card.ImgOverlay>

                <Card.Body className="py-auto px-1 card-body d-flex justify-content-center align-content-center">
                    <button className="btn btn-success m-auto" onClick={onRedirect}>+</button>
                </Card.Body>
            </Card>
        </div>
    )
}
