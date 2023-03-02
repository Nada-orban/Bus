import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Filterdetails from './Filterdetails'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import Searchcard from './Searchcard';




function SearchDetails() {

    return (
        <Container className='mt-5'>
            <Row>
                <Col md='3' >
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Travel Mode</Accordion.Header>
                            <Accordion.Body>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Buses</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className=" list-unstyled">
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                                    <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                                                    <label className="form-check-label" for="secondCheckbox">Second checkbox</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                                    <label className="form-check-label" for="thirdCheckbox">Third checkbox</label>
                                                </li>
                                            </ul>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Trains</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className=" list-unstyled">
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                                    <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                                                    <label className="form-check-label" for="secondCheckbox">Second checkbox</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                                    <label className="form-check-label" for="thirdCheckbox">Third checkbox</label>
                                                </li>
                                            </ul>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Time</Accordion.Header>
                            <Accordion.Body>
                                <Tabs
                                    defaultActiveKey="Arrival"
                                    id="uncontrolled-tab-example"
                                    className="my-3 "
                                >
                                    <Tab eventKey="home" title="Depart">


                                    </Tab>
                                    <Tab eventKey="Arrival" title="Arrival">

                                    </Tab>

                                </Tabs>

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </Col>
                <Col md='9'>
                    <Searchcard />
                </Col>
            </Row>
        </Container>
    )
}

export default SearchDetails