import React, { useEffect, useState } from "react"
import { Container, Col, Row } from "reactstrap"
import Image from "../image"

const MainStat = () => {

return (
    <Container className="card" style={{ padding: "2rem" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Col xl={5} syle={{ maxWidth: "300px" }}>
          <Image />
        </Col>

        <Col xl={6}>
        <Row style={{ width: "100%", height: "100%", alignItems: "center", margin: 0 }}>
          <Col xs="4">
            {" "}
            <p>حالات الوفاة</p> 
          </Col>
          <Col xs="4">
            {" "}
            <p>حالات التعافي</p>
          </Col>
          <Col xs="4">
            {" "}
            <p> الحالات المؤكدة </p>{" "}
          </Col>
        </Row>
      </Col>       
      </Row>
    </Container>
  )

}
export default MainStat
