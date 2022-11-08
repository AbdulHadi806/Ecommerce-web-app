import React, { useState } from "react";

// importing mui components
import {
  Container,
  Typography,
  Button,
  Alert,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function UpdateInfo({currentUser}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const promises = []
    if (email !== currentUser.email) {
        promises.push(updateEmail(email))
    }
    Promise.all(promises).then(()=> {
        navigate("/Dashboard")
    }).catch(()=> {
        setError("Failed to update information")
        navigate("/Dashboard")
    }).finally(()=> {
        setLoading(false)
    })

  }

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 20, mb: 47 }}>
        <Grid
          container
          sx={{
            mt: 15,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item xs={12} sm={7}>
            <Card
              style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                {error && <Alert severity="error">{error}</Alert>}
                <Typography gutterBottom variant="h5">
                  Update info
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Please enter new email to reset
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        name="email"
                        label="Enter Email"

                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="example@example.com"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={Loading}
                        color="primary"
                        fullWidth
                      >
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}