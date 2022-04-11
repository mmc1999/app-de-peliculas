import { Box } from '@mui/material'
import Head from "next/head"
import React from 'react'
import Navbar from '../ui/Navbar'
import Buscador from '../ui/Buscador'

const Layout = ({title="OpenJira - App", children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        <Buscador />
        <main style={{padding:"16px"}} >
          {children}
        </main>
    </>
  )
}

export default Layout