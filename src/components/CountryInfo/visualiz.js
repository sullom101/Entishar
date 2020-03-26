import React,{useState,useEffect} from "react"
import * as d3 from "d3"
import { useD3 } from "d3blackbox"

const getRandomData = () =>
  d3.range(20).map(() => ({ x: Math.random(), y: Math.random() }))

const Axis = ({ x, y, scale, axisType }) => {
  const typeName = axisType === 'left'? 'axisLeft': 'axisBottom' 
  const ref = useD3(el => d3.select(el).call(d3[typeName](scale)))
  return <g transform={`translate(${x},${y})`} ref={ref} />
}
const Visualiz = (props) => {
  
  const d3Data = props.data
  const width = 800
  const height = 400
  const TotalNumber = props.summary
  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([45, width])
  const yScale = d3
    .scaleLinear()
    .domain([0,  TotalNumber])
    .range([ height-45, 5])

  return (
    <svg width={width} height={height}>
      {d3Data.map(d => (
        <circle cx={xScale(d.x)} cy={yScale(d.y)} r={5} />
      ))}
      <Axis x={40} y={0} scale={yScale}  axisType="left"/>
      <Axis x={0} y={height-40} scale={xScale}  axisType="bottom"/>
    </svg>
  )
}

export default Visualiz
