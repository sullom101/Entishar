import React from "react"
import { Pie } from "react-chartjs-2"

const PieChart = props => {
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
      labels: ["Recovery Rate", "Death Rate",'Others'],
      datasets: [
        {
          data: [props.RecoveryRate, props.DeathRate, 100-props.DeathRate - props.RecoveryRate],
          backgroundColor: [green, gradient,'e5e5e5'],
          hoverBackgroundColor: [green, gradient, '#e5e5e5'],
        },
      ],
    }
  }
  const option = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex]
          var currentValue = dataset.data[tooltipItem.index]
          var percentage = currentValue.toFixed(1)
          return currentValue + " (" + percentage + "%)"
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index]
        },
      },
    },
  }
  return (
    <div className="chart" style={{ height: "50vh" }}>
      <Pie data={chartData} options={option} />
    </div>
  )
}
export default PieChart
