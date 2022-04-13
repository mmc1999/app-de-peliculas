import Head from "next/head"
import React from 'react'
import Navbar from '../ui/Navbar'
import Buscador from '../ui/Buscador'

const Layout = ({title="OpenJira - App", children}) => {
  return (
    <>
        <Head lang="es">
            <title>{title}</title>
        </Head>
        <Navbar />
        <Buscador />
        <main style={{width:"95%", margin:"10px auto"}} >
          {children}
        </main>
    </>
  )
}

export default Layout