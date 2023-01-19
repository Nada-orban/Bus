import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Landing from './Landing'



function Search() {
    return (
        <Container >
            <Landing />

        </Container>







        // <Navbar bg="light" expand="lg" >
        //     <Container fluid>
        //         <div> <Button variant="primary" onClick={handleShow} className="me-2">
        //             top
        //         </Button>
        //             <Offcanvas show={show} onHide={handleClose} className=" offcanvas-top   " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        //                 <Offcanvas.Header closeButton>
        //                     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        //                 </Offcanvas.Header>
        //                 <Offcanvas.Body>
        //                     Some text as placeholder. In real life you can have the elements you
        //                     have chosen. Like, text, images, lists, etc.
        //                 </Offcanvas.Body>
        //             </Offcanvas>
        //         </div>
        //         {/* <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="mx-auto my-2 my-lg-0"
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <Nav.Link href="#action1">Home</Nav.Link>
        //                 <Nav.Link href="#action2">Link</Nav.Link>

        //             </Nav>

        //         </Navbar.Collapse> */}
        //     </Container>
        // </Navbar>
    );
}




export default Search;

