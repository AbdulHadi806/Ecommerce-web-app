import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// importing MUI compoenents here
import { Grid, Button, Drawer, List, Typography, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// importing icons
import DoneIcon from "@mui/icons-material/Done";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = "100%";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Header = ({currentUser}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = ({}) => {
    setOpen(false);
  };
  const CartItems = useSelector((state) => state.CartItems);
  const newCartItems = [...new Set(CartItems)];
  const TotalCount = newCartItems.length;
  return (
    <Grid
      open={open}
      container
      sx={{
        bgcolor: "#000",
        py: 2,
        px: 3,
        position: "fixed",
        top: 0,
        bottom: 0,
        height: 100,
        zIndex: 3,
        alignItems: "center",
      }}
    >
      <Grid item>
        <Link to="/">
          <DoneIcon sx={{ color: "#fff" }} fontSize="large" />
        </Link>
      </Grid>
      <Grid item xs={1} lg={1}>
        <Button>
          <MenuOpenIcon
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              color: "#fff",
              ":hover": {
                bgcolor: "#212121",
              },
            }}
          />
        </Button>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ height: "272px" }}>
            <Grid container sx={{ height: "272px" }}>
              <Grid item xs={12}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleDrawerClose}
                    sx={{
                      width: "100%",
                      ":hover": {
                        bgcolor: "#9e9e9e",
                      },
                    }}
                  >
                    {" "}
                    <Typography
                      variant="h6"
                      href="#"
                      sx={{
                        fontSize: 17,
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      Home{" "}
                    </Typography>
                  </Button>
                </Link>
                <Grid item>
                  <Link to="/Jackets" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleDrawerClose}
                      sx={{
                        width: "100%",
                        ":hover": {
                          bgcolor: "#9e9e9e",
                        },
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h6"
                        href="#"
                        sx={{
                          fontSize: 17,
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        Men clothing
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/WomanClothsPage"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleDrawerClose}
                      sx={{
                        width: "100%",
                        ":hover": {
                          bgcolor: "#9e9e9e",
                        },
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h6"
                        href="#"
                        sx={{
                          fontSize: 17,
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        Female
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Electronics" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleDrawerClose}
                      sx={{
                        width: "100%",
                        ":hover": {
                          bgcolor: "#9e9e9e",
                        },
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h6"
                        href="#"
                        sx={{
                          fontSize: 17,
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        Electronics
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </List>
        </Drawer>
      </Grid>
      <Grid
        item
        xs={6}
        lg={8}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-end",
          pl: 2,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            height: "60%",
            bgcolor: "#fff",
            ":hover": {
              bgcolor: "#e0e0e0",
            },
          }}
        >
          <Link
            to={currentUser ? "/Dashboard": "/checkoutPage"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="h7">{currentUser ? "Go to dashboard": "Sign Up"}</Typography>
          </Link>
        </Button>
        <Button sx={{ p: "0" }}>
          <Link to="/Cart">
            <ShoppingCartIcon sx={{ color: "#fff" }} fontSize="large" />
            <Typography
              variant="h5"
              sx={{ position: "absolute", right: -3, top: 8, color: "#fff" }}
            >
              {TotalCount}
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
