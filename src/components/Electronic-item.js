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

export default function ElectronicsItem() {
    const data = useSelector(state => state.ShopItems)
    const items = data.filter(data => {
        return data.category.indexOf("electronics") !== -1;
    })


  const dispatch = useDispatch()

  const cartListHandler = (id) => {
      dispatch(filterList(id));
  }; 
  const countAddHandler = () => {
    dispatch(countAdd())
  } 

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container>
        {items.map((val) => {
          return (
            <Grid xs={12} md={5} xl={4} sx = {{display: "flex", my: 2, justifyContent: "center", mx: 'auto'}} item key={val.id}>
              <Card sx={{ width: 400, height: "100%",display: 'flex',flexDirection: 'column' }}>
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
                <CardActions sx = {{height: "100%", alignItems: 'flex-end'}}>
                  <Button onClick={(e)=> {
                    e.preventDefault();
                    countAddHandler()
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