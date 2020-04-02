import React from "react"
import { Container, Col, Row, Button } from "reactstrap"
import Foot from '../StyledComponents/footer';

const  Footer = ()=> {
  return (
    <Foot>
      <Container>
        <Row>
          <Col className="float-right" style={{textAlign:'center'}}>
            Made with Love<span style={{padding:'0 5px'}}> &#x2764;</span>  by 
            <a href="https://www.alieniz.com"> Alieniz</a>.
            {` `}
          </Col>
        </Row>
      </Container>
    </Foot>
  )
}

export default Footer;