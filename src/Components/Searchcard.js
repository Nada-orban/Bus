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

function Searchcard() {
    return (
        <Card >
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='2'></Col>
                        <Col>
                            <div>
                                3:00PM<span>Union Station </span>
                            </div>
                            <div>
                                7:20 PM
                                <span>
                                    Port Authority Bus Station </span>
                            </div>
                        </Col>

                    </Row>
                    <div className='d-flex'>

                        <Accordion defaultActiveKey="0" className=''>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Badge pill bg="warning" text="dark" className='h-100'>
                            Warning
                        </Badge>
                        <Badge pill bg="warning" text="dark" className='h-100'>
                            Warning
                        </Badge>






                    </div>

                </Col>
                <Col md='3' >
                    <div className='prise'>$<span>16</span></div>
                    <Button variant="secondary">Secondary</Button>

                </Col>
            </Row>
        </Card>

    )
}

export default Searchcard