import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Label, Input } from "reactstrap"
import { countryTransformer, countryCode } from "../../utils/countryTransformer"
// import { Link } from "gatsby";
import ReactCountryFlag from "react-country-flag";

const TableData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const url = "https://api.covid19api.com/summary";
      const result = await axios
        .get(url)
        .then(res => {
          console.debug("List of countries ", typeof res.data)
          if (typeof res.data !== "object") {
            const parsedData = JSON.parse(res.data)
            console.log("parsed data", parsedData)
            return parsedData.Countries
          } else {
            return res.data.Countries
          }
        })
        .catch(err => {
          console.log(err)
        })
      console.log("this is countries lists", result)
      setData(result)
    }

    fetchData()
  }, [])

  return (
    <div className="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <div>
        <Label
          for="searchQuery"
          size="lg"
          style={{ display: "flex" }}
          className="float-right"
        >
          {/* <ReactCountryFlag countryCode="US" svg/> */}
          {" "}
          Search
          <Input type="text" name="search" />
        </Label>
      </div>
      <Table bordered dir="rtl" style={{ marginBottom: 0 }}>
        <thead>
          <tr>
            <th>مجموع الدول المصابة {data !== null ? data.length : "(...)"}</th>
            {/* <td> الحالات الجديدة </td> */}
            <td> جميع الحالات المصابة</td>
            {/* <td>حالات الوفيات الجديدة </td> */}
            <td> جميع حالات الوفيات </td>
            {/* <td> حالات التعافي الجديدة </td> */}
            <td> جميع حالات التعافي </td>
          </tr>
        </thead>
        <tbody>
          {data == null
            ? "loading...."
            : data.map((el, index) => (
                <tr key={index}>
                  <td style={{display: 'flex', justifyContent : 'flex-start'}}>
                    {" "}
                    {/* <Link key={index} to="page-2"> */}
                      
                      <ReactCountryFlag
                        className="emojiFlag"
                        countryCode={countryCode(el.Country)}
                        key={index}
                        style={{
                          fontSize: "2em",
                          lineHeight: "2em",
                          marginBottom:0
                        }}
                        aria-label={el.Country}
                        svg
                      />
                      {countryTransformer(el.Country)}
                    {/* </Link>{" "} */}
                  </td>
                  {/* <td> {el.NewConfirmed} </td> */}
                  <td> {el.TotalConfirmed} </td>
                  {/* <td> {el.NewDeaths} </td> */}
                  <td> {el.TotalDeaths} </td>
                  {/* <td> {el.NewRecovered} </td> */}
                  <td> {el.TotalRecovered} </td>
                </tr>
              ))}
        </tbody>
        <tfoot>
          <tr>
            <th>الاجمالي </th>
            {/* <th> اجمالي الاصابات الحديثة </th> */}
            <th>اجمالي الحالات </th>
            {/* <th>اجمالي الوفيات الحديثة</th> */}
            <th>اجمالي الوفيات </th>
            {/* <th>اجمالي التعافي الحديثة </th> */}
            <th>اجمالي التعافي</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default TableData
