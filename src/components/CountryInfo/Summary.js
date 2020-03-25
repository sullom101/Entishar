import React, { useState, useEffect } from "react"
import axios from "axios"
import {Container} from 'reactstrap' 

const Summary = props => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const summaryData = async () => {
      const getSummary = await axios
        .get(`https://api.covid19api.com/summary`)
        .then(res => {
          const find = res.data.Countries.find(el => el.Slug == props.data.Slug)
          return find
        })
        .catch(err => console.log(err))
      console.log("loging returned summary data", getSummary)
      setSummary(getSummary)
    }
    summaryData()
    console.log("getSummary Data", summary)
  }, [])

  return (
    <Container className="card" style={{ padding: "2rem", margin:'2rem', border:'none' }}>
      <p>{summary!==null? summary.TotalDeaths :''}</p>
      <p>{summary!==null? summary.TotalConfirmed:''}</p>
      <p>{/* {props.TotalConfirmed} */}</p>
    </Container>
  )
}

const emptyData = data=>(
    <p>Loading ....</p>
)

export default Summary
