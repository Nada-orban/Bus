import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { FaBusAlt } from 'react-icons/fa'
import { BsClockFill } from 'react-icons/bs'

function Searchcard() {
    return (
        <>
            <Card className=' p-3 mb-5'>
                <Row>
                    <Col md='9'>
                        <Row>

                            <Col>
                                <div>
                                    3:00PM<span>Union Station </span>
                                </div>
                                <div>
                                    7:20PM
                                    <span>
                                        Port Authority Bus Station </span>
                                </div>
                            </Col>

                        </Row>
                        <div className='d-flex mt-5 '>

                            {/* <Accordion defaultActiveKey="0" className=''>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> */}

                            <div className='d-flex  '>
                                <FaBusAlt style={{ color: "green" }} />
                                <p className='mx-2'>Bus</p>
                            </div>
                            <div className='d-flex mx-3 '>
                                <BsClockFill />
                                <p className='mx-2'>55m</p>
                            </div>
                        </div>

                    </Col>
                    <Col md='3' className='text-end' >
                        <div className='prise mb-5'>$<span>16</span></div>
                        <button type="button" className="btn btn-outline-success">Select</button>

                    </Col>
                </Row>
            </Card>
            <Card className=' p-3 mb-5'>
                <Row>
                    <Col md='9'>
                        <Row>

                            <Col>
                                <div>
                                    3:00PM<span>Union Station </span>
                                </div>
                                <div>
                                    7:20PM
                                    <span>
                                        Port Authority Bus Station </span>
                                </div>
                            </Col>

                        </Row>
                        <div className='d-flex mt-5 '>

                            {/* <Accordion defaultActiveKey="0" className=''>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> */}

                            <div className='d-flex  '>
                                <FaBusAlt style={{ color: "green" }} />
                                <p className='mx-2'>Bus</p>
                            </div>
                            <div className='d-flex mx-3 '>
                                <BsClockFill />
                                <p className='mx-2'>55m</p>
                            </div>
                        </div>

                    </Col>
                    <Col md='3' className='text-end' >
                        <div className='prise mb-5'>$<span>16</span></div>
                        <button type="button" className="btn btn-outline-success">Select</button>

                    </Col>
                </Row>
            </Card>

        </>


    )
}

export default Searchcard