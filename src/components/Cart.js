import React from "react";

import { useSelector, useDispatch } from "react-redux";


// importing MUI Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// importing react router dom Link
import { Link } from "react-router-dom";

// importing MUI compoenents here
import {
  Container,
  Typography,
  Grid,
  TextField,
  CardActions,
  Button,
  Card,
  CardContent,
  Alert,
  CardMedia,
  Box,
} from "@mui/material";

// importing actions here
import { removeItem,filterList, decreaseItemCount } from "../redux/action";

export default function Cart({currentUser}) {
  const CartItems = useSelector((state) => state.CartItems);
  const cartListHandler = (obj) => {
    dispatch(filterList(obj));
};
const decreaseItemCountHandler = (obj) => {
    dispatch(decreaseItemCount(obj))
  
}
  const shippingTaxes = CartItems.reduce(
    (aucc, curr) => aucc - curr.price + 33 * curr.count,
    0
  );
  const shippingTaxesTotal = Math.abs(shippingTaxes);
  const shippingTaxesTotalVal = shippingTaxesTotal.toFixed(2);

  const totalPriceCounter = CartItems.reduce(
    (aucc, curr) => aucc + curr.price * curr.count,
    shippingTaxesTotal
  );

  const totalPrice = totalPriceCounter.toFixed(2);

  const dispatch = useDispatch();
  const itemDeleteHandler = (obj) => {
    dispatch(removeItem(obj));
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 20,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/* import { styled } from '@mui/material/styles'; */}
      <Typography variant="h3" sx={{ textAlign: "center", width: "100%" }}>
        Your Current Cart
      </Typography>
      <Box sx = {{maxWidth: "992px",width: "100%" }}>
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Your Cart
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
              <Typography>
                Shipping Taxes: {shippingTaxesTotalVal} USD
              </Typography>
            </Typography>
            <Typography variant="h5" color="text.secondary" component="div">
              Subtotal
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{ fontSize: 14 }}
            >
              {totalPrice} USD
            </Typography>
          </CardContent>
        </Card>
      </Box>
      </Box>
      {CartItems.map((data) => {
        return (
          <Grid container key={data.id}>
            <Grid
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Grid xs={8} sx={{ my: 2 }} item>
                <Card>
                  <Box sx={{ p: 2, display: "flex", width: "100%" }}>
                    <CardMedia style = {{objectFit: "contain"}}
                      component="img"
                      height="280"
                      sx = {{width: 240, height: 240,}}
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
                      <Box sx={{ display: "flex" }}>
                        <Box>
                          <Typography sx={{ pt: 3 }}>
                            Rating: {data.rating.rate} stars
                          </Typography>
                          <Typography>Price: {data.price} USD</Typography>
                        </Box>
                        <TextField
                          sx={{ mt: 2, ml: 2 }}
                          hiddenLabel
                          value={data.count}
                          variant="filled"
                          size="small"
                        />
                        <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Button onClick={()=>{cartListHandler(data)}} sx = {{height: "20px", color: "Transparent"}}><AddIcon sx ={{color: "#000"}} /></Button>
                        <Button onClick={()=>{decreaseItemCountHandler(data)}} sx = {{height: "20px", color: "Transparent"}}><RemoveIcon sx ={{color: "#000"}} onClick={()=>{decreaseItemCountHandler(data)}}/></Button>
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                  <CardActions sx={{ justifyContent: "flex-end" }}>
                    <Link
                      to={currentUser ? "/Dashboard": "/SignIn"}
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      <Button sx = {{width: "200px", bgcolor: "#000", color: "#fff", height: "46px", ':hover': {
                      bgcolor: '#212121', 
                    },}}>Go to Checkout</Button>
                    </Link>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        itemDeleteHandler(data);
                      }}
                      size="medium"
                      sx = {{width: "200px", ml: 1, bgcolor: "#000", color: "#fff", height: "46px", ':hover': {
                        bgcolor: '#212121', 
                      },}}
                    >
                      Remove From Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
}
