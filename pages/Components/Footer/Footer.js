import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <>
    <Box 
    className='bg-black'>
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        variant="caption" 
                        display="block" 
                        gutterBottom
                        className='text-white text-center'
                        >
                        Devender Singh © 2023
                    </Typography>
                </Grid>                
            </Grid>
        </Container>
    </Box>
    </>
  )
}

export default Footer