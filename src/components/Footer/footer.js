import React from "react"
import { Container, Col, Row, Button } from "reactstrap"
import Foot from '../StyledComponents/footer';
import { FormattedMessage } from "gatsby-plugin-intl"

const  Footer = ()=> {
  return (
    <Foot>
      <Container>
        <Row>
          <Col className="float-right" style={{textAlign:'center'}}>
          <FormattedMessage id="Made with Love" />
          <span style={{padding:'0 5px'}}> &#x2764;</span> 
            <a href="https://www.alieniz.com"> <FormattedMessage id="by Alieniz" /></a>.
            {` `}
          </Col>
        </Row>
      </Container>
    </Foot>
  )
}

export default Footer;