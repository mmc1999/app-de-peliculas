import { Box, Grid, Hidden, Typography } from "@mui/material";
import Layout from "../components/layouts/Layout";
import Tarjeta from "../components/ui/Tarjeta";
import TarjetaRecommend from "../components/ui/TarjetaRecommend";
import {data} from "../data/data"

export default function Home() {
  
  return (
    <Layout >
        <Box >
            <Typography variant="h5">Trending</Typography>
            <Box sx={{width: "100%", gap:5, overflowX: "auto", display: "-webkit-inline-box", marginTop:3, marginBottom:5,"WebkitScrollbar":"none"}}>
                    {
                      data.map(el => (
                        el.isTrending ? <Tarjeta key={el.title} el={el} /> : ""
                      ))
                    }
            </Box>
            <Typography variant="h5">Recommend for you</Typography>
            <Grid container sx={{marginTop:3, display:"flex", flexDirection:"row", width:"initial", justifyContent:"center", boxSizing:"border-box"}} spacing={2}>
                    {
                      data.map(el => (
                        !el.isTrending ? <TarjetaRecommend key={el.title} el={el} /> : ""
                      ))
                    }
            </Grid>
        </Box>
      {/*<Hidden lgDown={true}>
        <Box sx={{width: { sm: `calc(100% - 100px)` },ml: { sm: `100px` },}}>
            <Typography variant="h5">Trending</Typography>
            <Box sx={{width: "100%", gap:5, overflowX: "auto", display: "-webkit-inline-box", marginTop:3, marginBottom:5,"WebkitScrollbar":"none"}}>
                    {
                      data.map(el => (
                        el.isTrending ? <Tarjeta key={el.title} el={el} /> : ""
                      ))
                    }
            </Box>
            <Typography variant="h5">Recommend for you</Typography>
            <Grid container sx={{marginTop:3, display:"flex", flexDirection:"row", width:"initial", justifyContent:"center", boxSizing:"border-box"}} spacing={2}>
                    {
                      data.map(el => (
                        !el.isTrending ? <TarjetaRecommend key={el.title} el={el} /> : ""
                      ))
                    }
            </Grid>
        </Box>
      </Hidden>*/}
    </Layout>
  )
}
