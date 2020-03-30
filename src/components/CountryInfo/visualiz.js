import React from "react"
import { Line } from "react-chartjs-2"

const Visualiz = props => {
  const chartData = {
    labels: props.label,
    datasets: [
      {
        label: "Total Confirmed Cases",
        data: props.data,
        backgroundColor: "blue",
      },
      {
        label: "Total Death Cases",
        data: props.deathData,
        backgroundColor: "red",
      },
      {
        label: "Total recovered Cases",
        data: props.recoveredData,
        backgroundColor: "green",
      },
    ],
  }
  return (
    <div className="chart" style={{height:'50vh'}}>
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
