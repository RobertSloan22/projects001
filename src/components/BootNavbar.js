import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Development Tool Portal </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">JavaScript/Web-development</Nav.Link>
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Machine - Learning - OpenAI</Nav.Link>
                            <Nav.Link href="#home">M-I-T FULLSTACK DEVELOPMENT PROGRAM RESOURCES</Nav.Link>
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Machine - Learning - OpenAI</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </div>
        );
    }
}

export default App;
