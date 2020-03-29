import React from "react"
import { Table } from "reactstrap"
import { Link } from "gatsby"

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
                            <span style={{ float: "right", fontSize: 12 }}> &#8593; {el.NewDeaths}</span>{" "}
                          </td>
                          <td style={{ color: "green" }}>
                            {" "}
                            {el.TotalRecovered}{" "}
                            
                            <span style={{ float: "right", fontSize: 12 }}>&#8593; {el.NewRecovered}</span>{" "}
                          </td>
                        </tr>
                      )
                    }
                  })}
            </tbody>
            {/* <tfoot>
              <tr>
                <th>الاجمالي </th>
                <th style={{ backgroundColor: "red", color: "white" }}>
                  {" "}
                  اجمالي الحالات {confirmed !== 0 ? confirmed : ""}{" "}
                </th>
                <th style={{ backgroundColor: "black", color: "white" }}>
                  اجمالي الوفيات{" "}
                </th>
                <th style={{ backgroundColor: "green", color: "white" }}>
                  اجمالي التعافي
                </th>
              </tr>
            </tfoot> */}
          </Table>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default TableData
