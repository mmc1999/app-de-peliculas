import {  FormControl, Hidden, IconButton, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Buscador = () => {
  return (
    <>
    <Hidden smUp={true}>
      <FormControl sx={{position:"relative", display:"flex", flexDirection:"row", width:"95%", margin:"0px auto"}}>
        <Input 
          placeholder='Search for movie or TV series' 
          name="buscador" 
          type="text" 
          sx={{paddingTop:1.5, paddingBottom:1.5, width:"100%", marginLeft:5.5, }}
        />
        <IconButton sx={{position:"absolute", bottom:0, top:2}}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </FormControl>
    </Hidden>
    <Hidden smDown={true} lgUp={true}>
      <FormControl sx={{position:"relative", display:"flex", flexDirection:"row", width:"95%", margin:"0px auto"}}>
        <Input 
          placeholder='Search for movie or TV series' 
          name="buscador" 
          type="text" 
          sx={{paddingTop:1.5, paddingBottom:1.5, width:"100%", marginLeft:5.5, height:"60px", fontSize:"25px"}}
        />
        <IconButton sx={{position:"absolute", bottom:0, top:2}}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </FormControl>
    </Hidden>
    <Hidden lgDown={true}>
      <FormControl sx={{position:"relative", display:"flex", flexDirection:"row", my:"50px", width: { sm: `calc(100% - 270px)` },ml: { sm: `125px` },}}>
        <Input 
          placeholder='Search for movie or TV series' 
          name="buscador" 
          type="text" 
          sx={{paddingTop:1.5, paddingBottom:1.5, width:"100%", marginLeft:5.5, height:"60px", fontSize:"25px"}}
        />
        <IconButton sx={{position:"absolute", bottom:0, top:2}}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </FormControl>
    </Hidden>
    </>
    
  )
}

export default Buscador