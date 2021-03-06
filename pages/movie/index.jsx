import { Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/layouts/Layout'
import TarjetaRecommend from '../../components/ui/TarjetaRecommend'
import { data } from '../../data/data'


const index = () => {
  console.log(data)
  return (
    <Layout title='Movies'>
        <Typography variant='h4'>Movies</Typography>
        <Grid container sx={{marginTop:3, display:"flex", flexDirection:"row", width:"initial", alignItems:"center", paddingLeft:0}} spacing={5}>
         {
          data.map(el => (
            el.category === "Movie" ? <TarjetaRecommend key={el.title} el={el} /> : ""
          ))
        }
      </Grid>
    </Layout>
  )
}

export default index