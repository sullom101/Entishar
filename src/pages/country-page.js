import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"
import MainEach from "../components/CountryInfo/MainEach"
import Layout from "../components/Layout/layout"
// import SEO from "../components/SEO/seo"
// import Image from "../components/image"
import Spinner from "../components/Spinner/Spinner"
import Summary from "../components/CountryInfo/Summary"
import { getSlug } from "../utils/countryTransformer"

const SecondPage = props => {
  const [summary, setSummary] = useState(null)
  const data = props.data
  const slug = getSlug(data.country)
  // const summary = {
  //   TotalConfirmed: data.cases,
  //   TotalDeaths: data.deaths,
  //   TotalRecovered: data.recovered,
  //   RecoveryRate : Math.round(data.recovered*100 / data.cases),
  //   DeathRate : Math.round(data.deaths * 100 / data.cases),
  // }

  useEffect(() => {
    

    const fetchSummary = async () => {
      const url = `https://corona.lmao.ninja/countries/${data.country}`
      const result = await axios
        .get(url,{
          withCredentials: false,
        })
        .then(res => {
          const obj = {
            TotalConfirmed: res.data.cases,
            TotalDeaths: res.data.deaths,
            TotalRecovered: res.data.recovered,
            RecoveryRate : Math.round(res.data.recovered*100 / res.data.cases),
            DeathRate : Math.round(res.data.deaths * 100 / res.data.cases),
          }
          console.log(obj)
          return obj
        })
        .catch(err => {
          console.log(err)
          return
        })

      setSummary(result)
      return result
    }
    // summaryData()
    fetchSummary()
  }, [])

  if (summary && slug !== null) {
    return (
      <Layout>
        <MainEach summary={summary} data={props.data} />
        <Summary summary={summary} slug={slug} data={props.data} />
      </Layout>
    )
  } else {
    return <Spinner />
  }
}

export default SecondPage
