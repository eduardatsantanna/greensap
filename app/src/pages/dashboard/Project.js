import { Modal, Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons"


export const Project = ({ show, onToggle, project }) => {
    const [update, setUpdate] = useState({ loading: false, error: null });
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [coordenates, setCoordenates] = useState([{lat: 0, lon: 0}])
    const [cost, setCost] = useState('');
    const [target, setTarget] = useState('');
    const [picture, setPicture] = useState('');

    const updatingRegister = () => {
        setUpdate({
            ...update,
            loading: true
        });
    };

    const onAddCoordenates = () => {
        const newCoordenates = coordenates.concat([{ lat: 0, lon: 0 }]);
        setCoordenates(newCoordenates);
    };

    const onDeleteCoordenates = (pos) => {
        if (coordenates.length > 1) {
            const newCoordenates = coordenates.filter((coor, i) => pos !== i);
            setCoordenates(newCoordenates);
        }
    };

    const onUpdateCoordenates = (pos, newCoors) => {
        const newCoordenates = coordenates.map((coors, i) => {
            if (pos === i) {
                return Object.assign(coors, newCoors);
            }
            return coors;
        });
        setCoordenates(newCoordenates);
    };

    return (
        <Modal show={show} onHide={onToggle} centered>
            <Modal.Header closeButton>
                <Modal.Title>{project === null ? `Edit Project` : `New Project`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-2" size="sm">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control size="sm" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-2" size="sm">
                        <Form.Label>Description</Form.Label>
                        <Form.Control size="sm" as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Row>
                        <Col md={10}>Coordinates</Col>
                        <Col md={2}>
                            <div className="btn btn-light" onClick={onAddCoordenates}>
                                <FontAwesomeIcon icon={faPlusCircle} className="icon text-success" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Label>Longitude</Form.Label>
                        </Col>
                        <Col md={5}>
                            <Form.Label>Latitude</Form.Label>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    {coordenates.map((item, pos) => (
                        <Row key={pos}>
                            <Form.Group as={Col} md={5}>
                                <Form.Control size="sm" type="number" value={item.lon} onChange={e => onUpdateCoordenates(pos, {lon: e.target.value, lat: item.lat})} />
                            </Form.Group >
                            <Form.Group as={Col} md={5}>
                                <Form.Control size="sm" type="number" value={item.lat} onChange={e => onUpdateCoordenates(pos, {lon: item.lon, lat: e.target.value})} />
                            </Form.Group >
                            <Form.Group as={Col} md={2}>
                                <div className="btn btn-light" onClick={e => onDeleteCoordenates(pos)}>
                                    <FontAwesomeIcon icon={faTrashAlt} className="icon text-danger " />
                                </div>
                            </Form.Group >
                        </Row>
                    ))}
                    <Form.Group className="mb-2 row" size="sm">
                        <Col>
                            <Form.Label>Tree Cost</Form.Label>
                            <Form.Control size="sm" type="text" value={cost} onChange={e => setCost(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Target</Form.Label>
                            <Form.Control size="sm" type="text" value={target} onChange={e => setTarget(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-2" size="sm">
                        <Form.Label>Banner Picture</Form.Label>
                        <Form.File
                            id="custom-file-translate-scss"
                            label=""
                            lang="en"
                            custom
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="d-grid gap-2">
                    <button className={`btn ${!update.loading ? "btn-success" : "btn-light"} w-100`}>Save</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}