import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainHome from './Pages/home';
import Footer from './Components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>      
      <MainHome />   
    </>  
  )
}
