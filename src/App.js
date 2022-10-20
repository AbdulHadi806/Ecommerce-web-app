import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing MUI components
import { createTheme } from "@mui/material";

// importing actions here
import { apiFetcherDispatch } from "./redux/action";

// importing pages
import Cartpage from "./navigationComponents/Cartpage";
import Mainpage from "./navigationComponents/main.js";
import Jackets from "./navigationComponents/Jackets.js"
import ElectronicPage from "./navigationComponents/electronicPage"
import WomanClothsPage from "./navigationComponents/womanClothPage"
import CheckoutPage from "./navigationComponents/checkoutPage"
import DescriptionPage from "./navigationComponents/descriptionPage"


// importing components
import Header from "./components/header.js";  

// custom Theme
export const theme = createTheme({
  palette: {
    background: {
      light: "#fff",
      main: "#5bbc2f",
      dark: "#f3f3f3",
      contrastText: "#161c20",
    },
    color: {
      primary: {
        light: "#fff",
        main: "#222",
        dark: "#444",
        header: "#002884",
      },
    },
  },
});

function App() {
  const dispatch = useDispatch();
  // fetching api data here
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchApiData = async (api) => {
      try {
        const response = await fetch(api);
        const data = await response.json();

        dispatch(apiFetcherDispatch(data));
      } catch (error) {
        console.log(error + "This is an error");
      }
    };
    fetchApiData(api);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/Cart" element={<Cartpage />}></Route>
          <Route path="/Jackets" element={<Jackets />}></Route>
          <Route path="/Electronics" element={<ElectronicPage />}></Route>
          <Route path="/WomanClothsPage" element={<WomanClothsPage />}></Route>
          <Route path="/checkoutPage" element={<CheckoutPage />}></Route>
          <Route path="/description" element={<DescriptionPage />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
