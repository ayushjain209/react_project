import React from 'react'
import { Box, Typography, Container, Grid, Card, Link, CardContent, Divider } from "@mui/material"
function Footer() {
    return (
        <>
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
    )
}

export default Footer;
