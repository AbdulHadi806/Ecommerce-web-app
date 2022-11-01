import React from "react";
import { useSelector, useDispatch } from "react-redux";

// importing MUI components
import {
  Container,
  Typography,
  Grid,
  Box,
  CardActions,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// importing actions here
import { filterList } from "../redux/action";

export default function Description() {
  const itemsDescription = useSelector((state) => state.ProductDetails);


  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    dispatch(filterList(e));
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 21, mb:48 }}>
      <Typography variant="h3" textAlign={"center"}>
        Latest Collection
      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        {itemsDescription.map((data) => {
          return (
            <Grid key={data.id} xs={7} sx={{ my: 2 }} item>
              <Card maxWidth="lg">
                <Box sx={{p: 2, display: "flex", width: "100%" }}>
                  <CardMedia style = {{objectFit: "contain"}}
                    component="img"
                    height="280"
                    image={data.image}
                    sx = {{width: 240, height: 240,}}
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
                  </Box>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    onClick={(e) => {
                      handleAddCart(data);
                    }}
                    size="small"
                    variant = "contained" sx = {{width: "100%", bgcolor: "#000", color: "#fff", height: "46px",borderRadius: 0, ':hover': {
                      bgcolor: '#212121', 
                    },
                }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
