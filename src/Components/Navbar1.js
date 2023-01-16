import React, { useState } from 'react'
import './Navbar1.css'
import { FaBars } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Navbar1() {
    const [show, setShow] = useState(false);
    const closemenu = () => { setShow(!show) }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar bg="success" key={expand} expand={expand} className='bg-opacity-50 navbar-info ' variant="dark" >
                    <Container>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='text-white ' ><FaBars /></Navbar.Toggle>
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start" className='w-50'>
                            <Offcanvas.Header closeButton>

                            </Offcanvas.Header>
                            <Offcanvas.Body  >
                                <Nav className="  justify-content-center text-black flex-grow-1 fw-bold  " >
                                    <NavDropdown title={<span className=" my-auto">Plan Your Journey</span>} id="basic-nav-dropdown" as={Link} to='/plan' className=" nav-link ">
                                        <NavDropdown.Item ><Link as={Link} to='/route' className=" text-secondary text-decoration-none ">Route Map</Link> </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link as={Link} to='/destination' className=" text-secondary text-decoration-none " >All Bus destinations</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >Vacation ideas</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={<span className=" my-auto">Service</span>} id="basic-nav-dropdown" as={Link} to='/services' className="nav-link ">
                                        <NavDropdown.Item >All Services</NavDropdown.Item>
                                        <NavDropdown.Item>
                                            FAQ
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >Manage My Booking</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to='/real' className="nav-link  mt-2 " >Real-Time Info</Nav.Link>
                                    <Nav.Link as={Link} to='/help' className="nav-link  mt-2" >Help</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>


            ))}

        </>





    );
}

export default Navbar1;