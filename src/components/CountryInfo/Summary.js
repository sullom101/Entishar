import React, { useState, useEffect } from "react"
import axios from "axios"
import CountryInfoCard from "../StyledComponents/CountryInfoCard"
import MainCountryStatWrapper from "../StyledComponents/MainCountryStatWrapper"
import DailyGraphWrapper from "../StyledComponents/dailyGraphWrapper"
import Visualiz from "./visualiz"
import CasesbyDay from "./CasesByDay"
const Summary = props => {
  const [countryConfirmed, setCountryConfirmed] = useState(null)
  const [deaths, setDeaths] = useState(null)
  const [recovered, setRecovered] = useState(null)
  const [label, setLabel] = useState(null)
  const [dataset, setdataset] = useState(null)

  useEffect(() => {
    const countryConfirmed = async () => {
      const getConfirmed = await axios
        .get(
          `https://api.covid19api.com/total/country/${props.data.Slug}/status/confirmed`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        )
        .then(res => {
          console.log(" confirmed cases second call", res.data)
          return res.data
        })
        .catch(err => {
          console.log("couldnt get confirmed cases (second call)", err)
        })

      const dateAxis = date => {
        var d = new Date(date)
        let result = d.getDate() + "-0" + parseInt(d.getMonth() + 1)

        return result
      }

      let templabel = []
      let tempData = []

      if (getConfirmed !== undefined) {
        getConfirmed.map(el => {
          templabel.push(dateAxis(el.Date))
          tempData.push(el.Cases)
        })
      }

      setLabel(templabel)
      setdataset(tempData)
      setCountryConfirmed(getConfirmed)
    }

    const countryDeaths = async () => {
      const getDeaths = await axios
        .get(
          `https://api.covid19api.com/total/country/${props.data.Slug}/status/deaths`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        )
        .then(res => {
          console.log("death cases third call ", res.data)
          return res.data
        })
        .catch(err => {
          console.log("couldnt get death cases from api third call", err)
          // getDeaths()
        })
      let tempDeath = []

      getDeaths.map(el => {
        tempDeath.push(el.Cases)
      })

      setDeaths(tempDeath)
    }
    const countryRecovered = async () => {
      const getRecovered = await axios
        .get(
          `https://api.covid19api.com/total/country/${props.data.Slug}/status/recovered`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        )
        .then(res => {
          console.log(" Recovered cases fourth call", res.data)
          return res.data
        })
        .catch(err => {
          console.log("couldnt get recovered data from api fourth call", err)
          // getRecovered()
        })

      let tempData = []

      getRecovered.map(el => {
        tempData.push(el.Cases)
      })

      setRecovered(tempData)
    }

    countryDeaths()
    countryRecovered()
    countryConfirmed()
  }, [])

  return (
    <div>
      <DailyGraphWrapper>
        <CountryInfoCard>
          {deaths && label && recovered && dataset !== null ? (
            <Visualiz
              deathData={deaths}
              label={label}
              recoveredData={recovered}
              data={dataset}
            />
          ) : (
            ""
          )}
        </CountryInfoCard>
      </DailyGraphWrapper>
      <DailyGraphWrapper>
        {/* <CountryInfoCard>
          <CasesbyDay
            data={countryConfirmed}
            summary={props.summary.TotalConfirmed}
          />
        </CountryInfoCard> */}
      </DailyGraphWrapper>
      {/* <MainCountryStatWrapper>
        {props.data.Provinces.length > 1 ? <Table /> : ""}
      </MainCountryStatWrapper> */}
    </div>
  )
}

const Table = props => {
  return (
    <div>
      <p>this is tabe </p>
    </div>
  )
}
export default Summary
