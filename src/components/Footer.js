import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Heroes. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
