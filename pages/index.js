import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Components/Header/Header';
import MainHome from './Pages/home';
import Footer from './Components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />   
      <MainHome />
      <Footer />      
    </>  
  )
}
