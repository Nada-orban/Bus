import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from "react-hook-form";
import { BsFillPeopleFill } from 'react-icons/bs'
import { increase, decrease } from '../Redux/CounterSlice'
import { useSelector, useDispatch } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import SearchDetails from './SearchDetails';





function Search() {

    const count = useSelector(state => state.count)


    const dispatch = useDispatch()
    const { register, handleSubmit, control } = useForm();

    const handleincrease = (gender) => {
        dispatch(increase(gender))
    }
    const handledecrease = (gender) => {
        dispatch(decrease(gender))
    }


    return (
        <Container >
            <Card body className='my-3'>
                <Form onSubmit={handleSubmit((data) => {

                    console.log(data)
                })}>
                    <Row>
                        <Col xs={12} md={2} className='mt-4'>
                            <Controller
                                render={
                                    ({ field }) => <Form.Select {...field}>
                                        <option value={""}>From</option>
                                        <option value={"New York,NY"}>New York,NY</option>
                                        <option value={'Washington,D.C.'}>Washington,D.C.</option>
                                        <option value={'Bangalore'}>Bangalore</option>
                                        <option value={'New Delhi'}>New Delhi</option>
                                        <option value={'Mumbai'}>Mumbai</option>
                                    </Form.Select>
                                }
                                control={control}
                                name="fromselect"

                            />

                        </Col>

                        <Col xs={12} md={2} className='mt-4'>
                            <Controller
                                render={
                                    ({ field }) => <Form.Select {...field}>
                                        <option value=" " >To </option>
                                        <option value={'New Delhi'}>New Delhi</option>
                                        <option value={'Mumbai'}>Mumbai</option>
                                        <option value={'Bangalore'}>Bangalore</option>
                                        <option value={"New York,NY"}>New York,NY</option>
                                        <option value={'Washington,D.C.'}>Washington,D.C.</option>
                                    </Form.Select>
                                }
                                control={control}
                                name="toselect"

                            />

                        </Col>
                        <Col xs={6} md='2'  >
                            <label>Depart
                                <input placeholder=" Departing" type="date" id="date-picker-example" className="form-control datepicker  w-100" {...register("data-depart", { required: true })} /></label>
                        </Col>

                        <Col xs={6} md='2'  >
                            <label>Return
                                <input placeholder=" Arriving" type="date" id="date-picker-example" className="form-control datepicker w-100  " {...register("data-return", { required: true })} /></label>
                        </Col>
                        <Col xs={12} md='2' className='mt-4 '>
                            <OverlayTrigger
                                trigger="click"
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Popover id={`popover-positioned-${'bottom'}`} className='w-50 '>
                                        <Popover.Header as="h3">Choose Passenger Type</Popover.Header>
                                        <Popover.Body className='d-flex  flex-column mt-4'>
                                            <div id='adult' className='d-flex justify-content-between'>
                                                <p>Adults<br />(17-61)</p>
                                                <div className="quantity  d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                    <div className='decrease ' role="button" onClick={() => handledecrease('adult')}>-</div>
                                                    <div className='counter' role="button">{count.adult}</div>
                                                    <div className='increase' role="button" onClick={() => handleincrease('adult')} >+</div>
                                                </div></div >
                                            <div id='children' className='d-flex justify-content-between'>
                                                <p>Children<br />(2-16)</p>
                                                <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                    <div className='decrease' role="button" onClick={() => handledecrease('children')}>-</div>
                                                    <div className='counter' role="button">{count.children}</div>
                                                    <div className='increase' role="button" onClick={() => handleincrease('children')}>+</div>
                                                </div></div>
                                            <div id='seniors' className='d-flex justify-content-between'>
                                                <p>Seniors<br />(62+)</p>
                                                <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                    <div className='decrease' role="button" onClick={() => handledecrease('seniors')} >-</div>
                                                    <div className='counter' role="button">{count.seniors}</div>
                                                    <div className='increase' role="button" onClick={() => handleincrease('seniors')}>+</div>
                                                </div></div>
                                            <div>
                                                {/* <Button variant="success" className=' w-100'>DONE</Button> */}
                                            </div>

                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button variant="light" className='w-100 text-start' >
                                    <BsFillPeopleFill style={{ color: "green" }} /><span className='ms-2' value='' {...register("passenger", { required: true })}>{count.total}</span> Passenger</Button>
                            </OverlayTrigger>



                        </Col>

                        <Col xs={12} md={2}>
                            <Button variant="success " className=' mt-4 w-100 ' type="button"

                            >Search</Button>


                        </Col>

                    </Row>

                </Form>
            </Card>
            <SearchDetails />


        </Container>







        // <Navbar bg="light" expand="lg" >
        //     <Container fluid>
        //         <div> <Button variant="primary" onClick={handleShow} className="me-2">
        //             top
        //         </Button>
        //             <Offcanvas show={show} onHide={handleClose} className=" offcanvas-top   " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        //                 <Offcanvas.Header closeButton>
        //                     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        //                 </Offcanvas.Header>
        //                 <Offcanvas.Body>
        //                     Some text as placeholder. In real life you can have the elements you
        //                     have chosen. Like, text, images, lists, etc.
        //                 </Offcanvas.Body>
        //             </Offcanvas>
        //         </div>
        //         {/* <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="mx-auto my-2 my-lg-0"
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <Nav.Link href="#action1">Home</Nav.Link>
        //                 <Nav.Link href="#action2">Link</Nav.Link>

        //             </Nav>

        //         </Navbar.Collapse> */}
        //     </Container>
        // </Navbar>
    );
}

export default Search;

