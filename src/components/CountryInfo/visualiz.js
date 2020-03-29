import React from "react"
import { Bar, Line, Pie } from "react-chartjs-2"

const  Visualiz= (props)=> {
  const chartData = {
    labels: props.label,
    datasets: [
      {
        label: "Total Confirmed Cases",
        data: props.data,
        backgroundColor: "blue" 
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
    <div className="chart">
      <Line
        data={chartData}
        options={{
          title:{
            display:true,
            text:'Total cases Stats ',
            fontSize:25,
            fontFamily:'Lato'
          },
         
        }}
      />
    </div>
  )
}
export default Visualiz;