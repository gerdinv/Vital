import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="signup">Register</Nav.Link>
                    <Nav.Link href="signin">Login</Nav.Link>
                    <Nav.Link href="home">Home</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;