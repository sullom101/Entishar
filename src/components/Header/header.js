import React, { useEffect, useState, useRef } from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Head from "../StyledComponents/header"
import Input from "../StyledComponents/Input"
import Country from "./searchResults"

const Header = props => {
  const [data, setData] = useState(null)
  const [inputText, setInputText] = useState("")
  const [filtered, setFiltered] = useState(null)
  const [show, setShow] = useState(false)
  const wrapperRef = useRef(null)
  // useOutsideAlerter(wrapperRef, show)

  const CountryData = useStaticQuery(graphql`
    query SiteCountries {
      allInternalCountries {
        edges {
          node {
            Country
            Slug
          }
        }
      }
    }
  `)
  const searchData = CountryData.allInternalCountries.edges
  useEffect(() => {
    const removeRedun = () => {
      let array = []
      searchData.map(el => {
        if (el.node.Country !== null) {
          array.push({
            Country: el.node.Country.toLowerCase(),
            Slug: el.node.Slug,
          })
        }
        return
      })
      // console.log("this is array redunduncy", array)
      setData(array)
      return array
    }
    removeRedun()

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleClickOutside = e => {
    if (wrapperRef.current.contains(e.target)) {
      // inside click
      console.log("inside click")
      setShow(true)
    } else {
      // Outside Click
      console.log("outside click")
      setShow(false)
    }
  }

  const filterCountries = val => {
    const value = val.target.value.toLowerCase()
    console.log("this is Data from filtered countried function", data)
    const filteredData = data.filter(el => {
      // console.log(el.Country)
      if (el.Country !== null) {
        return el.Country.toLowerCase().includes(value)
      }
      return false
    })
    // setInputText(value)

    setFiltered(filteredData)
    // console.log("this is filtered data", filteredData)
  }

  return (
    <Head>
      <Container
        className="container"
        style={{
          backgroundColor: "#1f1d1d",
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: "10px",
        }}
        fluid={true}
      >
        <div>
          <Link to={"/"}>
            <h1
              style={{
                marginTop: 10,
                marginBottom: 10,
                color: "white",
                fontFamily: "Lato",
              }}
            >
              {" "}
              C
              <span style={{ marginRight: 5, marginLeft: 5 }}>
                <img
                  src={require("../../images/virus.png")}
                  width={43}
                  style={{ marginBottom: 0 }}
                />
              </span>
              vid-19 Outbreak Live Updates
            </h1>
          </Link>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gridColumnGap: "10px",
            }}
          >
            <div
              style={{ alignSelf: "center", position: "relative" }}
              ref={wrapperRef}
            >
              {" "}
              <label
                style={{
                  marginBottom: 0,
                  backgroundColor: "white",
                  borderRadius: 10,
                  border: "1px solid gray",
                }}
              >
                {/* <button
                  style={{
                    width: "20%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                > */}
                <img
                  src={require("../../images/search.png")}
                  width={32}
                  style={{ margin: 0, padding: "0 3px" }}
                />
                {/* </button> */}

                <Input
                  name="search"
                  type="text"
                  onChange={val => {
                    setInputText(val.target.value.toLocaleLowerCase())
                    filterCountries(val)
                  }}
                />
              </label>
              <ul
                style={{
                  position: "absolute",
                  margin: 0,
                  width: "69%",
                  backgroundColor: "#f2cc85",
                  display: show ? "block" : "none",
                  borderRadius: 12,
                  zIndex: 2,
                }}
              >
                {inputText !== "" && filtered !== null
                  ? filtered
                      .filter(el => el.Country.indexOf(inputText) !== -1)
                      .map((el, index) => {
                        if (el.Country === "" || el.Slug === "") {
                          return ""
                        } else {
                          return <Country key={index} data={el} />
                        }
                      })
                  : ""}
              </ul>
            </div>
            <div>
              {" "}
              <img
                src={require("../../images/vector.png")}
                width={43}
                style={{ marginBottom: 0, width: "80%" }}
              />{" "}
            </div>
          </div>
        </div>
      </Container>
      <Container
        style={{
          marginTop: "5%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridColumnGap: "5%",
        }}
      >
        <Link
          to={"/country/malaysia"}
          style={{
            backgroundColor: "#e5e5e5",
            padding: "0.5rem 0",
            margin: 0,
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <img
            src={require("../../images/home.png")}
            style={{
              width: 50,
              marginBottom: "0.5rem",
            }}
          />
          <p style={{ margin: 0 }}>Home</p>
        </Link>
        <Link
          to={"/"}
          style={{
            backgroundColor: "#e5e5e5",
            padding: "0.5rem 0",
            margin: 0,
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <img
            src={require("../../images/world.png")}
            style={{ width: 50, marginBottom: "0.5rem" }}
          />
          <p style={{ margin: 0 }}>World</p>
        </Link>
      </Container>
    </Head>
  )
}

function useOutsideAlerter(ref, show) {
  const showing = show

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    function handleClickOutside(event) {
      if (show === true) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("You clicked outside of me! show is true")
          return
        }
        console.log("show is false")
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

export default Header
