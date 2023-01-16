
import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'



function Footer() {
  return (
    <div className='text-center text-lg-start text-light bg-success bg-opacity-75'>

      <section className='pt-4'>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                TRAVEL
              </h6>
              <p>
                <a>Bus Tickets</a>
              </p>
              <p>
                <a>Train Tickets</a>
              </p>
            </Col>

            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                ABOUT
              </h6>

              <p>
                <a>About</a>
              </p>
              <p>
                <a>Careers</a>
              </p>
              <p>
                <a>Contact Us</a>
              </p>


            </Col>
            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONNECT WITH US</h6>
              <Row>
                <Col>
                  <a><BsFacebook /></a>
                </Col>
                <Col>
                  <a><AiOutlineInstagram /></a>
                </Col>
                <Col>
                  <a><AiOutlineTwitter /></a>
                </Col>
                <Col>
                  <a><AiOutlineYoutube /></a>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 bg-success-subtle bg-opacity-25'>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </div>
  )
}

export default Footer