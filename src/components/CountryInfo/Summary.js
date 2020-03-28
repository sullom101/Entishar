import React, { useState, useEffect } from "react"
import axios from "axios"
// import {Container} from 'reactstrap'
import CountryInfoCard from "../StyledComponents/CountryInfoCard"
import MainCountryStatWrapper from "../StyledComponents/MainCountryStatWrapper"
import DailyGraphWrapper from "../StyledComponents/dailyGraphWrapper"
import Visualiz from "./visualiz"
import CasesbyState from './CasesByStates'
const Summary = props => {
  const [summary, setSummary] = useState(null)
  const [countryConfirmed, setCountryConfirmed] = useState(null)
  const [label, setLabel]=useState(null)
  const [dataset, setdataset]=useState(null)
  const [deaths, setDeaths]=useState(null);

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
        .get(`https://api.covid19api.com/total/country/${props.data.Slug}/status/confirmed`)
        .then(res => {
          console.log('this is a test for confirmed cases',res.data)
          return res.data;
        })
        .catch(err => console.log(err))

      let templabel = []
      let tempData =[]
      getConfirmed.map(el=>{
        templabel.push(dateAxis(el.Date));
        tempData.push(el.Cases)
      })
      setLabel(templabel)
      setdataset(tempData);
      console.log("loging temp data data", tempData)
      console.log("loging temp date as a label", templabel)
      console.log("loging returned confirmed data", getConfirmed)
      setCountryConfirmed(getConfirmed)
    }

    const countryDeaths = async () => {
      const getDeaths = await axios
        .get(`https://api.covid19api.com/total/country/${props.data.Slug}/status/deaths`)
        .then(res => {
          console.log('this is a test for confirmed cases',res.data)
          return res.data;
        })
        .catch(err => console.log(err))
      let tempData =[]
      getDeaths.map(el=>{
        tempData.push(el.Cases)
      })
      
      setDeaths(tempData)
    }

    summaryData()
    countryConfirmed()
    countryDeaths()
    console.log("getSummary Data", summary)
  }, [])

  const dateAxis = date => {
    var d = new Date(date)
    let result = d.getDate() + "-0" + parseInt(d.getMonth() + 1)
    console.log(result)
    return result
  }

  return (
    <div>
      <MainCountryStatWrapper>
        <CountryInfoCard>
          <p style={{ fontFamily: "Lato" }}>Total Confirmed</p>
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
        <CountryInfoCard >
          {countryConfirmed && summary && label && dataset && deaths !== null ?<Visualiz deathData={deaths} label={label} data={dataset} summary={summary.TotalConfirmed}/>: 'Loading.....'}
        </CountryInfoCard>
      </DailyGraphWrapper>
      <DailyGraphWrapper>
        <CountryInfoCard>
        {countryConfirmed && summary !== null ?<CasesbyState data={countryConfirmed} summary={summary.TotalConfirmed}/>: 'Loading.....'}
        </CountryInfoCard>
        
      </DailyGraphWrapper>

    </div>
  )
}


export default Summary
