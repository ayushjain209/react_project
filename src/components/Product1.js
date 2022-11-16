import React,{useState, useEffect} from 'react'
import { Button, Typography, Grid, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import data from './data'
import axios from "axios";

const Product = () => {
  const[noOfEle,setNoOfEle]=useState(6);
  const slice=data.cardData.slice(0,noOfEle);
  useEffect(() => {
    axios.post("http://localhost:8000?offset=0&limit=6")
                .then((response) => {
                    console.log(response);
                    setNoOfEle(response.data);
                    
                })
                .catch(e=>{console.log(e)})

    
    const onScroll = function () {
       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        axios.post(`http://localhost:8000?offset=0&limit=6`)
        .then((response) => {
          console.log(response);
            setNoOfEle(response.data);
            
        })
        .catch(e=>{console.log(e)})
         console.log("you're at the bottom of the page")
       }
    }
    window.addEventListener('scroll', onScroll)
    // return () => window.removeEventListener('scroll', onScroll)
 }, [])



  return (
    <>
      <Grid container spacing={4}>

        {slice.map((item,index) => (
          <Grid item key={index} xs={12} sm={6} md={4} >
            <Card sx={{ height: '100%', display: "flex", flexDirection: "column" }}>
              <CardMedia
                image={item.img}
                title={item.title}
                sx={{ paddingTop: "56.25%" }}
              />
              <CardContent sx={{ flexGrow: "1" }}>
                <Typography gutterBottom variant="h5" sx={{ fontSize: '1rem' }}>
                  {item.productName}
                </Typography>
                <Typography gutterBottom variant="h5" sx={{ fontSize: '1rem' }}>
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="sm" color="primary"> View</Button>
                <Button variant="contained" size="sm" color="primary"> Add To Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </>
  )
}

export default Product
