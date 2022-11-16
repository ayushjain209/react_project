import React from 'react'
import { Box, Typography, Container } from "@mui/material"
const Welcome = () => {
  return (
    <>
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
    </>
  )
}

export default Welcome
