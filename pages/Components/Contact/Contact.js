import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm';
import BasicForm from './BasicForm';


const Contact = ({ title }) => {
  return (
    <>
       <Box 
          sx={{ flexGrow: 1, background: 'rgb(247, 249, 252)' }} 
          className="py-16">
        <Container 
          maxWidth="lg">
        <Grid 
          container spacing={2} 
          className='justify-center mb-6'
          > 
        <Box
          className='text-center justify-center mb-5'
        >            
            <Typography 
            variant="h2"
            sx={{
              fontSize: '42px',
              fontWeight: '700',
              fontFamily: 'SF Pro Display'
            }}
            >{title}</Typography>
        </Box>                
        </Grid>                
        <Grid 
          container spacing={{ xs: 4, md: 4, lg: 5 }}>                                                                       
                 <ContactForm />              
        </Grid>                
        </Container>
        </Box>      
    
    </>
  )
}

export default Contact