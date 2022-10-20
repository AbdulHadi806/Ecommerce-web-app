import React from 'react'

import { Container, Typography, Button, CardActions, Card, CardContent,Grid,TextField, Input } from "@mui/material";

import { useSelector } from "react-redux"



export default function CheckOut() {
    const data = useSelector(state => state.FilterList)
    const totalPriceCounter = data.reduce((aucc, curr) => aucc + curr.price, 0)
    const totalPrice = totalPriceCounter.toFixed(2)

  return (
    <>
    <Container maxWidth = 'xl'> 
    <Grid container>
      <Grid item xs = {12} sm = {6}>
      <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              1. Shipping
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="address" multiline placeholder="Type your address here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
        <Grid item xs = {12} sm = {4}  sx = {{mt: 14}}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Your Cart
        </Typography>
        <Typography variant="h5" color="text.secondary" component="div">
          Subtotal
        </Typography>
        <Typography variant="h5" color="text.secondary" component="div" sx={{ fontSize: 14 }}>
          {totalPrice} USD
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small">Confirm Payment</Button>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </Container>
    </>
  )
}
