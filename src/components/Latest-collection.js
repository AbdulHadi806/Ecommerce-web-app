import React from 'react'
import { useSelector, useDispatch } from "react-redux"

// importing react routing dom components
import { Link } from "react-router-dom";

// importing MUI components
import { Container, Typography, Grid, CardActionArea, CardActions, Button, Card,CardContent ,CardMedia} from "@mui/material";

// importing action
import { filterList, descriptionHandler} from '../redux/action'


function LastestCollection() {
  const items = useSelector(state => state.ShopItems)


  const dispatch = useDispatch()
  const cartListHandler = (obj) => {
      dispatch(filterList(obj));
  };

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
        Latest Collection
      </Typography>
      <Grid container>
        {items.map((val) => {
          return (
            <Grid  xs={12} md={4} xl={3} sx = {{display: "flex", my: 2, justifyContent: "center", mx: 'auto'}} item key={val.id}>
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
                    cartListHandler(val);
                    }} size="small"  variant = "contained" sx = {{width: "100%", bgcolor: "#000",borderRadius: 0, color: "#fff", height: "46px", ':hover': {
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

export default LastestCollection