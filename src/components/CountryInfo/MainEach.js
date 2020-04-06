import React, { Component, useEffect, useState } from "react"
import Image from "../image"
import axios from "axios"
import { countryCode, countryTransformer } from "../../utils/countryTransformer"
import ReactCountryFlag from "react-country-flag"
import styled from "styled-components"

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

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
  const intl = useIntl()

  return (
    <WrapperGrid className="container">
      <div>
        {intl.locale === "ar" ? (
          <div
            style={{
              backgroundColor: "#1f1d1d",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: 7,
              marginBottom: "1rem",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
            }}
          >
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={props.data.countryInfo.iso2}
              style={{
                marginBottom: 0,
                width: 50,
                height: "auto",
                justifySelf: "flex-start",
                alignSelf: "center",
                borderRadius: 4,
                border: "none",
                textAlign: "end",
              }}
              svg
            />
            <h1 style={{ margin: 0, padding: "0 5px",textAlign:'end' }}>
              {" "}
              {countryTransformer(props.data.country)}
            </h1>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#1f1d1d",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: 7,
              marginBottom: "1rem",
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
            }}
          >
            <h1 style={{ margin: 0, padding: "0 5px" }}>
              {" "}
              {props.data.country}
            </h1>
            <ReactCountryFlag
              className="emojiFlag"
              countryCode={props.data.countryInfo.iso2}
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
        )}
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
            <FormattedMessage id="Confirmed" />
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalConfirmed}
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
            <FormattedMessage id="Recovered" />
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalRecovered}
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
            <FormattedMessage id="Deaths" />
          </p>
          <p
            style={{
              margin: "1rem 0 0 ",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {props.summary.TotalDeaths}{" "}
          </p>
        </CardWrapper>
      </StatWrapper>
    </WrapperGrid>
  )
}

export default MainEach
