
import React, { useRef, useEffect } from "react"
import { Link  } from "gatsby-plugin-intl"
const SearchResult = props => {
  console.log(props.data)
  return (
    <Link to={`/country/${props.data.Slug}`}>
      <li
        style={{
          color: "white",
          listStyleType: "none",
          backgroundColor: "#f2cc85",
          borderRadius: 10,
          margin: 10,
          padding: 5,
        }}
      >
        {" "}
        {props.data.Country}
      </li>
    </Link>
  )
}

export default SearchResult


// function useOutsideAlerter(ref, show ) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event, show) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         // console.log("You clicked outside of me!")
//         if(show=== true){

//         }
//       }
//     }

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [ref])
// }

/**
 * Component that alerts if you click outside of it
 */
// export default function OutsideAlerter(props) {
// //   const wrapperRef = useRef(null)
// //   useOutsideAlerter(wrapperRef,show)

  
    
//       {props.data
//         .filter(el => el.Country.indexOf(props.inputText) !== -1)
//         .map((el, index) => {
//           if (el.Country === "" || el.Slug === "") {
//             return ""
//           } else {
//             return (<Country key={index} data={el} />)
//           }
//         }) }
    
// }
