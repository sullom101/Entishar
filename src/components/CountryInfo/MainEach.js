import React from "react"
import { Container } from "reactstrap"

const MainEach = props => {
  console.log("Main Each Component data", props.data)

  return (
    <Container className="card" style={{ padding: "2rem" }}>
      <p></p>
    </Container>
  )
}

export default MainEach
