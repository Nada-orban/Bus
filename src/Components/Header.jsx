import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <Navbar bg="success" expand="lg " variant="dark">
    <Container fluid>
        <Navbar.Brand as={Link} to='/' className='navbar-brand  mx-auto'>SookaBus</Navbar.Brand>
    </Container>
</Navbar>
    )
}

export default Header