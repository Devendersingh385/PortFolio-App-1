import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ProductList from './productList';
import ProductCategory from './Components/Products/ProductCategory';

const Products = ({title}) => {
  return (
    <>
        <Box 
          sx={{ flexGrow: 1 }} 
          className="py-16">
        <Container 
          maxWidth="lg">
        <Grid 
          container spacing={2} 
          className='justify-center mb-6'
          > 
        <Box
          className='text-center justify-center'
        >            
            <Typography 
            variant="h3"
            sx={{
              fontWeight: '500',
              fontFamily: 'SF Pro Display'
            }}
            >{title}</Typography>
        </Box>                
        </Grid>        
        </Container>
        </Box>   
        <Box 
          sx={{ flexGrow: 1 }} 
          className="py-16">
        <Container 
          maxWidth="lg">
          <Grid container spacing={5}>
            <Grid xs={3}>
              <ProductCategory />
            </Grid>
            <Grid xs={9}>
              <Grid    container spacing={{ xs: 4, md: 4 }}>                                                                       
                    <ProductList />                  
              </Grid> 
            </Grid>                      
          </Grid>        
        </Container>
        </Box>   
    </>
  )
}

export default Products