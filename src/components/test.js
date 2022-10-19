import React from 'react'
import { useSelector, useDispatch } from "react-redux"

// importing MUI compoenents here
import { Container, Typography, Grid, CardActionArea, CardActions, Button, Card, CardContent, CardMedia } from "@mui/material";


// importing actions here
import { removeItem, removeCountHandler } from '../redux/action'


export default function Test() {
  const filterListItems = useSelector(state => state.FilterList)
  const dispatch = useDispatch()
  const itemDeleteHandler = (id) => {
    dispatch(removeItem(id))
  }

  console.log(filterListItems)

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography>
      </Typography>
      <Grid container>
        {filterListItems.map((val) => {
          
          return (
            <Grid xs={12} md={4} xl={3} sx={{ my: 2 }} item key={val.id}>
              <Card sx={{ maxWidth: 345 }}>
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
                <CardActions>
                  <Button onClick={(e) => {e.preventDefault();itemDeleteHandler(val.id); dispatch(removeCountHandler())}} size="small" color="primary">
                    Delete From Cart
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
