/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Buttons from '../Buttons/Buttons'


const BannerContent = () => {
  return (
    <>
       <Box sx={{ flexGrow: 1 }} className="py-16">
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={6}  display="flex" alignItems="center" order={{ xs: 2, lg: 1 }}>                        
                        <Box sx={{
                            letterSpacing: '-.003em',
                            fontFamily: 'SF Pro Display',
                            lineHeight: '1.08349',                                                       

                        }}>
                           <Typography variant='h2' sx={{
                            fontWeight: '500',
                            marginBottom: '20px' 
                           }}>I’m Joe Biden <br className='hidden lg:block'/> <span style={{color: '#6e6e73'}}>Front-End Software Engineer</span></Typography>

                           <Buttons title='Download CV' />
                        </Box> 
                    </Grid>
                    <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
                        <Image 
                        src='/store-card-40-watch-s8.jpg' 
                        alt=''
                        width={600}
                        height={400}
                        className='rounded-xl'
                         />
                    </Grid>                   
                </Grid>                
            </Container>
        </Box>  
    </>
  )
}

export default BannerContent