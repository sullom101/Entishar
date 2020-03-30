import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Table from "../components/CountriesTable/table"
import MainStat from "../components/MainStat/mainStat"
import axios from "axios"

const IndexPage = () => {
  const [summary, setSummary] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const url = "https://api.covid19api.com/summary"
      const result = await axios
        .get(url,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: false,
          })
        .then(res => {
          console.debug("List of countries ", typeof res.data)
          if (typeof res.data !== "object") {
            const parsedData = JSON.parse(res.data)
            console.log("parsed data", parsedData)
            return parsedData.Countries
          } else {
            return res.data.Countries
          }
        })
        .catch(err => {
          console.log(err)
        })
        const sortedData = result.sort((a,b)=> b.TotalConfirmed - a.TotalConfirmed )
      setData(sortedData)

      summaryCases(sortedData)
    }
    fetchData()
  }, [])

  const summaryCases = result => {
    let obj = {}
    const confirmed = result
      .map(el => el.TotalConfirmed)
      .reduce((acc, cur) => acc + cur)
    const deaths = result
      .map(el => el.TotalDeaths)
      .reduce((acc, cur) => acc + cur)
    const recovered = result
      .map(el => el.TotalRecovered)
      .reduce((acc, cur) => acc + cur)
    obj = {
      TotalConfirmed: confirmed,
      TotalDeaths: deaths,
      TotalRecovered: recovered,
    }
    console.log("this is an array of importat data", obj)
    // return array;

    setSummary(obj)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MainStat summary={summary}/>
      <Table summary={summary} data={data}/>

      <iframe
        style={{ width: "100%" }}
        width="100%"
        height="550"
        src="https://www.outbreak.my/widget/viruscompare"
        frameBorder="0"
        allow="autoplay; encrypted-media;picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </Layout>
  )
}

export default IndexPage
