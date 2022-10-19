import React from 'react'
import { useSelector,useDispatch } from "react-redux"

// importing MUI components
import { Container, Typography, Grid, CardActionArea, CardActions, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// importing action
import {addHandler, filterList} from '../redux/action'

export default function WomanCloths() {
    const data = useSelector(state => state.Data)
    const val = data.filter(data => {
        return data.category.indexOf("women's clothing") !== -1;
    })


  const dispatch = useDispatch()

  const filterListHandler = (id) => {
      dispatch(filterList(id));
  }; 
  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container>
        {val.map((val) => {
          return (
            <Grid xs={12} md={4} xl={3} sx = {{my: 2}} item key={val.id}>
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
                  <Button onClick={(e)=> {
                    e.preventDefault();
                    dispatch(addHandler());
                    filterListHandler(val.id)
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
