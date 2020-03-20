import React from "react"
import { Container, Col, Row } from "reactstrap"
import Image from '../image';
// warya Think about the box model

const MainStat = () => {
  return (
    <Container className="card">
      <Row>
        <Col xl={6}>
            <Row>
            <Col xs="4" >
            {" "}
            <p> number of cases </p>{" "}
          </Col>
          <Col xs="4">
            {" "}
            <p> number of deaths cases </p>{" "}
          </Col>
          <Col xs="4">
            {" "}
            <p> number of recoverd cases </p>{" "}
          </Col>
        
            </Row>
         </Col>
        <Col xl={6} syle={{maxWidth:'300px'}}>
         
           <Image/>
         
        </Col>
      </Row>
    </Container>
  )
}

export default MainStat
