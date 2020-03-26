import React from "react"
import { Link } from "gatsby"
import MainEach from "../components/CountryInfo/MainEach"
import Layout from "../components/Layout/layout"
// import SEO from "../components/SEO/seo"
// import Image from "../components/image"

import Summary from "../components/CountryInfo/Summary"

const SecondPage = props => {
  console.log()
  return (
    <Layout>
      <Summary data={props.data} />
      <MainEach data={props.data} />
    </Layout>
  )
}

export default SecondPage
