import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


const ProductCategory = () => {
  return (
    <>
        <Box>
        <Stack spacing={2}>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{
                    fontSize: '22px',
                    fontWeight: '700',
                    fontFamily: 'SF Pro Display'
                }}
                >
                Catelog
            </Typography>
        </Stack>
        <Stack spacing={2}>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{
                    fontSize: '22px',
                    fontWeight: '700',
                    fontFamily: 'SF Pro Display'
                }}
                >
                Category
            </Typography>
            
        </Stack>
        </Box>
    </>
  )
}

export default ProductCategory