import React from "react"
import { Line } from "react-chartjs-2"

const Visualiz = props => {
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
          label: "Total Confirmed Cases",
          data: props.data,
          backgroundColor: gradient,
        },
        {
          label: "Total Death Cases",
          data: props.deathData,
          backgroundColor: "black",
        },
        {
          label: "Total recovered Cases",
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
            text: "Total cases Stats",
            fontSize: 25,
            fontFamily: "Lato",
          },
        }}
      />
    </div>
  )
}
export default Visualiz
