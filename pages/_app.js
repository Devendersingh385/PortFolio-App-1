import '@/styles/globals.css'
import '@/styles/header.css'
import '@fontsource/poppins';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
