import React from "react"
import { Container, Col, Row } from "reactstrap"
import Image from "../image"
import styled from "styled-components"

const WrapperGrid = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-column-gap: 7%;
  @media only screen and (max-width: 768px)  {
    grid-template-columns: 1fr;
    grid-column-gap: 7%;
  }
`

const MainStat = (props) => {
  const summary = props.summary
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
        >
          <h1 style={{ margin: 0, padding: "0 5px" }}> World </h1>
        </div>
        <div>
          <Image />
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
            gridTemplateColumns: "1fr 2fr 1fr",
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
        <p style={{ margin: 0 }}>{summary.TotalConfirmed}</p>
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
            gridTemplateColumns: "1fr 2fr 1fr",
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
          <p style={{ margin: 0 }}>{summary.TotalRecovered}</p>
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
            gridTemplateColumns: "1fr 2fr 1fr",
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
          <p style={{ margin: 0 }}>{summary.TotalDeaths}</p>
        </div>
      </div>
     
      </WrapperGrid>
  )}
  else{
    return ""
  }
}
export default MainStat
