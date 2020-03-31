import React from "react"
import { Line } from "react-chartjs-2"

const Visualiz = props => {
  const chartData = {
    // chartData = (canvas)=>{
    // const ctx = canvas.getContext("2d")
    // const gradient = ctx.createLinearGradient(90, rgba(), 100, 0)
    // return{
    labels: props.label,
    datasets: [
      {
        label: "Total Confirmed Cases",
        data: props.data,
        backgroundColor: "#a80303",
      },
      {
        label: "Total Death Cases",
        data: props.deathData,
        backgroundColor: "9e9e9e",
      },
      {
        label: "Total recovered Cases",
        data: props.recoveredData,
        backgroundColor: "#13932b",
      },
    ],
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
