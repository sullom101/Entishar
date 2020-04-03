import React, { Component } from "react"
// import { Container, Col, Row } from "reactstrap"
// import Image from "../image"
import styled from "styled-components"
import { useIntl,FormattedMessage } from "gatsby-plugin-intl"
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

const MainStat = props => {
  const summary = props.summary
  const intl = useIntl()
  if (summary !== null) {
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
            }}
          > { intl.locale === "ar"? (<h1 style={{ margin: 0, padding: "0 5px", textAlign:'end' }}>
          <FormattedMessage id="World" />
        </h1>): (<h1 style={{ margin: 0, padding: "0 5px" }}>
          <FormattedMessage id="World" />
        </h1>)}
            
          </div>
          <div>
            {/* <Map style={{width:'100%'}} data={props.data}/> */}
            <iframe
              title=""
              aria-label="World Symbol map"
              id="datawrapper-chart-3GgHn"
              src="//datawrapper.dwcdn.net/3GgHn/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: 0, minWidth: "100%", border: "none" }}
              height="524"
            ></iframe>
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
              <FormattedMessage id="Confirmed" />
              
            </p>
            <p
              style={{
                margin: "1rem 0 0 ",
                fontSize: "1.4rem",
                textAlign: "center",
              }}
            >
              {summary.TotalConfirmed}
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
              <FormattedMessage id="Recovered" />
            </p>
            <p
              style={{
                margin: "1rem 0 0 ",
                fontSize: "1.4rem",
                textAlign: "center",
              }}
            >
              {summary.TotalRecovered}
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
              <FormattedMessage id="Deaths" />
            </p>
            <p
              style={{
                margin: "1rem 0 0 ",
                fontSize: "1.4rem",
                textAlign: "center",
              }}
            >
              {summary.TotalDeaths}{" "}
              {/* <span style={{ float: "right", fontSize: 12 }}>
                {" "}
                &#8593; {summary.NewDeaths}{" "}
              </span> */}
            </p>
          </CardWrapper>
        </StatWrapper>
      </WrapperGrid>
    )
  } else {
    return ""
  }
}

export default MainStat
