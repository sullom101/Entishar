import React, { Component, useEffect, useState } from "react"
import Image from "../image"
import axios from "axios"
import { countryCode } from "../../utils/countryTransformer"
import ReactCountryFlag from "react-country-flag"
import styled from "styled-components"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const StatWrapper = styled.div`
  padding: 7px;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5%;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 7%;
  }
`
const WrapperGrid = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 7%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 7%;
  }
`

const CardWrapper = styled.div`
  background-color: rgb(229, 229, 229);
  border: none;
  border-radius: 49px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 10%;
  align-items: center;
  justify-content: center;
`

const MainEach = props => {
  console.log("Main Each Component data", props.data)
  const [cordinates, setCordinates] = useState(null)

  useEffect(() => {
    const getCordinates = async () => {
      const cordinateData = await axios
        .get(
          `https://api.covid19api.com/country/${props.data.Slug}/status/confirmed`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        )
        .then(res => {
          const Lon = res.data[res.data.length - 1].Lon
          const Lat = res.data[res.data.length - 1].Lat
          return {
            Lat: Lat,
            Lon: Lon,
          }
        })
        .catch(err => {
          console.log("first call to summary data", err)
        })

      setCordinates(cordinateData)
    }
    getCordinates()
  }, [])

  return (
    <WrapperGrid className="container">
      <div>
        <div
          style={{
            backgroundColor: "#1f1d1d",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: 7,
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          <h1 style={{ margin: 0, padding: "0 5px" }}> {props.data.Country}</h1>
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={countryCode(props.data.Country)}
            style={{
              marginBottom: 0,
              width: 50,
              height: "auto",
              justifySelf: "flex-end",
              alignSelf: "center",
              borderRadius: 4,
              border: "none",
            }}
            svg
          />
        </div>
     
      </div>
  

      <StatWrapper>
        <CardWrapper style={{ color: "#d60303" }}>
          <img
            src={require("../../images/confirmed.png")}
            style={{ margin: "0 auto" }}
            width={60}
          />
          <p
            style={{
              textAlign: "center",
              margin: "8px 0 20px 0",
              fontSize: "1.2rem",
            }}
          >
            {" "}
            Confirmed
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalConfirmed}
            {/* <span style={{ float: "right", fontSize: 12 }}>
                {" "}
                &#8593; {summary.NewConfirmed}{" "}
              </span> */}
          </p>
        </CardWrapper>
        <CardWrapper style={{ color: "#2b7900" }}>
          <img
            src={require("../../images/recovered.png")}
            style={{ margin: "0 auto" }}
            width={60}
          />
          <p
            style={{
              textAlign: "center",
              margin: "8px 0 20px 0",
              fontSize: "1.2rem",
            }}
          >
            {" "}
            Recovered
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalRecovered}
            {/* <span style={{ float: "right", fontSize: 12 }}>
                {" "}
                &#8593; {summary.NewRecovered}{" "}
              </span> */}
          </p>
        </CardWrapper>

        <CardWrapper style={{ color: "#000" }}>
          <img
            src={require("../../images/death.png")}
            style={{ margin: "0 auto" }}
            width={60}
          />
          <p
            style={{
              textAlign: "center",
              margin: "8px 0 20px 0",
              fontSize: "1.2rem",
            }}
          >
            {" "}
            Deaths
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalDeaths}{" "}
            {/* <span style={{ float: "right", fontSize: 12 }}>
                {" "}
                &#8593; {summary.NewDeaths}{" "}
              </span> */}
          </p>
        </CardWrapper>
      </StatWrapper>
    </WrapperGrid>
  )
}

export default MainEach
