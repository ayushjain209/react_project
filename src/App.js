import React, { useState, useEffect } from "react";
import { Container, Grid, CssBaseline } from "@mui/material"
import SSkeleton from "./components/SSkeleton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome";
import Product from "./components/Product";
// import Product1 from "./components/Product1";
const arr = [1, 2, 3, 4, 5, 6]
function App() {
const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);
  

  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Welcome />
        <Container maxwidth="md" sx={{ paddingBottom: "30px", paddingTop: "30px" }}>
          {
            isLoading ? (
              <Product />
            ) :
              (
                <Grid container spacing={4}>
                  {arr.map(i => <Grid item xs={12} md={4} key={i}> <SSkeleton /></Grid>)}
                </Grid>
              )
          }
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
