import { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";

export const Details = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  useEffect(() => {
    if (props.user !== null) {
      setName(props.user.DisplayName ?? '');
      setEmail(props.user.EmailAddress ?? '');
      setWebsite(props.user.Website ?? '');
      setFacebook(props.user.Facebook ?? '');
      setInstagram(props.user.Instagram ?? '');
      setTwitter(props.user.Twitter ?? '');
      setLinkedIn(props.user.LinkedIn ?? '');
    }
  }, [props.user]);

  return (
    <div id="details-container">
      <div className="title-container">
        <h3>Account Details</h3>
      </div>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="website">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" placeholder="Enter website" value={website} onChange={e => setWebsite(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="facebook">
          <Form.Label>Facebook</Form.Label>
          <Form.Control type="text" placeholder="Enter Facebook" value={facebook} onChange={e => setFacebook(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="instagram">
          <Form.Label>Instagram</Form.Label>
          <Form.Control type="text" placeholder="Enter Instagram" value={instagram} onChange={e => setInstagram(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="twitter">
          <Form.Label>Twitter</Form.Label>
          <Form.Control type="text" placeholder="Enter Twitter" value={twitter} onChange={e => setTwitter(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="linkedin">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control type="text" placeholder="Enter LinkedIn" value={linkedIn} onChange={e => setLinkedIn(e.target.value)} />
        </Form.Group>
      </Form>
      <button className="btn btn-success w-100">
        Save
      </button>
    </div>
  );
};