import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap"
import Head from "../StyledComponents/header"

const Header = props => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

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
