import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({handleSearch}) => {
  return (
    <Container className='mt-4'>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSearch}>
            <Form.Row>
              <Col xs={9}>
                <Form.Group className="mb-3">
                  <Form.CoForm.ntrol type="text" placeholder="Search new image..." />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
          </Col>
        </Row>
    </Container>
  );
};

export default Sear