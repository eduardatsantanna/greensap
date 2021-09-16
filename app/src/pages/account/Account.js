import "@/scss/account/index.scss";
import { useState, useEffect } from 'react';
import { LoadContent } from "@/pages/general";
import { authenticationService } from "@/services";
import { Container, Card, Row, Col } from 'react-bootstrap';

import { Avatar, Details } from './';


export const Account = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        setUser(authenticationService.currentUserValue);
    }, []);

    if (!user) {
        return null;
    }
    
    return (
        <LoadContent>
            <main id="account">
                <Container as="main" fluid="md">
                    <Card>
                        <Card.Body>
                            <Row xs={1} sm={1} md={2}>
                                <Col>
                                    <Avatar DisplayPicture={user.DisplayPicture} />
                                </Col>
                                <Col>
                                    <Details user={user} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </LoadContent>
    );
}
