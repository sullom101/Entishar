import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Label, Input } from "reactstrap"
import {
  countryTransformer,
  countryCode,
  checkCountry,
} from "../../utils/countryTransformer"
// import { Link } from "gatsby";
import ReactCountryFlag from "react-country-flag"
import { Link } from "gatsby"

const TableData = () => {
  const [data, setData] = useState(null)
  // const [NonrefactoredData, setNonRefactored] = useState(0)
  const [confirmed, setConfirmed] = useState(0)

  useEffect(() => {
    const refactor = data => {
      let newArray = data
        .filter(el => {
          if (checkCountry(el.Country)) {
            if (el.TotalConfirmed !== 0) {
              return el
            }
          }
        })
        .sort((a, b) => {
          return b.TotalConfirmed - a.TotalConfirmed
        })
        .map(el => {
          return {
            Country: el.Country,
            CountryArabic: countryTransformer(el.Country),
            CountryCode: countryCode(el.Country),
            Slug: el.Slug,
            NewConfirmed: el.NewConfirmed,
            TotalConfirmed: el.TotalConfirmed,
            NewDeaths: el.NewDeaths,
            TotalDeaths: el.TotalDeaths,
            NewRecovered: el.NewRecovered,
            TotalRecovered: el.TotalRecovered,
          }
        })
      console.log("new array ", newArray)
      return newArray
    }

    async function fetchData() {
      const url = "https://api.covid19api.com/summary"
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

      const newData = refactor(result)
      setData(newData)
      // setNonRefactored(result)
      confirmedCases(result)
    }
    fetchData()
  }, [])
  const confirmedCases = result => {
    let reducer = result
      .map(el => el.TotalConfirmed)
      .reduce((acc, cur) => acc + cur)
    let reducer2 = result
      .map(el => el.NewConfirmed)
      .reduce((acc, cur) => acc + cur)
    setConfirmed(reducer + reducer2)
  }
  return (
    <div className="card" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <div>
        <Label
          for="searchQuery"
          size="lg"
          style={{ display: "flex" }}
          className="float-right"
        >
          {/* <ReactCountryFlag countryCode="US" svg/> */} Search
          <Input type="text" name="search" />
        </Label>
      </div>

      <Table bordered dir="rtl" style={{ marginBottom: 0 }}>
        <thead>
          <tr>
            <th>مجموع الدول المصابة {data !== null ? data.length : "(...)"}</th>

            <td> جميع الحالات المصابة {confirmed !== 0 ? confirmed : ""}</td>
            <td> جميع حالات الوفيات </td>
            <td> جميع حالات التعافي </td>
          </tr>
        </thead>
        <tbody>
          {data == null
            ? "loading...."
            : data.map((el, index) => (
                <tr key={index}>
                  <td style={{ display: "flex", justifyContent: "flex-start" }}>
                    <Link to="page-2" stata={{ data: el }} data={el}>
                      {" "}
                      <ReactCountryFlag
                        className="emojiFlag"
                        countryCode={countryCode(el.Country)}
                        key={index}
                        style={{
                          fontSize: "2em",
                          lineHeight: "2em",
                          marginBottom: 0,
                        }}
                        aria-label={el.CountryArabic}
                        svg
                      />
                      {el.CountryArabic}
                    </Link>
                  </td>
                  <td> {el.TotalConfirmed} </td>
                  <td> {el.TotalDeaths} </td>
                  <td> {el.TotalRecovered} </td>
                </tr>
              ))}
        </tbody>
        <tfoot>
          <tr>
            <th>الاجمالي </th>
            <th>اجمالي الحالات </th>
            <th>اجمالي الوفيات </th>
            <th>اجمالي التعافي</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default TableData
