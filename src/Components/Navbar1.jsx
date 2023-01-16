import React, { useState } from 'react'
import './Navbar1.css'
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar1() {
    const [show, setShow] = useState(false);
    const closemenu = () => { setShow(!show) }

    return (
        <Navbar bg="success" expand="md" className='bg-opacity-50 navbar-info ' variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white ' ><FaBars /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-center align-items-center'>
                    <Nav className=" fw-bold text-center" >
                        <NavDropdown title={<span className="text-white my-auto">Plan Your Journey</span>} id="basic-nav-dropdown"  as={Link} to='/plan' className=" nav-link text-white ">
                            <NavDropdown.Item >Route Map</NavDropdown.Item>
                            <NavDropdown.Item>
                                All Bus destinations
                            </NavDropdown.Item>
                            <NavDropdown.Item >Vacation ideas</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className="text-white my-auto">Service</span>} id="basic-nav-dropdown"  as={Link} to='/services' className="nav-link text-white ">
                            <NavDropdown.Item >All Services</NavDropdown.Item>
                            <NavDropdown.Item>
                                FAQ
                            </NavDropdown.Item>
                            <NavDropdown.Item >Manage My Booking</NavDropdown.Item>      
                        </NavDropdown> 
                        <Nav.Link as={Link} to='/real' className="nav-link text-white mt-2 " >Real-Time Info</Nav.Link>
                        <Nav.Link as={Link} to='/help' className="nav-link text-white mt-2" >Help</Nav.Link>        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>







    );
}

export default Navbar1;