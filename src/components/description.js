import React from 'react'
import { useSelector,useDispatch} from "react-redux"

// importing MUI components
import { Container, Typography, Grid, CardActionArea, CardActions, Button, Card,CardContent ,CardMedia} from "@mui/material";


import {addHandler, filterList} from '../redux/action'


export default function Description() {
    const data = useSelector(state => state.MoreDescriptionList)
    const dispatch = useDispatch()

    const filterListHandler = (id) => {
        dispatch(filterList(id));
    }; 

  return (
        <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container sx = {{justifyContent: 'center'}}>
            {data.map((data)=>{
                return (
                    <Grid xs={7} sx = {{my: 2}} item>
                <Card maxWidth = 'lg'>
                  <CardActionArea sx = {{display: 'flex', width: "100%"}}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={data.image}
                      alt='hello'
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                      </Typography>
                      <Typography gutterBottom  component="div">
                      {data.description}
                      </Typography>
                      <Typography sx = {{pt: 3}}>Rating: {data.rating.rate} stars</Typography>
                      <Typography>Price: {data.price} USD</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx = {{justifyContent:"flex-end"}}>
                    <Button onClick={(e)=> {
                    e.preventDefault();
                    dispatch(addHandler());
                    filterListHandler(data.id)
                    }}  size="small" color="primary">
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
