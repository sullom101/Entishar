import React from "react"
import axios from 'axios';
import { Table,  Label, Input } from "reactstrap"

const url = 'https://api.covid19api.com/summary';


const TableData = () => {
    const fetch = fetchData();
    

  return (
    <div className="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>

      <div className>
        <Label
          for="searchQuery"
          size="lg"
          style={{ display: "flex" }}
          className="float-right"
        >
          {" "}
          Search
          <Input type="text" name="search" />
        </Label>
      </div>
    
    
      <Table bordered>
        <thead>
          <tr>
            <th>TOTAL (158)</th>
            {/* <th>CONFIRMED</th>
            <th>DEATH</th>
            <th>Recovered</th>
            <th>FATALITY RATE</th>
            <th>RECOVERY RATE</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">Country</th> */}
            {/* <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td> */}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL </th>
            {/* <th>All CONFIRMED Cases </th>
            <th>All DEATH Cases</th>
            <th>All Recovered cases</th>
            <th>FATALITY RATE</th>
            <th>RECOVERY RATE</th> */}
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}


const fetchData = async ()=>{
    
    const fetch = await axios.get(url).then( res=> res.data );
    console.log('outside the fucking function', fetch.Countries);
    return fetch;
} 



export default TableData
