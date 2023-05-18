import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AboutMedia from './AboutMedia';
import AboutContent from './AboutContent';

const AboutUs = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }} className="py-16">
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                    <Grid item xs={6}  display="flex" alignItems="center">                        
                        <AboutMedia />
                    </Grid>
                    <Grid item xs={6}>
                        <AboutContent />
                    </Grid>                   
                </Grid>                
            </Container>
        </Box>  
    </>
  )
}

export default AboutUs