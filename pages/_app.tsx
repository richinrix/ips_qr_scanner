import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


// TODO : 
// login screen
//  scanner 
// onscan a page showing details of product
// post tracking id  to graphcms