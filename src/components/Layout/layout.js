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
import Wrapper from "../StyledComponents/wrapper"
import { Helmet } from "react-helmet"
import favicon from "../../images/covid-logo.png"

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
          <Helmet>
            <link rel="icon" href={favicon} />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content="A contribution website from Alieniz team to the world where you can check updated stats for covid 19 outbreak."
            />
            <meta
              name="keywords"
              content="covid-19,covid stats, covid outbreak,Alieniz, corona stats"
            />
          </Helmet>
          <Header />
          <Container fluid={true}>
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
