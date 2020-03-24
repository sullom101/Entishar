import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allInternalCountries.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.Country} Country Stats</h1>
        <div dangerouslySetInnerHTML={{ __html: post.Slug }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
      
      allInternalCountries (filter: { Slug: { eq: $slug } }) {
        edges {
          node {
            Country
            Provinces
            Slug
          }
        }
      }
  }
`