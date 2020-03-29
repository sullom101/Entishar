import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import MainEach from "../components/CountryInfo/MainEach"
import Layout from "../components/Layout/layout"
// import SEO from "../components/SEO/seo"
// import Image from "../components/image"

import Summary from "../components/CountryInfo/Summary"

const SecondPage = props => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const summaryData = async () => {
      const getSummary = await axios
        .get(`https://api.covid19api.com/summary`)
        .then(res => {
          const find = res.data.Countries.find(el => el.Slug == props.data.Slug)
          return find
        })
        .catch(err => console.log(err))
      console.log("Country-page data", getSummary)
      setSummary(getSummary)
    }
    summaryData()
  }, [])

  if (summary !== null) {
    return (
      <Layout>
        <MainEach summary={summary} data={props.data} />
        <Summary summary={summary} data={props.data} />
      </Layout>
    )
  } else {
    return ""
  }
}

export default SecondPage
