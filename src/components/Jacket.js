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
  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container>
        {items.map((val) => {
          return (
            <Grid xs={12} md={4} xl={3} sx = {{my: 2}} item key={val.id}>
              <Card sx={{ maxWidth: 345 }}>
                <Link to="/description" onClick={(e)=> {dispatch(descriptionHandler(val.id))}} style={{color: '#000', textDecoration: "none"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="280"
                    image={val.image}
                    alt={val.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography>{val.price} USD</Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
                <CardActions>
                  <Button onClick={(e)=> {
                    e.preventDefault();
                    dispatch(countAdd())
                    cartListHandler(val.id)
                    }} size="small" color="primary">
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