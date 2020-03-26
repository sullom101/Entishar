import React, { useState, useEffect } from "react"
import axios from "axios"
// import {Container} from 'reactstrap'
import CountryInfoCard from "../StyledComponents/CountryInfoCard"
import MainCountryStatWrapper from "../StyledComponents/MainCountryStatWrapper"
import DailyGraphWrapper from "../StyledComponents/dailyGraphWrapper"
import Visualiz from "./visualiz"

const Summary = props => {
  const [summary, setSummary] = useState(null)
  const [countryConfirmed, setCountryConfirmed] = useState(null)


  useEffect(() => {
    const summaryData = async () => {
      const getSummary = await axios
        .get(`https://api.covid19api.com/summary`)
        .then(res => {
          const find = res.data.Countries.find(el => el.Slug == props.data.Slug)
          return find
        })
        .catch(err => console.log(err))
      console.log("loging returned summary data", getSummary)
      setSummary(getSummary)
    }
    const countryConfirmed = async () => {
      const getConfirmed = await axios
        .get(`https://api.covid19api.com/country/${props.data.Slug}/status/confirmed`)
        .then(res => {
          console.log('this is a test for confirmed cases',res.data)
          return res.data;
        })
        .catch(err => console.log(err))
      console.log("loging returned confirmed data", getConfirmed)
      setCountryConfirmed(getConfirmed)
    }

    summaryData()
    countryConfirmed()
    console.log("getSummary Data", summary)
  }, [])

  return (
    <div>
      <MainCountryStatWrapper>
        <CountryInfoCard>
          <p style={{ fontFamily: "nunito-sans" }}>Total Confirmed</p>
          <p>{summary !== null ? summary.TotalConfirmed : ""}</p>
          <p>{/* {props.TotalConfirmed} */}</p>
        </CountryInfoCard>
        <CountryInfoCard>
          <p> Total Recovered</p>
          <p>{summary !== null ? summary.TotalDeaths : ""}</p>
        </CountryInfoCard>
        <CountryInfoCard>
          <p>Total Deaths </p>
          <p>
            {summary !== null ? summary.TotalRecovered : ""} <br />{" "}
          </p>
        </CountryInfoCard>
      </MainCountryStatWrapper>
      <DailyGraphWrapper>
        <CountryInfoCard>
          {countryConfirmed && summary !== null ?<Visualiz data={countryConfirmed} summary={summary.TotalConfirmed}/>: 'Loading.....'}
        </CountryInfoCard>
      </DailyGraphWrapper>
    </div>
  )
}


export default Summary
