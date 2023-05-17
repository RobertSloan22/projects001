import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import WebcamWithRadar from './WebcamWithRadar';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="jumbotron bg-primary text-white text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="display-3">Welcome to Heroes</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component
              for calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="light" href="#learn-more">Learn more</Button>
            </p>
          </Col>
        </Row>
        <div className="grid-container"> {/* Add the grid container */}
          <WebcamWithRadar />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
