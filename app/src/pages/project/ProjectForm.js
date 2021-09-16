import { useState } from "react";
import { Card, Form, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

export const ProjectForm = (props) => {
  const [update, setUpdate] = useState({ loading: false, error: null });
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coordenates, setCoordenates] = useState([{lat: 0, lon: 0}])
  const [cost, setCost] = useState('');
  const [target, setTarget] = useState('');
  const [picture, setPicture] = useState('');

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
    <Card className="form-container">
      <Card.Title className="form-title">{props.project ? 'Edit Project' : 'Add Project'}</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Project Name</Form.Label>
            <Form.Control size="sm" value={name} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Description</Form.Label>
            <Form.Control size="sm" as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
          </Form.Group>
          {/* <Row>
            <Col xs={8} sm={10}>Coordinates</Col>
            <Col xs={4} sm={2} style={{display: 'flex', justifyContent: 'flex-end'}}>
              <div className="btn btn-light" onClick={onAddCoordenates}>
                <FontAwesomeIcon icon={faPlusCircle} className="icon text-success" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <Form.Label>Longitude</Form.Label>
            </Col>
            <Col xs={5}>
              <Form.Label>Latitude</Form.Label>
            </Col>
            <Col xs={2}></Col>
          </Row>
          {coordenates.map((item, pos) => (
            <Row key={pos}>
              <Form.Group as={Col} xs={4} sm={5}>
                    <Form.Control size="sm" type="number" value={item.lon} onChange={e => onUpdateCoordenates(pos, {lon: e.target.value, lat: item.lat})} />
                </Form.Group >
                <Form.Group as={Col} xs={4} sm={5}>
                    <Form.Control size="sm" type="number" value={item.lat} onChange={e => onUpdateCoordenates(pos, {lon: item.lon, lat: e.target.value})} />
                </Form.Group >
                <Form.Group as={Col} xs={4} sm={2} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className="btn btn-light" onClick={e => onDeleteCoordenates(pos)}>
                        <FontAwesomeIcon icon={faTrashAlt} className="icon text-danger " />
                    </div>
                </Form.Group >
            </Row>
          ))} */}
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Coordinates (CSV Format)</Form.Label>
            <Form.File
              id="custom-file-translate-scss"
              label=""
              lang="en"
              custom
            />
          </Form.Group>
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
      </Card.Body>
      <Card.Footer>
        <div className="d-grid gap-2">
          <button className={`btn btn-success w-100`}>Save</button>
        </div>
      </Card.Footer>
    </Card>
  );
}