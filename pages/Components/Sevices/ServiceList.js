import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getServices } from './getServiceList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceList = () => {
  return (
    <>       
            {
                getServices.map(services => 
                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={4}>
                        <Box  key={services.id} sx={{
                            width: '100%',
                            height: '100%',
                        }}>    
                            <Card 
                                sx={{ 
                                    border: '0px',
                                    boxShadow:'2px 4px 12px rgba(0,0,0,.08)',
                                    borderRadius: '10px' ,
                                    height: '100%'                                  
                                }}> 
                                
                                <CardContent>
                                <div 
                                width={60} 
                                height={60}
                                className='mb-6'
                                >
                                    {services.icon}
                                </div>
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
                                        {services.title}
                                    </Typography>
                                    <Typography 
                                    variant="body2" 
                                    color="text.secondary">
                                        {services.description}
                                    </Typography>
                                </CardContent>                            
                            </Card>         
                        </Box>
                    </Grid>
                    
                    )
            }
       
    </>
  )
}

export default ServiceList