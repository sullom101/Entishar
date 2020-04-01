import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap:5%;
  margin: 1rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default function Frames() {
  return (
    <Wrapper>
      <iframe
        title="Growth rate of confirmed deaths in selected countries"
        aria-label="Interactive line chart"
        id="datawrapper-chart-8B22c"
        src="//datawrapper.dwcdn.net/8B22c/1/"
        scrolling="no"
        frameBorder="0"
        style={{ width: 0, minWidth: "100%", border: "none" }}
        height="514"
      ></iframe>
      <iframe
        title="New confirmed COVID&ndash;19 cases &amp;amp; deaths worldwide"
        aria-label="Interactive area chart"
        id="datawrapper-chart-lhnAP"
        src="//datawrapper.dwcdn.net/lhnAP/1/"
        scrolling="no"
        frameBorder="0"
        style={{ minWidth: "100%", border: "none" }}
        height="401"
      ></iframe>
    </Wrapper>
  )
}
