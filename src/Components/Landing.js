import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Pages/pages.css'
import { BsFillPeopleFill } from 'react-icons/bs'
import { increase, decrease } from '../Redux/CounterSlice'
import { useSelector, useDispatch } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useForm, Controller } from "react-hook-form";



function Landing() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const { register, getValues, control } = useForm();
    // const { field } = useController({ name: 'country', control })



    // const fromoptions = [
    //     { value: 'New York,NY', label: 'New York,NY' },
    //     { value: 'Washington,D.C.', label: 'Washington,D.C.' },
    //     { value: 'Bangalore', label: 'Bangalore' },
    // ];


    const handleincrease = () => {
        dispatch(increase)
    }
    const handledecrease = () => {
        dispatch(decrease)
    }

    // const handleselect = (option) => {
    //     field.onChange(option.value)


    // }
    return (
        <Form>
            <Container fluid='md' className='form-info   shadow p-3 mb-5 bg-body-tertiary rounded bg-white position-absolute top-75 start-50 translate-middle '>
                <Row className='mb-3'>

                    <Col xs={12} md={3}>
                        <label ><input type="radio" value={'on way'} {...register("one-way")} /> One Way</label>
                    </Col>
                    <Col xs={12} md={3}>
                        <label><input type="radio" value={'round way'} {...register("round-way")} /> Round Trip</label></Col>


                </Row>
                <Row>
                    <Col xs={12} md={6}>
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
                        {/* <Form.Select aria-label="Default select example" value={fromoptions.find(({ value }) => value === field.value)}
                            options={fromoptions} onChange={handleselect} /> */}
                    </Col>
                    <Col xs={12} md={6}>
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
                </Row>
                <Row className='mt-3  '>
                    <Col s={6} md='3'  >
                        <label>Depart
                            <input placeholder=" Departing" type="date" id="date-picker-example" className="form-control datepicker mb-2 w-100 " {...register("data-depart")} /></label>
                    </Col>
                    <Col s={6} md='3'
                    >
                        <label>Return
                            <input placeholder=" Arriving" type="date" id="date-picker-example" className="form-control datepicker  w-100" {...register("data-return")} /></label>
                    </Col>
                    <Col xs={12} md='3' className='mt-4'>
                        <OverlayTrigger
                            trigger="click"
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Popover id={`popover-positioned-${'bottom'}`} className='w-25 '>
                                    <Popover.Header as="h3">Choose Passenger Type</Popover.Header>
                                    <Popover.Body className='d-flex  flex-column mt-4'>
                                        <div id='1' className='d-flex justify-content-between'>
                                            <p>Adults<br />(17-61)</p>
                                            <div className="quantity  d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                <div className='decrease ' role="button" onClick={handledecrease}>-</div>
                                                <div className='counter' role="button">{count.value}</div>
                                                <div className='increase' role="button" onClick={handleincrease} >+</div>
                                            </div></div >
                                        <div id='2' className='d-flex justify-content-between'>
                                            <p>Children<br />(2-16)</p>
                                            <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                <div className='decrease' role="button" onClick={handledecrease}>-</div>
                                                <div className='counter' role="button">{count.value}</div>
                                                <div className='increase' role="button" onClick={handleincrease}>+</div>
                                            </div></div>
                                        <div id='2' className='d-flex justify-content-between'>
                                            <p>Seniors<br />(62+)</p>
                                            <div className="quantity d-flex align-items-center justify-content-center gap-3  w-50 ">
                                                <div className='decrease' role="button" onClick={handledecrease} >-</div>
                                                <div className='counter' role="button">{count.value}</div>
                                                <div className='increase' role="button" onClick={handleincrease}>+</div>
                                            </div></div>
                                        <div><Button variant="success" className=' w-100'>DONE</Button></div>

                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="light" className='w-100 text-start' {...register("passenger")}>
                                <BsFillPeopleFill style={{ color: "green" }} /><span className='ms-2'>{count.total}</span> Passenger</Button>
                        </OverlayTrigger>



                    </Col>

                    <Col xs={12} md={3}>
                        <Button variant="success " className=' mt-4 w-100' type='button' onClick={() => {
                            const Values = getValues();
                            console.log(Values)
                        }}>Search</Button>


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
        </Form>
    )
}

export default Landing