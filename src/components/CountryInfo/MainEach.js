import React from "react"
import { Container } from "reactstrap"
import Image from "../image"
import { countryCode } from "../../utils/countryTransformer"
import ReactCountryFlag from "react-country-flag"

const MainEach = props => {
  console.log("Main Each Component data", props.data)

  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gridColumnGap: "7%",
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
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalConfirmed : "----"}
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
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalRecovered : "----"}
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
          <p style={{ margin: 0 }}>
            {props.summary ? props.summary.TotalDeaths : "----"}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default MainEach
