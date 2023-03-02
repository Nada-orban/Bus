import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { FaLongArrowAltRight } from 'react-icons/fa'


function Header() {
    const [close, setClose] = useState("false")
    return (
        <>
            {close && <Navbar expand="lg" className='quick-bar bg-info-subtle'>
                <Container>
                    <Link className='text-black ' >Bus Travel in the US from just $5.99 <FaLongArrowAltRight /></Link>
                    <div className='close-icon text-black' role="button" onClick={() => setClose(!close)}><AiOutlineClose /></div>
                </Container>
            </Navbar>}
            <Navbar bg="success" variant="dark" className='d-md-block d-sm-none bg-opacity-50 '>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/' className='navbar-brand  mx-auto'>SookaBus</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header