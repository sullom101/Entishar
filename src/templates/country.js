import React from "react"
import { graphql } from "gatsby"

import CountryPage from "../pages/country-page"

export default ({ data }) => {
  const countryData = data.allInternalCountries.edges[0].node

  console.log("data is", countryData)

  return <CountryPage data={countryData} />
}
export const query = graphql`
  query($slug: String!) {
    allInternalCountries(filter: { country: { eq: $slug }  }) {
      edges {
        node {
          deaths
          deathsPerOneMillion
          todayCases
          todayDeaths
          recovered
          critical
          active
          cases
          casesPerOneMillion
          country
          countryInfo {
            iso3
            lat
            long
            iso2
            flag
          }
        }
      }
    }
  }
`
