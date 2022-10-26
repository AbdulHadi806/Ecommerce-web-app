import React from 'react'
import { useSelector,useDispatch } from "react-redux"


import { Link } from "react-router-dom";

// importing MUI components
import { Container, Typography, Grid, CardActionArea, CardActions, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// importing action
import {filterList, descriptionHandler, countAdd} from '../redux/action'

export default function JacketsContent() {
    const data = useSelector(state => state.ShopItems)

    const items = data.filter(data => {
        return data.category.indexOf("men's clothing") !== -1;
    })

  const dispatch = useDispatch()

  const cartListHandler = (id) => {
      dispatch(filterList(id));
  }; 
  const countAddHandler = () => {
    dispatch(countAdd())
  }  

  return (
    <Container maxWidth='xl' sx={{ mt: 16 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container>
        {items.map((val) => {
          return (
            <Grid xs={12} md={5} xl={3} item key={val.id} sx = {{my: 3}}>
              <Card sx={{ width: 319, height: "100%",display: 'flex',flexDirection: 'column' }}>
                <Link to="/description" onClick={(e)=> {dispatch(descriptionHandler(val.id))}} style={{color: '#000', textDecoration: "none"}}>
                <CardActionArea>
                <CardMedia style = {{objectFit: "contain"}}
                      component="img"
                      image={val.image}
                      sx = {{py: 1, width: 240, height: 240, mx: "auto"}}
                      alt={val.title}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography>{val.price} USD</Typography>
                  </CardContent>
                </Link>
                <CardActions sx = {{height: "100%", alignItems: 'flex-end'}}>
                  <Button onClick={(e)=> {
                    e.preventDefault();
                    countAddHandler()
                    cartListHandler(val)
                    }} size="small" variant = "contained" sx = {{width: "100%", bgcolor: "#000",borderRadius: 0, color: "#fff", height: "46px", ':hover': {
                      bgcolor: '#212121', 
                    },}}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}