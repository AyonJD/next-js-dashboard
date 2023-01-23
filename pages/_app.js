import FullLayout from '@/src/layouts/FullLayout'
import theme from '@/src/theme/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </ThemeProvider>
  )
}
