import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./pages.css";


function Home() {
  return (
    <div className="landing  px-3" >
      <h3 className='text-white'>Bus Travel in the US from just $5.99</h3>
      <Container fluid='md'>
        <div className='form-info mt-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
          <Row className='mb-3'>
            <label className="col-3"><input type="radio" name="gender" value="male" /> One Way</label>
            <label className="col-3"><input type="radio" name="gender" value="male" /> Round Trip</label>
          </Row>
          <Row>
            <div className="col-6 col-sm-6">
              <select className="browser-default custom-select mb-2 w-100" id="select">
                <option value="" disabled="" selected="">From </option>
                <option value="1">New York,NY</option>
                <option value="2">Washington,D.C.</option>
                <option value="3">Bangalore</option>
              </select>
            </div>
            <div className="col-6 col-sm-6">
              <select className="browser-default custom-select mb-2 w-100" id="select">
                <option value="" disabled="" selected="">To </option>
                <option value="1">New Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Bangalore</option>
              </select>
            </div>
          </Row>
          <Row>
            <div className="col-6  col-sm-6 ">
              <label>Departure
                <input placeholder=" Departing" type="date" id="date-picker-example" className="form-control datepicker mb-4 w-100" /></label>
            </div>
            <div className="col-6  col-sm-6 ">
              <label>Arriving
                <input placeholder=" Arriving" type="date" id="date-picker-example" className="form-control datepicker w-100" /></label>
            </div>
          </Row>
          <Row>
            <div className="col-6  col-sm-6">
              <select className="browser-default custom-select mb-4 w-100" id="select">
                <option value="" disabled="" selected="">Anytime</option>
                <option value="1">6:00 AM</option>
                <option value="2">3:00 AM</option>
                <option value="3">6:00 PM</option>
              </select>
            </div>
            <div className=" col-6 col-sm-6">
              <select className="browser-default custom-select mb-4 w-100" id="select">
                <option value="" disabled="" selected="">Anytime</option>
                <option value="1">6:00 AM</option>
                <option value="2">3:00 AM</option>
                <option value="3">6:00 PM</option>
              </select>
            </div>
          </Row>
          <Row>
            <div className=" col-4 col-sm-4">
              <select className="browser-default custom-select mb-4 w-75" id="select">
                <option value="" disabled="" selected="">Kids(0-14)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className=" col-4 col-sm-4">
              <select className="browser-default custom-select mb-4 w-75" id="select">
                <option value="" disabled="" selected="">Adults(15-64)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className=" col-4 col-sm-4">
              <select className="browser-default custom-select mb-4 w-75" id="select">
                <option value="" disabled="" selected="">Seniors(65+)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </Row>
          <button type="button" class="btn btn-success w-50 ">Search</button>
        </div>
      </Container>
    </div>

  )
}

export default Home