import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Nav , NavDropdown , Navbar } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../logo.png';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const dropdown = {
    color: "#2e2e2e"
}

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-back">
        <Container>
        <Navbar.Brand href="#/">
            <img className="imglogo" src={Logo} alt="logo" height="110px" width="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto" >
            <Nav.Link href="#/" >HOME</Nav.Link>
            <Nav.Link href="#/events">EVENTS</Nav.Link>
            {/* <NavDropdown title="ABOUT US" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="#/about" style={dropdown}>About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" style={dropdown} >Ambassdor</NavDropdown.Item>
            </NavDropdown> */}
            
            <Nav.Link href="#/gallery">GALLERY</Nav.Link>
            <Nav.Link href="#/about">ABOUT US</Nav.Link>
            <Nav.Link href="#/contact">CONTACT US</Nav.Link>

            {/* </Nav>
                <button className="button">LOG IN</button>
            <Nav> */}
            </Nav>
            <NavDropdown title="LOG IN" id="collasible-nav-dropdown"  >
                <Form className={`container ${'formSty'}`} >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" name="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <button type="submit" className='form-Btn'>
                        Submit
                    </button>
                </Form>
            </NavDropdown>
            
            <Nav>
            <Nav.Link href="#signup" className='button'>
                SIGN UP
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


export default navbar;