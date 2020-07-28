// import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'

import Header from 'components/Header'
import Head from 'next/head'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'

const theme = {
  colors: {
    black: "#140700",
    Brwn: "#5A4D44",
    lgtBrwn: "#b69e88",
    traCta: "#B2775A",
    brntOrng: "#b88759",
    Gry: "#BFB1A8",
    lgtGry: "#E6D9CC",
    Pnk: "#E4CDC7",
    lgtPnk: "#DDD2D2",
    white: "#FAF8F7",
  }
}

function MyApp({ Component, pageProps }) {
    return (
      <>  
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header 
            title="RAISING RIVER"
          />
          <Component {...pageProps} />
        </ThemeProvider>     
      </>
    )
  }
  
  export default MyApp