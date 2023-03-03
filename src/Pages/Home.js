import React from 'react'
import "./pages.css";
import Landing from '../Components/Landing';
import Features from '../Components/Features';
import Aboutus from '../Components/Aboutus';
import Container from 'react-bootstrap/Container';


function Home() {

  return (
    <div className='home ' >
      <div className='carsoul position-relative '>
        <div className="landing" ></div>
        <Landing />
      </div>
      <Features />
      <hr />
      <Container>
        <Aboutus />
      </Container>
    </div>

  )
}

export default Home