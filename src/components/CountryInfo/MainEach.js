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

const WrapperGrid = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-column-gap: 7%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 7%;
  }
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
        <div className="container">
          {/* <Image /> */}
          {/* {
            (cordinates !== null ) ? <ComposableMap
            projectionConfig={{ scale: 1000 }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <ZoomableGroup center={[cordinates.Lon, cordinates.Lat]} disablePanning></ZoomableGroup>
          </ComposableMap>:''
          } */}
<Image/>
        </div>
      </div>
      <div>
        <div style={{ padding: 30 }}></div>
        <div
          style={{
            backgroundColor: "#e5e5e5",
            color: "#d60303",
            border: "none",
            borderRadius: 10,
            padding: 7,
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 2fr",
            gridColumnGap: 8,
            alignItems: "center",
          }}
        >
          <img
            src={require("../../images/confirmed.png")}
            style={{ margin: 0 }}
            width={50}
          />
          <p style={{ margin: 0 }}> Confirmed</p>
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalConfirmed : "----"}
            <span style={{ float: "right", fontSize: 12 }}>
              {" "}
              &#8593; {props.summary.NewConfirmed}{" "}
            </span>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#e5e5e5",
            color: "#2b7900",
            border: "none",
            borderRadius: 10,
            padding: 7,
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 2fr",
            gridColumnGap: 8,
            alignItems: "center",
          }}
        >
          <img
            src={require("../../images/recovered.png")}
            style={{ margin: 0 }}
            width={50}
          />
          <p style={{ margin: 0 }}> Recovered</p>
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalRecovered : "----"}
            <span style={{ float: "right", fontSize: 12 }}>
              {" "}
              &#8593; {props.summary.NewRecovered}{" "}
            </span>
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#e5e5e5",
            color: "#000",
            border: "none",
            borderRadius: 10,
            padding: 7,
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 2fr",
            gridColumnGap: 8,
            alignItems: "center",
          }}
        >
          <img
            src={require("../../images/death.png")}
            style={{ margin: 0 }}
            width={50}
          />
          <p style={{ margin: 0 }}> Deaths</p>
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalDeaths : "----"}
            <span style={{ float: "right", fontSize: 12 }}>
              {" "}
              &#8593; {props.summary.NewDeaths}{" "}
            </span>
          </p>
        </div>
      </div>
    </WrapperGrid>
  )
}

export default MainEach

