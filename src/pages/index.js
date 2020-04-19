import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Table from "../components/CountriesTable/table"
import TableAr from "../components/CountriesTable/tableAr"
import MainStat from "../components/MainStat/mainStat"
import axios from "axios"
import Spinner from "../components/Spinner/Spinner"
import Frames from "../components/Frames/Frames"
import { slugify } from '../utils/slugMaker'
import { useIntl } from 'gatsby-plugin-intl'
const IndexPage = () => {
  const [summary, setSummary] = useState(null)
  const [data, setData] = useState(null)
  const intl = useIntl()

  useEffect(() => {
    async function fetchData() {
      const url = "https://corona.lmao.ninja/v2/countries?sort=country"
      const result = await axios
        .get(url, {
          withCredentials: false,
        })
        .then(res => {
          console.log("List of countries ", res.data)
          if (typeof res.data !== "object") {
            const parsedData = JSON.parse(res.data)
            console.log("parsed data", parsedData)
            const newData = []
            parsedData.forEach(el => {
              const obj = {
                Country: el.country,
                Code: el.countryInfo.iso2,
                Slug: slugify(el.country),
                NewConfirmed: el.todayCases,
                TotalConfirmed: el.cases,
                NewDeaths: el.todayDeaths,
                TotalDeaths: el.deaths,
                NewRecovered: el.recovered,
                TotalRecovered: el.recovered,
              }
              newData.push(obj)
            })
            return newData
          } else {
            const newData = []
            res.data.forEach(el => {
              const obj = {
                Country: el.country,
                Code: el.countryInfo.iso2,
                Slug: slugify(el.country),
                NewConfirmed: el.todayCases,
                TotalConfirmed: el.cases,
                NewDeaths: el.todayDeaths,
                TotalDeaths: el.deaths,
                NewRecovered: el.recovered,
                TotalRecovered: el.recovered,
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
        .get(url, {
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
        {intl.locale === 'ar' ? <TableAr summary={summary} data={data} /> : <Table summary={summary} data={data} />}


        <Frames />

        <div></div>
      </Layout>
    )
  } else {
    return <Spinner />
  }
}

export default IndexPage
