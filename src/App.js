import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"

// importing MUI components
import {createTheme} from "@mui/material";

// importing actions here
import {apiFetcherDispatch} from "./redux/action" 

// importing components
import Header from './components/header.js'
import Banner from './components/banner.js'
import LastestCollection from './components/Latest-collection.js'
import { Cases } from '@mui/icons-material';
// custom Theme
export const theme = createTheme({
  palette: {
    background: {
      light: '#fff',
      main: '#5bbc2f',
      dark: "#f3f3f3",
      contrastText: "#161c20",
    },
    color: {
      primary: {
        light: "#fff",
        main: "#222",
        dark: "#444",
        header: '#002884'
      }
    }
  }
})



function App() {

  const dispatch = useDispatch()
  // fetching api data here
  const api = "https://fakestoreapi.com/products"

useEffect(() => {
  const fetchApiData = async (api)=> {
      try {
          const response = await fetch(api)
          const data = await response.json()
          
          dispatch(apiFetcherDispatch(data))
      } catch (error) {
          console.log(error + "This is an error")
      }
  }
  fetchApiData(api)
}, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <LastestCollection />
    </div>
  );
}

export default App;
