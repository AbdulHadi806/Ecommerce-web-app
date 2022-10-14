import {  Grid, Paper,Container, Card } from "@mui/material";
import { sizing } from '@mui/system';

export default function Banner() {
  return (
    <Grid container>
      <Grid item xl = {12}>
        <Card sx={{ width: '100%' }}>
        <img  sx={{ width: '100%' }} src='images/banner-image.png' ></img>
        </Card>
      </Grid>
    </Grid>
  )
}
