import React from 'react'
import Banner from '../Components/Banner/Banner'
import AboutUs from '../Components/About/AboutUs'
import Skills from '../Components/Skills/Skills'
import Services from '../Components/Sevices/Services'
import MyWork from '../Components/MyWork/MyWork'
import Products from '../products'

const MainHome = () => {
  return (
    <>
        <Banner />  
        <AboutUs />  
        <Skills title='My Expertice Technologies' />
        <Services title="Services" />
        <MyWork />
        <Products title="Products" />
    </>
  )
}

export default MainHome