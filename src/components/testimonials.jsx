import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonial() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center display-5 mb-4">What Our Clients Say</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Text className="testimonial-text">
                "Cherie Designs completely transformed my living room. Their attention to detail and design expertise exceeded my expectations!"
              </Card.Text>
              <Card.Footer className="text-muted">- John Doe</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Text className="testimonial-text">
                "The team at Cherie Designs created a beautiful and functional kitchen for us. We love it!"
              </Card.Text>
              <Card.Footer className="text-muted">- Jane Smith</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Text className="testimonial-text">
                "I couldn't be happier with my new office space. Cherie Designs made it modern and comfortable."
              </Card.Text>
              <Card.Footer className="text-muted">- Michael Johnson</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonial;
