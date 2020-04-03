import React from "react"
import { Line } from "react-chartjs-2"
import { useIntl} from "gatsby-plugin-intl"

const Visualiz = props => {
  const intl = useIntl()
  // const chartData = {
  const chartData = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(90, 100, 0, 0)
    const green = ctx.createLinearGradient(30,10, 500,300)
    gradient.addColorStop(0, "#d60303")
    gradient.addColorStop(1, "#6b0202")
    green.addColorStop(0, "#242725")
    green.addColorStop(0.8, "#13932b")
    green.addColorStop(1, "#0bc32e")

    return {
      labels: props.label,
      datasets: [
        {
          label: intl.formatMessage({ id: "Total Confirmed Cases" }),
          data: props.data,
          backgroundColor: gradient,
        },
        {
          label:  intl.formatMessage({ id: "Total Death Cases" }),
          data: props.deathData,
          backgroundColor: "black",
        },
        {
          label:  intl.formatMessage({ id:"Total recovered Cases" }),
          data: props.recoveredData,
          backgroundColor: green,
        },
      ],
    }
  }

  return (
    <div className="chart" style={{ height: "50vh" }}>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text:intl.formatMessage({ id: "Total Cases Stats" }),
            fontSize: 25,
            fontFamily: "Lato",
          },
        }}
      />
    </div>
  )
}
export default Visualiz
