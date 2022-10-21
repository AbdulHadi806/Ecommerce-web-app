import React from 'react'
import { useSelector,useDispatch} from "react-redux"

// importing MUI components
import { Container, Typography, Grid, CardActionArea, CardActions, Button, Card,CardContent ,CardMedia} from "@mui/material";

// importing actions here
import {filterList, countAdd} from '../redux/action'


export default function Description() {
    const itemsDescription = useSelector(state => state.ProductDetails)
    const Count = useSelector(state => state.Count)

    const dispatch = useDispatch()

    const handleAddCart = (e)=> {
      dispatch(filterList(e));
      }
    const countAddHandler = () => {
      dispatch(countAdd())
    }  

  return (
        <Container maxWidth='xl' sx={{ py: 6 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container sx = {{justifyContent: 'center'}}>
            {itemsDescription.map((data)=>{
                return (
                    <Grid key = {data.id} xs={7} sx = {{my: 2}} item>
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
                    <Button onClick={(e)=> {countAddHandler();handleAddCart(data.id)}}  size="small" color="primary">
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
