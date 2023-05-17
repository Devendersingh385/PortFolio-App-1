import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />   
      <Banner />   
    </>
  )
}
