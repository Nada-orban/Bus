import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { TiTicket } from "react-icons/ti"
import { TfiWrite } from "react-icons/tfi"
import { GrBaby } from 'react-icons/gr'
import { VscFeedback } from 'react-icons/vsc'
import { MdBusAlert } from 'react-icons/md'
import { FaCreditCard, FaWheelchair } from 'react-icons/fa'
import { BsBagFill } from 'react-icons/bs'




function Help() {
  return (
    <Container className='d-flex flex-column justify-content-center text-center'>
      <div>
        <p className='fs-1'>What can we help you with?</p>
        <input type="search" placeholder="Search.." className=' w-50 ' />
      </div>

      <Row className='my-5 ' >
        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <TiTicket style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Book a ticket for your trip</p>
          </Card>


        </Col>
        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <FaCreditCard style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Problems with payments</p>
          </Card>

        </Col>
        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <BsBagFill style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Baggage</p>
          </Card>

        </Col>

        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <VscFeedback style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Feedback</p>
          </Card>

        </Col>
        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <MdBusAlert style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Route and Delay information</p>
          </Card>

        </Col>
        <Col md="4" xs="12" >
          <Card className='d-flex flex-column justify-content-center text-center  align-items-center mb-3'>
            <FaWheelchair style={{ padding: "5px", width: "50px", height: "50px" }} />
            <p>Passengers with disabilitis</p>
          </Card>

        </Col>





      </Row>

    </Container>
  )
}

export default Help