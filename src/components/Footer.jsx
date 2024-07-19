import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <p>&copy; {new Date().getFullYear()} Movies 2K</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
