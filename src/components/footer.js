import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Typography,
  Grid
} from "@mui/material";

export default function Footer() {
  return (
    <Grid container sx = {{py: 3 ,bgcolor: "#000"}} >
        <Grid item xs = {12}>
        <Container maxWdith = "xl" sx = {{textAlign: "center"}} >
      <Typography sx = {{color: "#fff"}}>
        This is a copy right of Web Pvt Ltd{" "}
        <Typography >
          <Link to="/Guid" style={{color: "#fff"}}>For more info please contact us</Link>
        </Typography>
      </Typography>
    </Container>
        </Grid>
    </Grid>
  );
}
