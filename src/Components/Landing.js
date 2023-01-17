import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/pages.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillPeopleFill } from 'react-icons/bs'
import { increase, decrease } from '../Redux/CounterSlice'
import { useSelector, useDispatch } from 'react-redux';


function Landing() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()



    const handleincrease = () => {
        dispatch(increase)
    }
    const handledecrease = () => {
        dispatch(decrease)
    }
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
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='text-start mt-4 w-100'>
                            <BsFillPeopleFill style={{ color: "green" }} /> <span className='ms-2'>{count.total}</span> Passenger
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                            <Dropdown.Item ><h6 className='mb-3'>Choose Passenger Type</h6></Dropdown.Item>
                            <Dropdown.Item id='1' className='d-flex justify-content-between'>
                                <p>Adults<br />(17-61)</p>
                                <div className="quantity  d-flex align-items-center justify-content-center gap-3  w-50 ">
                                    <div className='decrease' onClick={handledecrease}>-</div>
                                    <div className='counter'>{count.value}</div>
                                    <div className='increase' onClick={handleincrease} >+</div>
                                </div></Dropdown.Item>
                            <Dropdown.Item id='2' className='d-flex justify-content-between'>
                                <p>Children<br />(2-16)</p>
                                <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                    <div className='decrease' onClick={handledecrease}>-</div>
                                    <div className='counter'>{count.value}</div>
                                    <div className='increase' onClick={handleincrease}>+</div>
                                </div></Dropdown.Item>
                            <Dropdown.Item id='2' className='d-flex justify-content-between'>
                                <p>Seniors<br />(62+)</p>
                                <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                    <div className='decrease' onClick={handledecrease} >-</div>
                                    <div className='counter'>{count.value}</div>
                                    <div className='increase' onClick={handleincrease}>+</div>
                                </div></Dropdown.Item>
                            <Dropdown.Item><Button variant="success" className=' w-100'>DONE</Button></Dropdown.Item>

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