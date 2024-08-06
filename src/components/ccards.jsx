import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CCards() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center display-4">Cherie Designs</h1>
          <p className="text-center lead">
            Transforming spaces with elegance and style. We bring your vision to life with our bespoke interior design services.
          </p>
          <p className="text-center">
            At Cherie Designs, we specialize in creating stunning interiors that reflect your personality and lifestyle. Our team of experts works closely with you to design spaces that are not only beautiful but also functional and comfortable.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Living Room Makeover</Card.Title>
              <Card.Text>
                Experience the ultimate comfort and style with our modern living room designs. We focus on creating a cozy and inviting atmosphere where you can relax and entertain.
              </Card.Text>
              <Card.Text>
                From selecting the perfect color palette to choosing elegant furniture and decor, our living room makeovers are tailored to your preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Kitchen Renovation</Card.Title>
              <Card.Text>
                Sleek and functional kitchen designs that inspire your culinary creativity. Our kitchen renovations are designed to maximize space and efficiency while adding a touch of style.
              </Card.Text>
              <Card.Text>
                We handle everything from layout optimization and cabinetry to modern appliances and stylish finishes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Bedroom Retreat</Card.Title>
              <Card.Text>
                Create a serene sanctuary with our luxurious bedroom designs. Our approach focuses on creating a restful environment where you can unwind and recharge.
              </Card.Text>
              <Card.Text>
                We offer personalized design solutions that include elegant furnishings, calming color schemes, and thoughtful lighting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Office Spaces</Card.Title>
              <Card.Text>
                Design an inspiring and productive workspace with our office design services. Whether you need a home office or a corporate setting, we create environments that boost efficiency and creativity.
              </Card.Text>
              <Card.Text>
                Our designs focus on ergonomics, functionality, and aesthetics to ensure a productive and pleasant work experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Outdoor Living</Card.Title>
              <Card.Text>
                Enhance your outdoor areas with our custom outdoor living designs. From patios and decks to gardens and outdoor kitchens, we create beautiful spaces for relaxation and entertainment.
              </Card.Text>
              <Card.Text>
                Our outdoor designs are tailored to suit your lifestyle and the natural surroundings, ensuring a harmonious and enjoyable outdoor experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CCards;
