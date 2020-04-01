import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Table from "../components/CountriesTable/table"
import MainStat from "../components/MainStat/mainStat"
import axios from "axios"
import Spinner from "../components/Spinner/Spinner"
import { countryCode } from "../utils/countryTransformer"
import Frames from "../components/Frames/Frames"

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

      // summaryCases(sortedData)
    }
    const fetchSummary = async () => {
      const url = "https://covid19.mathdro.id/api"
      const result = await axios
        .get(url,{
          withCredentials: false,
        })
        .then(res => {
          const obj = {
            TotalConfirmed: res.data.confirmed.value,
            TotalDeaths: res.data.deaths.value,
            TotalRecovered: res.data.recovered.value,
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

    fetchData()
    fetchSummary()
  }, [])

  if (summary && data !== null) {
    return (
      <Layout>
        <SEO title="Home" />
        <MainStat summary={summary} data={data} />
        <Table summary={summary} data={data} />

        <Frames />

        <div></div>
      </Layout>
    )
  } else {
    return <Spinner />
  }
}

export default IndexPage
