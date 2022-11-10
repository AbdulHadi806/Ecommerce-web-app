import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

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
import Footer from "./components/footer.js";
import SignIn from "./components/Login"
import SignUp from "./components/checkOut"
import Dashboard from "./components/dashboard"
import ChangePassword from "./components/ResetPassword"
import UpdateInfo from "./components/Update-info"

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
  const [ currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  // fetching api data here
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchApiData = async (api) => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        dispatch(apiFetcherDispatch(data));
        setTimeout(()=> {
          setLoading(false)
        }, 2000)
      } catch (error) {
        console.log(error + "This is an error");
      }
    };
    fetchApiData(api);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="App">
        <Header  currentUser = {currentUser} />
        <Routes>
          {" "}
          <Route path="/" element={ <Mainpage loading = {loading}/>}></Route>
          <Route path="/Cart" element={<Cartpage currentUser = {currentUser}/>}></Route>
          <Route path="/Jackets" element={<Jackets />}></Route>
          <Route path="/Electronics" element={<ElectronicPage />}></Route>
          <Route path="/WomanClothsPage" element={<WomanClothsPage />}></Route>
          <Route path="/checkoutPage" element={<CheckoutPage />}></Route>
          <Route path="/description" element={<DescriptionPage />}></Route>
          <Route path="/SignIn" element={<SignIn/>}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Dashboard" element={<Dashboard currentUser = {currentUser} />}></Route>
          <Route path="/ChangePassword" element={<ChangePassword />}></Route>
          <Route path="/UpdateInfo" element={<UpdateInfo currentUser = {currentUser}/>}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
