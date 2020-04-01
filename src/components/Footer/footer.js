import React from "react"
import { Container, Col, Row, Button } from "reactstrap"
import Foot from '../StyledComponents/footer';

const  Footer = ()=> {
  return (
    <Foot>
      <Container>
        <Row>
          <Col className="float-right">
            Copyrights © {new Date().getFullYear()}{" "}
            <a href="https://www.alieniz.com">Alieniz</a>. All rights-reserved
            {` `}
          </Col>
        </Row>
      </Container>
    </Foot>
  )
}

export default Footer;