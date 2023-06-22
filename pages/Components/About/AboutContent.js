/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutContent = () => {
  return (
    <>
        <Box sx={{
            letterSpacing: '-.003em',
            fontFamily: 'SF Pro Display',
            lineHeight: '1.08349',                                                       

        }}>
            <Typography variant='h4' sx={{
            fontWeight: '500',
            marginBottom: '20px' 
            }}>Know Me More</Typography>

            <Typography variant='h2' sx={{
            fontWeight: '500',
            marginBottom: '20px' 
            }}>I'm Simone Olivia, a Web Developer</Typography>

            <Typography variant='body1' sx={{
            fontWeight: '400',
            marginBottom: '20px' 
            }}>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
           
            <Typography variant='body1' sx={{
            fontWeight: '400',
            marginBottom: '20px' 
            }}>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</Typography>
        </Box> 
    </>
  )
}

export default AboutContent