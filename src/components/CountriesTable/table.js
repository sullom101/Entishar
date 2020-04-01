import React from "react"
import { Table } from "reactstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const TableData = props => {
  const data = props.data
  if (data !== null) {
    return (
      <div className="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="table-responsive table-hover">
          <Table bordered style={{ marginBottom: 0 }}>
            <thead>
              <tr>
                <th>Country {data !== null ? data.length - 2 : "(...)"}</th>
                <td> Confirmed </td>
                <td> Deaths </td>
                <td> Recovered </td>
              </tr>
            </thead>
            <tbody>
              {data == null
                ? "Loading...."
                : data.map((el, index) => {
                    if (el.Country !== "") {
                      return (
                        <tr key={index}>
                          <td>
                            <Link
                              to={`country/${el.Slug}`}
                              stata={{ data: el }}
                              data={el}
                            >
                              {" "}
                              <p> {el.Country} </p>
                            </Link>
                          </td>
                          <td style={{ color: "red" }}>
                            {" "}
                            {el.TotalConfirmed}{" "}
                            <span style={{ float: "right", fontSize: 12 }}>
                              {" "}
                              &#8593; {el.NewConfirmed}{" "}
                            </span>{" "}
                          </td>
                          <td style={{ color: "black" }}>
                            {" "}
                            {el.TotalDeaths}{" "}
                            <span style={{ float: "right", fontSize: 12 }}>
                              {" "}
                              &#8593; {el.NewDeaths}
                            </span>{" "}
                          </td>
                          <td style={{ color: "green" }}>
                            {" "}
                            {el.TotalRecovered}{" "}
                            <span style={{ float: "right", fontSize: 12 }}>
                              &#8593; {el.NewRecovered}
                            </span>{" "}
                          </td>
                        </tr>
                      )
                    }
                  })}
            </tbody>
          </Table>
          <p>
            <span style={{ fontSize: "10px", color: "#757170" }}>
              This table gets updated once each day with data by{" "}
              <ATag
                href="https://www.worldometers.info/coronavirus"
                target="_blank"
              >
                {" "}
                Worldometers &{" "}
              </ATag>{" "}
              <ATag
                href="https://github.com/CSSEGISandData/COVID-19"
                target="_blank"
              >
                Johns Hopkins{" "}
              </ATag> if you want more accurate stats check country pages
            </span>
          </p>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default TableData
const ATag = styled.a`
  color: #007bff !important;
`
