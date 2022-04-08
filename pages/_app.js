import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../theme/Theme'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
