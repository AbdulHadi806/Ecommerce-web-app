import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


// importing MUI compoenents here
import { Typography, Grid, Button } from "@mui/material";


// importing icons
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    const Count = useSelector(state => state.count)

    return (
        <Grid container sx={{ py: 2, px: 3, position: "fixed", top: 0, bottom: 0, height: 100, zIndex: 3, bgcolor: "#fff" }}>
            <Grid item xs={4} lg={4}>
                <Link to="/" sx={{ color: 'color.primary.header' }}><DoneIcon fontSize='large' /></Link>
            </Grid>

            <Grid item xs={4} lg={4} sx={{ display: 'flex', flexWrap: "wrap", alignItems: "center", justifyContent: 'center' }}>

                <Button><Link to="/" style={{ textDecoration: "none" }}> <Typography variant="h6" href='#' sx={{ fontSize: 17 ,textDecoration: 'none', color: 'color.primary.dark'}} >Home </Typography></Link></Button>
                <Button><Link to="/Jackets" style={{ textDecoration: "none" }}> <Typography variant="h6" href='#' sx={{fontSize: 17 , textDecoration: 'none', color: 'color.primary.dark'}} >Men clothing</Typography></Link></Button>
                <Button><Link to="/WomanClothsPage" style={{ textDecoration: "none" }} > <Typography variant="h6" href='#' sx={{fontSize: 17 , textDecoration: 'none', color: 'color.primary.dark'}} >Female</Typography></Link></Button>
                <Button><Link to="/Electronics" style={{ textDecoration: "none" }}> <Typography variant="h6" href='#' sx={{ fontSize: 17 ,textDecoration: 'none', color: 'color.primary.dark'}} >Electronics</Typography></Link></Button>
            </Grid>
            <Grid item xs={3} lg={4} sx={{ display: 'flex', flexWrap: "wrap", alignItems: "center", justifyContent: 'flex-end' }}>
            <Button variant="contained" sx = {{pr: 3, height: "100%",bgcolor: '#651fff'}}><Link to='/checkoutPage' style={{textDecoration: "none", color: "#fff"}} ><Typography variant='h5'>Checkout</Typography></Link></Button>
                <Button><Link to='/Cart' ><ShoppingCartIcon fontSize='large' /><Typography variant='h5' sx={{position: 'absolute', right: -10, top: 7 }}>{Count}</Typography></Link></Button>
            </Grid>
        </Grid>
    )
}

export default Header