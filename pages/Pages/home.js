import React from 'react'
import Banner from '../Components/Banner/Banner'
import AboutUs from '../Components/About/AboutUs'
import Skills from '../Components/Skills/Skills'
import Services from '../Components/Sevices/Services'
import MyWork from '../Components/MyWork/MyWork'
import Products from '../products'
import Contact from '../Components/Contact/Contact'

const MainHome = () => {
  return (
    <>
        <Banner />  
        <AboutUs />  
        <Skills title='My Expertice Technologies' />
        <Services title="Services" />
        <MyWork title="My Work" />
        {/* <Products title="Products" /> */}
        <Contact title="Hire Me" />
    </>
  )
}

export default MainHome