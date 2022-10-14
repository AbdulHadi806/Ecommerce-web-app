import React from 'react'
import { useSelector } from "react-redux"

// importing MUI compoenents here
import {Container, Typography, Grid, Link, Button} from "@mui/material";


// importing icons
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    const Count = useSelector(state => state.CountReducer)
    console.log(Count)
    const navArray = ["Home", "Jackets", "Shoes", "Hoodies", "Kids"]
  return (
    <Container maxWidth = {1300} sx = {{py: 2}}>
        <Grid container>
            <Grid item xs = {2} lg = {4}>
                <Link href = '#' sx = {{color: 'color.primary.header'}}><DoneIcon fontSize = 'large' /></Link>
            </Grid>
            
            {/*----------navigation is mapped here here-----------*/}

            <Grid item xs = {7} lg = {4} sx = {{display: 'flex',flexWrap: "wrap",alignItems: "center", justifyContent:'center'}}>
                {navArray.map((val)=> {
                    return (<Button key = {Math.random()}><Link variant="h6" href ='#'  sx = {{textDecoration: 'none', color: 'color.primary.dark', pr:1}} >{val} </Link></Button>)
                })}
            </Grid>
            <Grid item xs = {3} lg = {4} sx = {{display: 'flex',flexWrap: "wrap",alignItems: "center", justifyContent:'flex-end'}}>
                <Button><Link sx = {{position:'relative' ,textDecoration: 'none', color: 'color.primary.dark', pr:1}}><ShoppingCartIcon fontSize = 'large' /><Typography variant='h5' sx = {{position: 'absolute', right: -10, top: 7}}>{Count}</Typography></Link></Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Header