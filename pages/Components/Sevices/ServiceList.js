import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getServices } from './getServiceList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const cardStyle = {
    border: '0px',
    boxShadow:'0px 8px 24px #F2F0FF',
    borderRadius: '10px' ,
    height: '100%',
    padding: '32px', 
    transition: 'all .3s cubic-bezier(0,0,.5,1)',
    background: '#fff',
    "&:hover":{
      boxShadow:'2px 4px 16px rgba(0,0,0,.16)',
      transform: 'scale3d(1.01,1.01,1.01)',
    },
  };

const ServiceList = () => {    
  return (
    <>       
            {
                getServices.map(services => 
                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={12} lg={4}>
                        <Box  key={services.id} sx={{
                            width: '100%',
                            height: '100%',
                        }}>    
                            <Card 
                                sx={ cardStyle }> 
                                
                                <CardContent 
                                 sx={{
                                    padding: 0,
                                 }}
                                >
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
                                            fontFamily: 'poppins'
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