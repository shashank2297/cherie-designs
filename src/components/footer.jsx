import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Cherie Designs. All rights reserved.</p>
            <p className="mb-0">Contact us: info@cheriedesigns.com | +1 234 567 890</p>
            <p className="mb-0">123 Design Street, Interior City, IC 45678</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
