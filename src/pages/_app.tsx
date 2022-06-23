import type { AppProps } from 'next/app'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
