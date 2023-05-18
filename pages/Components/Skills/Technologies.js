/* eslint-disable react/jsx-no-undef */
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { Box, Card } from '@mui/material';
import Grid from '@mui/material/Grid';

const Technologies = () => {

const technologies = [
     {
       id: 1,
        imagePath: '',
        title: 'saasasasas'
    },
     {
       id: 2,
        imagePath: '',
        title: 'abc'
    },
     {
       id: 3,
        imagePath: '',
        title: 'abc'
    },
     {
       id: 4,
        imagePath: '',
        title: 'abc'
    },
]

  return (
    <>
        {
            technologies.map( technology => 
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={4}  display="flex" alignItems="center">
                    <Box key={technology.id}>                    
                            <CardHeader 
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={technology.title}
                                subheader="September 14, 2016"
                            />
                </Box>
            </Grid>
            )
        }   
    
    </>
  )
}

export default Technologies