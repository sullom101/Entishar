import React from "react"
import { Table } from "reactstrap"
import styled from "styled-components"
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import { withLink } from "../../utils/countryTransformer"
import { countryTransformer } from "../../utils/countryTransformer"

const TableData = props => {
  const data = props.data
  if (data !== null) {
    return (
      <div className="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <div className="table-responsive table-hover">
          <Table bordered style={{ marginBottom: 0 }}>
            <thead>
              <tr>
                <td>
                  {" "}
                  <FormattedMessage id="Recovered" />{" "}
                </td>
                <td>
                  {" "}
                  <FormattedMessage id="Deaths" />{" "}
                </td>

                <td>
                  {" "}
                  <FormattedMessage id="Confirmed" />{" "}
                </td>
                <th style={{ textDecoration: "underline", textAlign: "end" }}>
                  <FormattedMessage id="Country" />{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {data == null
                ? "Loading...."
                : data.map((el, index) => {
                    if (el.Country !== "") {
                      return (
                        <tr key={index}>
                          <td style={{ color: "green" }}>
                            {" "}
                            {el.TotalRecovered}{" "}
                            <span style={{ float: "right", fontSize: 12 }}>
                              &#8593; {el.NewRecovered}
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

                          <td style={{ color: "red" }}>
                            {" "}
                            {el.TotalConfirmed}{" "}
                            <span style={{ float: "right", fontSize: 12 }}>
                              {" "}
                              &#8593; {el.NewConfirmed}{" "}
                            </span>{" "}
                          </td>

                          <td>
                            {withLink(el.Country) === true ? (
                              <Link
                                to={`/country/${el.Slug}`}
                                stata={{ data: el }}
                                data={el}
                              >
                                <p
                                  style={{
                                    textDecoration: "underline",
                                    textAlign: "end",
                                  }}
                                >
                                  {countryTransformer(el.Country)}
                                </p>
                              </Link>
                            ) : (
                              <p style={{
                                textDecoration: "underline",
                                textAlign: "end",
                              }}> {el.Country} </p>
                            )}
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
              </ATag>{" "}
              if you want more accurate stats check country pages
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
