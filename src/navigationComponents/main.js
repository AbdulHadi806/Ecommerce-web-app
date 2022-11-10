import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// importing components
import Banner from '../components/banner.js'
import LastestCollection from '../components/Latest-collection.js'

export default function Mainpage({loading}) {
  return (
    <>
    {loading ? <ClimbingBoxLoader
  color={"#36d7b7"}
  style = {{textAlign: "center"}}
  loading={loading}
  size={20}
  aria-label="Loading Spinner"
  data-testid="loader"
/>:     <Banner />}
    {loading ? <ClimbingBoxLoader
  color={"#36d7b7"}
  style = {{textAlign: "center"}}
  loading={loading}
  size={20}
  aria-label="Loading Spinner"
  data-testid="loader"
/>: <LastestCollection />}
    </>
  )
}