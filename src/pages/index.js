import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import Table from "../components/Table/table"
import MainStat from "../components/MainStat/mainStat"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1> Live update from covid-19</h1>
    </div>
    <MainStat />
    <Table />
    
      <iframe
        style={{ width: "100%" }}
        width="100%"
        height="550"
        src="https://www.outbreak.my/widget/viruscompare"
        frameBorder="0"
        allow="autoplay; encrypted-media;
picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    
    
  </Layout>
)


export default IndexPage
