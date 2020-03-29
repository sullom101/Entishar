/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeContext from "../../context/ThemeContext"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import { Container } from "reactstrap"
import "../layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Wrapper from '../StyledComponents/wrapper'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container fluid={true} >
            <Wrapper className="container">{children}</Wrapper>
          </Container>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
