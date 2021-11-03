import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Nav , NavDropdown , Navbar } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../logo.png';

const dropdown = {
    color: "#2e2e2e"
}

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-back">
        <Container>
        <Navbar.Brand href="#home">
            <img className="imglogo" src={Logo} alt="logo" height="110px" width="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            <Nav.Link href="#/" >HOME</Nav.Link>
            <Nav.Link href="#/">EVENTS</Nav.Link>
            {/* <NavDropdown title="ABOUT US" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="#/about" style={dropdown}>About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" style={dropdown} >Ambassdor</NavDropdown.Item>
            </NavDropdown> */}
            
            <Nav.Link href="#/">GALLERY</Nav.Link>
            <Nav.Link href="#/about">ABOUT US</Nav.Link>
            <Nav.Link href="#/">CONTACT US</Nav.Link>

            </Nav>
            

                <button className="button">EXPLORE</button>
            <Nav>
            <Nav.Link href="#signin">
                SIGN UP
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


export default navbar;