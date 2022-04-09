import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../theme/Theme'
import '../styles/globals.css'
import { ContextFavoritoProvider } from '../context/favoritos'


function MyApp({ Component, pageProps }) {
  return( 
    <ContextFavoritoProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextFavoritoProvider>
  )
}

export default MyApp
