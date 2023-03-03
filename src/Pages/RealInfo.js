import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { GoLocation } from 'react-icons/go'
import InputGroup from 'react-bootstrap/InputGroup';
import { TiTicket } from "react-icons/ti"

function Realinfo() {
  return (
    <div className='realinfo mb-5 '>
      <div className='position-relative '>
        <div className='backgroundImage'>
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
              <Breadcrumb.Item >
                Current route inform...
              </Breadcrumb.Item>
            </Breadcrumb>
          </Container>

          <Container >
            <div className='container-box   d-flex flex-column justify-content-center text-center w-75  position-absolute start-50 translate-middle '>
              <Card className='p-3 my-3  shadow'>
                <div key={`default-${'radio'}`} className="mb-3 d-flex gap-4 ">
                  <Form.Check
                    type={'radio'}
                    id={`default-${'radio'}`}
                    label={`One Way`}

                  />

                  <Form.Check
                    type={'radio'}
                    label={`Round Way`}
                    id={`default-${'radio'}`}
                  />
                </div>
                <div>
                  <p className='fs-5 text-start mt-4'>Stop</p>
                  <div className='d-md-flex justify-content-between align-items-center gap-4 '>
                    <InputGroup className=" w-100 mb-3 mb-md-0 ">
                      <InputGroup.Text id="basic-addon1"><GoLocation /></InputGroup.Text>
                      <Form.Control

                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>


                    <Button variant="success " type="button" className='px-5'
                    >Search</Button>
                  </div>
                </div>
              </Card>
              <Card className='p-3 my-3 shadow'>

                <div>
                  <p className='fs-6 text-start mt-4'>Booking number</p>
                  <div className='d-md-flex justify-content-between align-items-center gap-4  '>
                    <InputGroup className=" w-100 mb-3 mb-md-0 ">
                      <InputGroup.Text id="basic-addon1">< TiTicket /></InputGroup.Text>
                      <Form.Control

                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>


                    <Button variant="success " type="button" className='px-5'
                    >Search</Button>
                  </div>
                  <p className='fs-6 text-start mt-4'>Can be found on your ticket and your confirmation e-mail.</p>
                </div>
              </Card>

            </div>
          </Container >
        </div>


      </div>

    </div>

  )
}

export default Realinfo