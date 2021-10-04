import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Alert, ProgressBar, Form, Col, Button } from 'react-bootstrap';
import XLSX from 'xlsx';
import { useForm } from 'react-hook-form';
import { dashboardService } from "@/services";

import rawContries from '@/json/Countries2.json';
import rawCurrencies from '@/json/Currencies.json';

export const ProjectForm = (props) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [fileLabel, setFileLabel] = useState('');
  const [boundaries, setBoundaries] = useState([]);
  const [progress, setProgress] = useState(0);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const countries = rawContries['countries'];
  const currencies = rawCurrencies['currencies'];

  const buttonState = (progress) => {
    if (progress === 0) {
      return 'Submit';
    } else if (progress === 10) {
      return 'Creating project...';
    } else if (progress === 33) {
      return 'Creating boundaries...';
    } else if (progress === 66) {
      return 'Creating costs...';
    } else {
      return 'Go Back';
    }
  };

  const processData = (data) => {
    try {
      if (error !== null) {
        setError(null);
      }
      const dataStringLines = data.split(/\r\n|\n/);
      const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      
      const boundaries = [];
      for (let i = 1; i < dataStringLines.length; i++) {
        const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        if (headers && row.length === headers.length) {
          const obj = {
            Index: parseInt(row[0]) ?? 0,
            Coordinate_Latitude: parseFloat(row[1]) ?? 0,
            Coordinate_Longitude: parseFloat(row[2]) ?? 0,
          };

          const idx = Object.values(obj).findIndex(val => isNaN(val));
          if (idx !== -1) {
            throw Error();
          } else {
            boundaries.push(obj);  
          }
        }
      }
  
      return boundaries;
    } catch (e) {
      setError('There was an error with your CSV file.');
      return [];
    }
  };

  const onSubmitCoordenates = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      const bstr = ev.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      setBoundaries(processData(data));
    };

    if (typeof file === 'object') {
      reader.readAsBinaryString(file);
      setFileLabel(file.name);
    }

  };

  const onSubmit = async (data) => {

    if (progress === 100) {
      return history.push('/dashboard');
    }

    if (error == null && boundaries.length > 0) {
      setProgress(10);
      const id = await dashboardService.createProject(data, boundaries);
      setProgress(33);

      await dashboardService.createBoundaries(id, boundaries);
      setProgress(66);

      // await dashboardService.createCost(id, cost);
      setProgress(100);
    } else {
      setError('Boundaries file is required.');
    }
  };

  return (
    <Card className="form-container">
      <Card.Title className="form-title">{props.project ? 'Edit Project' : 'Add Project'}</Card.Title>
      <Card.Body>
        <ProgressBar now={progress} />
        <div style={{ margin: '20px 0px' }} />
        <Alert show={error !== null} variant='danger' onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              size="sm"
              isInvalid={errors.name}
              {...register('name', { required: "Project name is required" })}
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Description</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              isInvalid={errors.description}
              rows={3}
              {...register('description', { required: "Project description is required" })}
            />
            {errors.description && (
              <Form.Control.Feedback type="invalid">
                {errors.description.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-2" size="sm">
            <Form.Label>Country</Form.Label>
            <Form.Control as='select' size='sm' isInvalid={errors.country} {...register('country', { required: "Country is required" })}>
              {countries.map((country) => (
                <option key={country['code']} value={country['code']}>{country['name']}</option>
              ))}
            </Form.Control>
            {errors.country && (
              <Form.Control.Feedback type="invalid">
                {errors.country.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-2" size="sm">
            <Form.Label>Banner Picture</Form.Label>
            <Form.File
              id="custom-file-translate-scss"
              label=""
              lang="en"
              custom
            />
          </Form.Group> */}
          <Form.Group className="mb-2 row" size="sm">
            <Col xs={2}>
              <Form.Label>Currency</Form.Label>
              <Form.Control as='select' size='sm' isInvalid={errors.country} {...register('currency', { required: "Currency is required" })}>
                {currencies.map((currency) => (
                  <option key={currency['code']} value={currency['code']}>{currency['code']}</option>
                ))}
              </Form.Control>
              {errors.currency && (
                <Form.Control.Feedback type="invalid">
                  {errors.currency.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col xs={5}>
              <Form.Label>Tree Cost</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                isInvalid={errors.treeCost}
                {...register('treeCost', { required: "Tree cost is required"})}
              />
              {errors.treeCost && (
                <Form.Control.Feedback type="invalid">
                  {errors.treeCost.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col xs={5}>
              <Form.Label>Worker Count</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                isInvalid={errors.workerCount}
                {...register('workerCount', { required: "Worker count is required"})}
              />
              {errors.workerCount && (
                <Form.Control.Feedback type="invalid">
                  {errors.workerCount.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Form.Group>
          <Form.Group className="mb-2 row" size="sm">
            <Col>
              <Form.Label>Planting Area (&#13217;)</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                isInvalid={errors.plantingArea}
                {...register('plantingArea', { required: "Planting area is required" })}
              />
              {errors.plantingArea && (
                <Form.Control.Feedback type="invalid">
                  {errors.plantingArea.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col>
              <Form.Label>Planting Density (&#13217;)</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                isInvalid={errors.plantingDensity}
                {...register('plantingDensity', { required: "Planting density is required"})}
              />
              {errors.plantingDensity && (
                <Form.Control.Feedback type="invalid">
                  {errors.plantingDensity.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-2" size="sm">
            <Form.Label>Coordinates (CSV Format)</Form.Label>
            <Form.File
              id="custom-file-translate-scss"
              label={fileLabel}
              custom
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={onSubmitCoordenates}
            />
          </Form.Group>
          <div style={{margin: '20px 0px'}}/>
          <Button variant="primary" className="btn btn-success w-100" type="submit" disabled={progress > 0 && progress < 100}>
            {buttonState(progress)}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}