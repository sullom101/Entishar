import React from "react"
import { Pie } from "react-chartjs-2"
import { useIntl } from "gatsby-plugin-intl"
const PieChart = props => {

  const intl = useIntl()

  const chartData = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(90, 100, 0, 0)
    const green = ctx.createLinearGradient(30,10, 500,300)
    gradient.addColorStop(0, "#d60303")
    gradient.addColorStop(1, "#6b0202")
    green.addColorStop(0, "#242725")
    green.addColorStop(1, "#13932b")


    return {
      labels: [ intl.formatMessage({ id:"Recovery Rate" }) ,intl.formatMessage({ id:"Death Rate" }) ,intl.formatMessage({ id:"Others" })],
      datasets: [
        {
          data: [props.RecoveryRate, props.DeathRate, 100-props.DeathRate - props.RecoveryRate],
          backgroundColor: ['green', '#000',  'red'],
          hoverBackgroundColor: [green, '#000',gradient],
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
