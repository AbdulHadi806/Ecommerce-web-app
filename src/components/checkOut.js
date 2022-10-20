import React, {useState} from 'react'

// importing mui components
import { Container, Typography, Button, CardActions, Card, CardContent,Grid,TextField, Input } from "@mui/material";

// importing redux 
import { useSelector, useDispatch } from "react-redux"

// importing actions
import {userLoginHandler} from '../redux/action'


export default function CheckOut() {
  const [userLoginName, setUserLoginName] = useState("")
  const [userLoginLastName, setUserLoginLastName] = useState("")
  const [userLoginEmail, setUserLoginEmail] = useState("")
  const [userLoginNumber, setUserLoginNumber] = useState("")
  const [userLoginAddress, setUserLoginAddress] = useState("")

    const data = useSelector(state => state.FilterList)
    const totalPriceCounter = data.reduce((aucc, curr) => aucc + curr.price, 0)
    const totalPrice = totalPriceCounter.toFixed(2)

    const dispatch = useDispatch()

    const LoginHandler = (e) => {
      e.preventDefault()
      if(userLoginName && userLoginLastName && userLoginEmail && userLoginNumber && userLoginAddress){
        dispatch(userLoginHandler({FirstName: userLoginName, LastName: userLoginLastName, Email: userLoginEmail, Number: userLoginNumber, address: userLoginAddress, id: Math.random()}))
        setUserLoginName('')
      setUserLoginLastName('')
      setUserLoginEmail('')
      setUserLoginNumber('')
      setUserLoginAddress('')
      }
      else {
        alert("Please enter all values")
      }
    }

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
            <form onSubmit={LoginHandler}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField value={userLoginName} onChange={(e) => setUserLoginName(e.target.value)} placeholder="Enter first name"  variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField value={userLoginLastName} onChange={(e) => setUserLoginLastName(e.target.value)} placeholder="Enter last name"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={userLoginEmail} onChange={(e) => setUserLoginEmail(e.target.value)}  type="email" placeholder="Enter email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={userLoginNumber} onChange={(e) => setUserLoginNumber(e.target.value)} type="number" placeholder="Enter phone number"  variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={userLoginAddress} onChange={(e) => setUserLoginAddress(e.target.value)}  multiline placeholder="Type your address here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button  type='submit' variant="contained" color="primary" fullWidth>Submit</Button>
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
        {/* <Button  size="small">Confirm Payment</Button> */}
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </Container>
    </>
  )
}
