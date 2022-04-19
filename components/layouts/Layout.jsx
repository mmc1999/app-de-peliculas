import Head from "next/head"
import React from 'react'
import Navbar from '../ui/Navbar'
import Buscador from '../ui/Buscador'
import { Hidden } from "@mui/material"

const Layout = ({title="OpenJira - App", children}) => {
  return (
    <>
        <Head lang="es">
            <title>{title}</title>
        </Head>
        <Navbar />
        <Buscador />
        <Hidden lgUp={true}>
          <main style={{width:"95%", margin:"10px auto"}} >
            {children}
          </main>
        </Hidden>
        <Hidden lgDown={true}>
          <main style={{width:"calc(100% - 270px)", margin:"10px auto"}} >
            {children}
          </main>
        </Hidden>
    </>
  )
}

export default Layout