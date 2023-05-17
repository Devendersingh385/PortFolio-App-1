import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BannerContent = () => {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                    <Grid item xs={6}>                        
                        <Box sx={{
                            letterSpacing: '-.003em',
                            fontFamily: 'SF Pro Display',
                            lineHeight: '1.08349'

                        }}>
                           <Typography variant='h2'>Front-End <span style={{color: '#6e6e73'}}>Software Engineer</span></Typography>
                        </Box> 
                    </Grid>
                    <Grid item xs={6}>
                        <Image 
                    </Grid>                   
                </Grid>                
            </Container>
        </Box>  
    </>
  )
}

export default BannerContent