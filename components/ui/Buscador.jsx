import {  FormControl, IconButton, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Buscador = () => {
  return (
    <FormControl sx={{position:"relative", display:"flex", flexDirection:"row", padding:2}}>
      <Input 
        placeholder='Search for movie or TV series' 
        name="buscador" 
        type="text" 
        sx={{paddingTop:1.5, paddingBottom:1.5, width:"100%", marginLeft:5.5}}
        
      />
      <IconButton sx={{position:"absolute", bottom:0, top:2}}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </FormControl>
  )
}

export default Buscador