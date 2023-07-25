import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Image = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col>
          <Image src="%PUBLIC_URL%/Images/Image1" rounded />
        </Col>
        <Col>
          <Image src="%PUBLIC_URL%/Images/Image1" rounded />
        </Col>
        <Col>
          <Image src="%PUBLIC_URL%/Images/Image1" rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default Image;