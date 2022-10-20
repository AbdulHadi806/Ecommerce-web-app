import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


// importing MUI compoenents here
import {Container, Typography, Grid, Button} from "@mui/material";


// importing icons
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    const Count = useSelector(state => state.count)
    
  return (
        <Grid container sx = {{py: 2, px: 3}}>
            <Grid item xs = {4} lg = {4}>
                <Link to = "/" sx = {{color: 'color.primary.header'}}><DoneIcon fontSize = 'large' /></Link>
            </Grid>
            
            {/*----------navigation is mapped here here-----------*/}

            <Grid item xs = {4} lg = {4} sx = {{display: 'flex',flexWrap: "wrap",alignItems: "center", justifyContent:'center'}}>

                    <Button><Link to = "/" style={{textDecoration: "none"}}> <Typography  variant="h6" href ='#'  sx = {{textDecoration: 'none', color: 'color.primary.dark', pr:1}} >Home </Typography></Link></Button>
                    <Button><Link to = "/Jackets" style={{textDecoration: "none"}}> <Typography  variant="h6" href ='#'  sx = {{textDecoration: 'none', color: 'color.primary.dark', pr:1}} >Men clothing</Typography></Link></Button>
                    <Button><Link to = "/WomanClothsPage" style={{textDecoration: "none"}} > <Typography  variant="h6" href ='#'  sx = {{textDecoration: 'none', color: 'color.primary.dark', pr:1}} >Female</Typography></Link></Button>
                    <Button><Link to = "/Electronics" style={{textDecoration: "none"}}> <Typography  variant="h6" href ='#'  sx = {{textDecoration: 'none', color: 'color.primary.dark', pr:1}} >Electronics</Typography></Link></Button>            
            </Grid>
            <Grid item xs = {3} lg = {4} sx = {{display: 'flex',flexWrap: "wrap",alignItems: "center", justifyContent:'flex-end'}}>
                <Button><Link to = '/Cart' ><ShoppingCartIcon fontSize = 'large' /><Typography variant='h5' sx = {{position: 'absolute', right: -10, top: 7}}>{Count}</Typography></Link></Button>
            </Grid>
        </Grid>
  )
}

export default Header