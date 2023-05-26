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
                            width: '100%'
                        }}>    
                            <Card sx={{  }}> 
                            
                            <CardContent>
                            <div width={45} height={45}>{services.icon}</div>
                                <Typography gutterBottom variant="h5" component="div">
                                    {services.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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