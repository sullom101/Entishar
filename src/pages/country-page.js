import React, { useEffect, useState } from "react"
import axios from "axios"
import MainEach from "../components/CountryInfo/MainEach"
import Layout from "../components/Layout/layout"
import Spinner from "../components/Spinner/Spinner"
import Summary from "../components/CountryInfo/Summary"

const SecondPage = props => {
  const [summary, setSummary] = useState(null)
  const data = props.data
  useEffect(() => {
    const fetchSummary = async () => {
      const url = `https://corona.lmao.ninja/countries/${data.country}`
      const result = await axios
        .get(url, {
          withCredentials: false,
        })
        .then(res => {
          const obj = {
            TotalConfirmed: res.data.cases,
            TotalDeaths: res.data.deaths,
            TotalRecovered: res.data.recovered,
            RecoveryRate: Math.round(
              (res.data.recovered * 100) / res.data.cases
            ),
            DeathRate: Math.round((res.data.deaths * 100) / res.data.cases),
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

    fetchSummary()
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
