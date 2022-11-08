import React, { useState } from "react";
import { auth } from "../firebase";

// importing mui components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container,Alert } from "@mui/material";

// importing React Router Components
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({currentUser}) {
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(0)
  const navigate = useNavigate();
  const logOut = () => {
    return auth.signOut();
  };
  async function handleLogOut(e) {
    e.preventDefault()
    setError("");
    try {
      await logOut();
      navigate("/SignIn");
    } catch {
      setError("Failed to Log out");
    }
  }
  return (
    <Container
      sx={{
        width: "320px",
        mt: "150px",
        mb: "460px",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1000px",
        flexWrap: "wrap",
      }}
    >
      <Card sx={{ width: "300px", textAlign: "center" }}>
        <CardActionArea>
          <CardContent>
            {error && <Alert variant="danger">{error}</Alert>}
            <Typography gutterBottom variant="h5" component="div">
              Current User
            </Typography>
            <Typography>{currentUser && currentUser.email}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/UpdateInfo" style={{ textDecoration: "none" }}>
            <Button
              size="small"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                p: 1,
                ":hover": {
                  bgcolor: "#212121",
                },
              }}
            >
              Update Profile
            </Button>
          </Link>
        </CardActions>
      </Card>
     <Button onClick={handleLogOut} sx={{ fontSize: "20px" }}>
        Log Out
      </Button>
    </Container>
  );
}
