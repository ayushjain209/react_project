import React,{useState, useEffect,useRef} from 'react'
import { Button, Typography, Grid, Card, CardActions, CardContent, CardMedia } from "@mui/material"
// import data from './data'
import axios from "axios";

function Product () {
  const[myData,setMyData]=useState([]);
  const stateRef = useRef();
  stateRef.current = myData;
  console.log("at starting level "+ myData.length);
  useEffect(() => {
    getData();
    const onScroll = function () {
       if (window.innerHeight + window.scrollY  >= document.body.offsetHeight) {
        getData();
      }
    }
    window.addEventListener('scroll', onScroll)
  
    // return () => window.removeEventListener('scroll', onScroll)
 }, [])
 console.log(myData);
 const  getData = async()=>{
  console.log(myData);
 try{
  const response= await axios.get(`http://localhost:8080?offset=${stateRef.current.length}&limit=6`)
  
    console.log("first time "+ myData.length)
      // console.log(response);
      setMyData([...myData ,...response.data]);}
      
  catch(e){
    
  }
 }

  return (
    <>
      <Grid container spacing={4}>

        {myData.map((item,id) => (
          <Grid item key={id} xs={12} sm={6} md={4} >
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
