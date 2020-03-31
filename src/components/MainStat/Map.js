import React, { Component } from "react"
import country from "world-map-country-shapes"

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountries: {},
      colors: {
        levelOne: "#ffc0bf",
        levelTwo: "#ee707",
        levelThree: "#c80100",
        levelFour: "#900000",
        levelFive: "#510000",
        levelSix: "#300000",
      },
      data: this.props.data,
    }
  }

  colorPick = cases => {
    if (cases > 1 && cases <= 50) {
      return this.state.colors.levelOne
    } else if (cases > 50 && cases <= 500) {
      return this.state.colors.levelTwo
    } else if (cases > 500 && cases <= 2000) {
      return this.state.colors.levelThree
    } else if (cases > 2000 && cases <= 10000) {
      return this.state.colors.levelFour
    } else if (cases > 10000 && cases <= 100000) {
      return this.state.colors.levelFive
    } else if (cases > 100000) {
      return this.state.colors.levelSix
    } else {
      return "#eee"
    }
  }

  render() {
    const { data } = this.state
    const mapCountries = country.map(country => {
      //   console.log(country)
      const find = data.find(el => el.Code === country.id)

      if (typeof find === "object") {
        console.log("this is find on Map passed if ", find)
        return (
          <path
            key={country.id}
            d={country.shape}
            style={{
              fill:
                find !== "undefined"
                  ? this.colorPick(find.TotalConfirmed)
                  : "#eee",
              cursor: "pointer",
              stroke: "#ccc",
            }}
          />
        )
      } else {
        return (
          <path
            key={country.id}
            d={country.shape}
            style={{
              fill: "#eee",
              cursor: "pointer",
              stroke: "#ccc",
            }}
          />
        )
      }
    })

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // height="400"
        // width="800"
        viewBox="0 0 2000 1001"
      >
        {mapCountries}
      </svg>
    )
  }
}

export default Map
