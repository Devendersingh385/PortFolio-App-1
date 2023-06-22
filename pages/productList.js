/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [visibleProductCount, setVisibleProductCount] = useState(9);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(response => setData(response));
    }, []);

    useEffect(() => {
        setDisplayedProducts(data.slice(0, visibleProductCount));
      }, [data, visibleProductCount]);

      const handleViewMore = () => {
        setVisibleProductCount(visibleProductCount + 9);
      };

    return (
        <>           
            {
                displayedProducts.map((rocket, index) => (  
                    <Grid item xs={12} lg={4}  display="flex" alignItems="center" >   
                    <Box key={rocket.id}>
                            <Card 
                            sx={{ 
                                border: '0px',
                                boxShadow:'2px 4px 12px rgba(0,0,0,.08)',
                                borderRadius: '10px' ,
                                height: '100%'                                  
                            }}> 
                            <img
                                src={rocket.image}
                                alt={rocket.name}
                                width={'100%'}
                                />
                            <CardContent>
                            
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
                                    {rocket.title}
                                </Typography>
                                <Typography 
                                variant="body2" 
                                color="text.secondary">
                                    {rocket.category}
                                </Typography>
                                <Typography 
                                variant="body2" 
                                color="text.secondary">
                                    {rocket.description}
                                </Typography>
                            </CardContent>                            
                        </Card>  
                        
                        </Box>                          
                            </Grid>
                ))
            }
            {visibleProductCount < data.length && (
                 <Button variant="contained" onClick={handleViewMore}>View More</Button>
            )}
        </>
    )
}

export default ProductList;