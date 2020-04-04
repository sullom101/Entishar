import React, { useState, useEffect } from "react"
import axios from "axios"
import CountryInfoCard from "../StyledComponents/CountryInfoCard"
import MainCountryStatWrapper from "../StyledComponents/MainCountryStatWrapper"
import DailyGraphWrapper from "../StyledComponents/dailyGraphWrapper"
import Visualiz from "./visualiz"
import Pie from "./Pie"

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

   
    countryConfirmed()
  }, [])

  useEffect(() => {
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
    countryDeaths()
  }, [])

  useEffect(()=>{
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

    countryRecovered()
  },[])

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
        {deaths && label && recovered && dataset !== null ? (
          <Pie
            RecoveryRate={props.summary.RecoveryRate}
            DeathRate={props.summary.DeathRate}
            summary={props.summary}
          />
        ) : (
          ""
        )}
      </DailyGraphWrapper>
    </div>
  )
}

export default Summary
