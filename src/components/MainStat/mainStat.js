import React from "react"
import { Container, Col, Row } from "reactstrap"
import Image from "../image"

const MainStat = (props) => {
  const summary = props.summary
  if (summary !== null) {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gridColumnGap: '7%',
        padding: "2rem 0",
      }}
    >
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
     
    </Container>
  )}
  else{
    return ""
  }
}
export default MainStat
