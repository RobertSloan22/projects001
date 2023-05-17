import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="jumbotron bg-primary text-white text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="display-3">Robert A, Sloan </h1>
            <p className="lead">
              This site is a collection of various projects I have worked on over the last year, including a few I am currently working on.
              Additionally I have included in the links on the page some of the things i spend time on that make me who i am. 

            </p>
            <p>
              <Button variant="light" href="#learn-more">Learn more</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
