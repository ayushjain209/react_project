import React, { useState ,useEffect } from "react";
import { styled, Box, Button, Tooltip, Typography, Container, Grid, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, IconButton, Avatar, Menu, ListItemIcon, MenuItem, Divider } from "@mui/material"
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
// import Skeleton from '@mui/material/Skeleton';
import SSkeleton from "./components/SSkeleton";



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" display="flex" justifyContent="space-between">
        <StyledToolbar>
          <Typography variant="h4">
            iKart
          </Typography>
          <Typography variant="h6">
            Home
          </Typography>
          <Typography variant="h6">
            About
          </Typography>
          <Tooltip title="Profile">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

        </StyledToolbar>
      </AppBar >
      <main>
        <Box>
          
          <Container maxwidth="sm">
            <Typography variant="h3" marginTop="20px" align="center" color="textPrimary" gutterBottom >
              Welcome to iKart
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph >
              This is a shopping kart, You can get the product at best price from here.
              Happy Shopping !!
            </Typography>

          </Container>
        </Box>
        <Container maxwidth="md" sx={{ paddingBottom: "30px", paddingTop: "30px" }}>
          
          <Grid container spacing={4}>

            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                {isLoading ? (
                
                <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>
                  
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title="Product detail"
                      sx={{ paddingTop: "56.25%" }}
                    />

                  
                  
                    <CardContent sx={{ flexGrow: "1" }}>

                      <Typography gutterBottom variant="h5" sx={{ fontSize: '1rem' }}>
                        Product Name
                      </Typography>
                      <Typography gutterBottom variant="h5" sx={{ fontSize: '1rem' }}>
                        description of product
                      </Typography>
                    </CardContent>
                  
                  <CardActions>
                    <Button variant="contained" size="sm" color="primary"> View</Button>
                    <Button variant="contained" size="sm" color="primary"> Add To Cart</Button>
                  </CardActions>
                </Card>
                ):
                (
                  <SSkeleton/>
                )}
              </Grid>
            ))}

          </Grid>
        </Container>
      </main>


      <Box maxwidth="md" sx={{ backgroundColor: "lightgray", paddingBottom: "30px", paddingTop: "30px" }} >
        <Container>
          <Typography variant="h3" sx={{ paddingTop: "25px", paddingBottom: " 30px", fontWeight: 900 }} > zomato</Typography>

          <Grid container spacing={2} sx={{ paddingBottom: "30px" }}>

            <Grid item xs={12} sm={6} md={3} >
              <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>

                <CardContent sx={{ flexGrow: "1", backgroundColor: "lightgray" }}>
                  <Typography gutterBottom variant="h5">
                    A B O U T   Z O M A T O
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} >
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Who We Are'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Blog'}
                        </Link>

                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Work With Us'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Investor Relation'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Report Fraud'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Contact Us'}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>

                <CardContent sx={{ flexGrow: "1", backgroundColor: "lightgray" }}>
                  <Typography gutterBottom variant="h5">
                    Z O M A V E R S E
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Zomato'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Blinkit'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Feeding India'}
                        </Link>

                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Hyprepure'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Zomaland'}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>

                <CardContent sx={{ flexGrow: "1", backgroundColor: "lightgray" }}>
                  <Typography gutterBottom variant="h5">
                    FOR RESTAURANTS
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Partner With Us'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Apps For You'}
                        </Link>
                      </Typography>
                      <br />

                      <Typography gutterBottom variant="h5">
                        FOR ENTERPRISES
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Zomato For Work'}
                        </Link>
                      </Typography>

                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>

                <CardContent sx={{ flexGrow: "1", backgroundColor: "lightgray" }}>
                  <Typography gutterBottom variant="h5">
                    L E A R N M O R E
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Privacy'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Security'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Terms'}
                        </Link>
                      </Typography>
                      <Typography color="gray">
                        <Link href="#" underline="hover" color="inherit">
                          {'Sitemap'}
                        </Link>
                      </Typography>

                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>


          </Grid>

          <Divider variant="hard" />

          <Typography variant="subtitle2" color="gray">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
          </Typography>

        </Container>
      </Box>


    </>
  );
}

export default App;
