import React, { useEffect, useState, useRef } from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import {slugify} from '../../utils/slugMaker'
import Head from "../StyledComponents/header"
import Input from "../StyledComponents/Input"
import Country from "./searchResults"
import Image from "./Vector"
import {
  Link,
  FormattedMessage,
  useIntl,
  changeLocale,
  IntlContextConsumer,
} from "gatsby-plugin-intl"

const Header = props => {
  const [data, setData] = useState(null)
  const [inputText, setInputText] = useState("")
  const [filtered, setFiltered] = useState(null)
  const [show, setShow] = useState(false)
  const wrapperRef = useRef(null)
  const intl = useIntl()
  const languageName = {
    en: "English",
    ar: "العربية",
  }

  const CountryData = useStaticQuery(graphql`
    query SiteCountries {
      allInternalCountries {
        edges {
          node {
            active
            cases
            casesPerOneMillion
            country
            countryInfo {
              flag
              iso2
              iso3
              long
              lat
            }
            critical
            deathsPerOneMillion
            deaths
            recovered
            todayCases
            todayDeaths
            id
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
        console.log('this is object', el.node)
        if (typeof el.node.country === "string" && el.node.country !=="" ) {
          array.push({
            Country: el.node.country,
            Slug: slugify(el.node.country),
          })
        }
        return
      })
      // console.log("this is array redunduncy", array)
      setData(array)
      console.log('array of slugs and country',array)
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
            {intl.locale === "ar" ? (
              <h1
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  color: "white",
                  fontFamily: "Lato",
                  textAlign: "right",
                }}
              >
                {" "}
                {/* {intl.formatMessage({ id: "colal" })} */}
                <FormattedMessage id="C" />
                <span style={{ marginRight: 5, marginLeft: 5 }}>
                  <img
                    src={require("../../images/logo.png")}
                    width={43}
                    style={{ marginBottom: 0 }}
                  />
                </span>
                <FormattedMessage id="vid-19 Outbreak Live Updates" />
              </h1>
            ) : (
              <h1
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  color: "white",
                  fontFamily: "Lato",
                }}
              >
                {" "}
                <FormattedMessage id="C" />
                <span style={{ marginRight: 5, marginLeft: 5 }}>
                  <img
                    src={require("../../images/logo.png")}
                    width={43}
                    style={{ marginBottom: 0 }}
                  />
                </span>
                <FormattedMessage id="vid-19 Outbreak Live Updates" />
              </h1>
            )}
          </Link>
          {intl.locale === "ar" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gridColumnGap: "10px",
                direction: "rtl",
              }}
            >
              <div>
                {" "}
                <Image
                  width={43}
                  style={{ marginBottom: 0, width: "80%" }}
                />{" "}
              </div>
              <div
                style={{
                  alignSelf: "center",
                  position: "relative",
                  justifySelf: "end",
                }}
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
            </div>
          ) : (
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
                <Image
                  width={43}
                  style={{ marginBottom: 0, width: "80%" }}
                />{" "}
              </div>
            </div>
          )}
        </div>
      </Container>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "5%",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <span></span>
        <div>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <a key={language} onClick={() => changeLocale(language)}>
                  <p
                    style={{
                      textAlign: language === "ar" ? "right" : "left",
                      color: currentLocale === language ? `#950202` : `#1f1d1d`,
                      margin: 10,
                      textDecoration: currentLocale === language ? `underline`: 'none',
                      cursor: `pointer`,
                      display: `inline-block`,
                    }}
                  >
                    {languageName[language]}
                  </p>
                </a>
              ))
            }
          </IntlContextConsumer>
        </div>

        <span></span>
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
          <p style={{ margin: 0 }}>
            <FormattedMessage id="Home" />
          </p>
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
          <p style={{ margin: 0 }}>
            <FormattedMessage id="World" />
          </p>
        </Link>
      </Container>
    </Head>
  )
}

export default Header
