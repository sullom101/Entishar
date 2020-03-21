import React from "react"
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap"
import Head from "../StyledComponents/header"

const Header = props => {

  return (
    <Head>
      <Container className="container" fluid={true}>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            {props.siteTitle}
          </NavbarBrand>
        </Navbar>
      </Container>
    </Head>
  )
}

export default Header
