import React from "react";


import { useSelector, useDispatch } from "react-redux";

// importing react router dom Link
import { Link } from "react-router-dom";

// importing MUI compoenents here
import {
  Container,
  Typography,
  Grid,
  CardActionArea,
  CardActions,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// importing actions here
import { removeItem, countRemove } from "../redux/action";

export default function Cart() {
  const CartItems = useSelector((state) => state.CartItems);
  
  const newCartItems = [...new Set(CartItems)];



  const dispatch = useDispatch();
  const itemDeleteHandler = (id) => {
    dispatch(removeItem(id));
  };
  
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant='h3' textAlign={'center'}>
      Your Current Cart
      </Typography>
      {newCartItems.map((data) => {
        return (
          <Grid key = {data.id} container sx={{ justifyContent: 'center' }}>

            <Grid xs={8} sx={{ my: 2 }} item>
              <Card>
                <CardActionArea sx={{ display: "flex", width: "100%" }}>
                  <CardMedia
                    component="img"
                    height="280"
                    image={data.image}
                    alt="hello"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography gutterBottom component="div">
                      {data.description}
                    </Typography>
                    <Typography sx={{ pt: 3 }}>
                      Rating: {data.rating.rate} stars
                    </Typography>
                    <Typography>Price: {data.price} USD</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      itemDeleteHandler(data.id)
                      dispatch(countRemove());
                    }}
                    size="small"
                    color="primary"
                  >
                    Remove From Cart
                  </Button>
                  <Link
                    to="/checkoutPage"
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <Button>Go to Checkout</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
}
