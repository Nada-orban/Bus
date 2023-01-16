import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/pages.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Landing() {
    return (
        <Container fluid='md' className='form-info   shadow p-3 mb-5 bg-body-tertiary rounded bg-white position-absolute top-75 start-50 translate-middle '>
            <Row className='mb-3'>
                <Col xs={12} md={3}>
                    <label ><input type="radio" name="gender" value="male" /> One Way</label>
                </Col>
                <Col xs={12} md={3}>
                    <label><input type="radio" name="gender" value="male" /> Round Trip</label></Col>


            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">From </option>
                        <option value="1">New York,NY</option>
                        <option value="2">Washington,D.C.</option>
                        <option value="3">Bangalore</option>
                    </Form.Select>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">To </option>
                        <option value="1">New Delhi</option>
                        <option value="2">Mumbai</option>
                        <option value="3">Bangalore</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className='mt-3  '>
                <Col xs={6} md='3'  >
                    <label>Depart
                        <input placeholder=" Departing" type="date" id="date-picker-example" className="form-control datepicker mb-2 w-100 " /></label>
                </Col>
                <Col xs={6} md='3'
                >
                    <label>Return
                        <input placeholder=" Arriving" type="date" id="date-picker-example" className="form-control datepicker  w-100" /></label>
                </Col>
                <Col xs={12} md='3'>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='mt-4 w-100'>
                            <span>1</span> Adult
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Action</Dropdown.Item>
                            <Dropdown.Item >Another action</Dropdown.Item>
                            <Dropdown.Item >Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></Col>

                <Col xs={12} md={3}>
                    <Button variant="success " className=' mt-4 w-100'>Search</Button>

                </Col>

            </Row>
            {/* <Row>
                <Col xs={6} md={6}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">Anytime</option>
                        <option value="1">6:00 AM</option>
                        <option value="2">3:00 AM</option>
                        <option value="3">6:00 PM</option>
                    </Form.Select>
                </Col>
                <Col xs={6} md={6}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">Anytime</option>
                        <option value="1">6:00 AM</option>
                        <option value="2">3:00 AM</option>
                        <option value="3">6:00 PM</option>
                    </Form.Select>
                </Col>
            </Row> */}
            {/* <Row className='mt-4 mb-3'>
                <Col xs={4} md={4}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">Kids(0-14)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>

                <Col xs={4} md={4}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">Adults(15-64)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>

                <Col xs={4} md={4}>
                    <Form.Select aria-label="Default select example">
                        <option value="" disabled="" selected="">Seniors(65+)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>
            </Row> */}


        </Container >
    )
}

export default Landing