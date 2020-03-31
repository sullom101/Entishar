import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"
import MainEach from "../components/CountryInfo/MainEach"
import Layout from "../components/Layout/layout"
// import SEO from "../components/SEO/seo"
// import Image from "../components/image"
import Spinner from "../components/Spinner/Spinner"
import Summary from "../components/CountryInfo/Summary"
import { countryCode } from "../utils/countryTransformer"

const SecondPage = props => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const summaryData = async () => {
      const getSummary = await axios
        .get(`https://api.covid19api.com/summary`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          withCredentials: false,
        })
        .then(res => {
          const find = res.data.Countries.find(el => el.Slug == props.data.Slug)
          console.log("first call made summary countries", find)
          const obj = {
            Country: find.Country,
            Code: countryCode(find.Country),
            Slug: find.Slug,
            NewConfirmed: find.NewConfirmed,
            TotalConfirmed: find.TotalConfirmed,
            NewDeaths: find.NewDeaths,
            TotalDeaths: find.TotalDeaths,
            NewRecovered: find.NewRecovered,
            TotalRecovered: find.TotalRecovered,
          }

          return obj
        })
        .catch(err => {
          console.log("first call to summary data", err)
        })
      // console.log("loging returned summary data", getSummary)
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
    return <Spinner />
  }
}

export default SecondPage
