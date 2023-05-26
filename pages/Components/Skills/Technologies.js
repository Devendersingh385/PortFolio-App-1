/* eslint-disable react/jsx-no-undef */
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getTechnoloies } from './TechnoList';
import Image from 'next/image';

const cardStyle = {
  boxShadow:'2px 4px 12px rgba(0,0,0,.08)',
  transition: 'all .3s cubic-bezier(0,0,.5,1)',
  minHeight: '84px',
  "& .MuiCardHeader-title": {
    fontSize: '22px',
    fontWeight: '700',
    fontFamily: 'SF Pro Display'
  },
  "&:hover":{
    boxShadow:'2px 4px 16px rgba(0,0,0,.16)',
    transform: 'scale3d(1.01,1.01,1.01)'
  },
};
const Technologies = () => {

  return (
    <> 
        {
            getTechnoloies.map( technology => 
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={4}  display="flex" alignItems="center" >
                <Box key={technology.id} sx={{
                    width: '100%'
                }}>                    
                <CardHeader
                  sx={cardStyle} 
                  className='border w-full rounded-lg'
                  avatar={
                    <Image
                      src={technology.imagePath}
                      alt={technology.name}
                      width={50}
                      height={50}
                    />                                
                  }                                
                  title={technology.title} 
                                                
                />                        
                </Box>
                </Grid>
            )
        }   
    
    </>
  )
}

export default Technologies