import { Box } from '@mui/material'
import Head from "next/head"
import React from 'react'
import NavBar from '../ui/NavBar'
import Buscador from '../ui/Buscador'

const Layout = ({title="OpenJira - App", children}) => {
  return (
    <Box sx={{ flexGrow:1,  }} >
        <Head>
            <title>{title}</title>
        </Head>
        <NavBar />
        <Buscador />
          <Box sx={{padding:2}} >
              {children}
          </Box>
        
    </Box>
  )
}

export default Layout