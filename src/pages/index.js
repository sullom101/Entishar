import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Table from "../components/CountriesTable/table"
import MainStat from "../components/MainStat/mainStat"
import axios from "axios"
import Spinner from "../components/Spinner/Spinner"
import { countryCode } from "../utils/countryTransformer"

const IndexPage = () => {
  const [summary, setSummary] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const url = "https://api.covid19api.com/summary"
      const result = await axios
        .get(url, {
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
            const newData = []
            parsedData.forEach(el => {
              const obj = {
                Country: el.Country,
                Code: countryCode(el.Country),
                Slug: el.Slug,
                NewConfirmed: el.NewConfirmed,
                TotalConfirmed: el.TotalConfirmed,
                NewDeaths: el.NewDeaths,
                TotalDeaths: el.TotalDeaths,
                NewRecovered: el.NewRecovered,
                TotalRecovered: el.TotalRecovered,
              }
              newData.push(obj)
            })
            return newData
          } else {
            const newData = []
            res.data.Countries.forEach(el => {
              const obj = {
                Country: el.Country,
                Code: countryCode(el.Country),
                Slug: el.Slug,
                NewConfirmed: el.NewConfirmed,
                TotalConfirmed: el.TotalConfirmed,
                NewDeaths: el.NewDeaths,
                TotalDeaths: el.TotalDeaths,
                NewRecovered: el.NewRecovered,
                TotalRecovered: el.TotalRecovered,
              }
              newData.push(obj)
            })
            return newData
          }
        })
        .catch(err => {
          console.log(err)
        })
      const sortedData = result.sort(
        (a, b) => b.TotalConfirmed - a.TotalConfirmed
      )
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
    const newConfirmed = result
      .map(el => el.NewConfirmed)
      .reduce((acc, cur) => acc + cur)
    const newDeaths = result
      .map(el => el.NewDeaths)
      .reduce((acc, cur) => acc + cur)
    const newRecovered = result
      .map(el => el.NewRecovered)
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
      NewConfirmed: newConfirmed,
      NewDeaths: newDeaths,
      NewRecovered: newRecovered,
    }
    console.log("this is an array of importat data", obj)
    // return array;

    setSummary(obj)
  }

  if (summary && data !== null) {
    return (
      <Layout>
        <SEO title="Home" />
        <MainStat summary={summary} data={data} />
        <Table summary={summary} data={data} />

        <iframe
          title={"outbreak data"}
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
  } else {
    return <Spinner />
  }
}

export default IndexPage
