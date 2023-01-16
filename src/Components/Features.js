import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { FcLike, FcOk, FcBookmark } from "react-icons/fc";
import { AiFillHeart } from 'react-icons/ai'
import { ImPriceTag } from 'react-icons/im'

function Features() {
    return (
        <Container className='mt-5 '>
            <Row>
                <Col md={4}>
                    <div className='d-flex'>
                        <div className='me-2'><ImPriceTag size={30} style={{ color: "green" }} /></div>
                        <div className='text'>
                            <h3>Lowest Prices</h3>
                            <p>We partner with the top bus & train carriers to bring you the best deals.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='d-flex'>
                        <div className='me-2'><FcOk size={30} /></div>
                        <div className='text'>
                            <h3>No Wanderu Fees</h3>
                            <p>Without any extra fees, we make it easy to book your tickets.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='d-flex'>
                        <div className='me-2'><AiFillHeart size={30} style={{ color: "green" }} /></div>
                        <div className='text'>
                            <h3>Best Travel Options</h3>
                            <p>We help you find & compare the best buses & trains in one place.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Features