import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function PlanJourney() {
  return (
    <Container>
      <Breadcrumb>
      <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Bus
      </Breadcrumb.Item>   
      </Breadcrumb>
    </Container>
  )
}

export default PlanJourney