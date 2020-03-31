import React from "react"
import styled from "styled-components"
const SVG = styled.svg`
  width: 350px;
  height: 100px;
  margin: 20px;
  display: inline-block;
`

const Spinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
      {/* <SVG
        version={"1.1"}
        id={"Layer_1"}
        xmlns={"http://www.w3.org/2000/svg"}
        xmlnsXlink={"http://www.w3.org/1999/xlink"}
        x={0}
        y={0}
        viewBox={"0 0 100 100"}
        enableBackground
        enableBackground={"new 0 0 100 100"}
        xmlSpace={"preserve"}
      >
        <rect
          fill={"#1f1d1d"}
          width={6}
          height={100}
          transform={"translate(0) rotate(180 3 50)"}
        >
          <animate
            attributeName={"height"}
            attributeType={"XML"}
            dur={"1s"}
            values={"30; 100; 30"}
            repeatCount={"indefinite"}
          />
        </rect>
        <rect
          x={"17"}
          fill={"#1f1d1d"}
          width={6}
          height={100}
          transform={"translate(0) rotate(180 20 50)"}
        >
          <animate
            attributeName={"height"}
            attributeType={"XML"}
            dur={"1s"}
            values={"30; 100; 30"}
            repeatCount={"indefinite"}
            begin={"0.1s"}
          />
        </rect>
        <rect
          x={40}
          fill={"#1f1d1d"}
          width={6}
          height={100}
          transform={"translate(0) rotate(180 40 50)"}
        >
          <animate
            attributeName={"height"}
            attributeType={"XML"}
            dur={"1s"}
            values={"30; 100; 30"}
            repeatCount={"indefinite"}
            begin={"0.3s"}
          />
        </rect>
        <rect
          x={"60"}
          fill={"#1f1d1d"}
          width={6}
          height={100}
          transform={"translate(0) rotate(180 58 50)"}
        >
          <animate
            attributeName={"height"}
            attributeType={"XML"}
            dur={"1s"}
            values={"30; 100; 30"}
            repeatCount={"indefinite"}
            begin={"0.5s"}
          />
        </rect>
        <rect
          x={80}
          fill="#1f1d1d"
          width={6}
          height={100}
          transform={"translate(0) rotate(180 76 50)"}
        >
          <animate
            attributeName={"height"}
            attributeType={"XML"}
            dur={"1s"}
            values={"30; 100; 30"}
            repeatCount={"indefinite"}
            begin={"0.1s"}
          />
        </rect>
      </SVG>
     */}
      <SVG
        version="1.1"
        id="L1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <circle
          fill="none"
          stroke="#950202"
          stroke-width="6"
          stroke-miterlimit="15"
          stroke-dasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          fill="none"
          stroke="#950202"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-dasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <g fill="#950202">
          <rect x="30" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1"
            />
          </rect>
          <rect x="40" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2"
            />
          </rect>
          <rect x="50" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </rect>
          <rect x="60" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4"
            />
          </rect>
          <rect x="70" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.5"
            />
          </rect>
        </g>
      </SVG>
      <p>Loading Stats </p>
    </div>
  )
}
export default Spinner
