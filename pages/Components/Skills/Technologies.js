/* eslint-disable react/jsx-no-undef */
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { Box, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import HtmlIcon from '@mui/icons-material/Html';

const Technologies = () => {

const technologies = [
     {
       id: 1,
        imagePath: '',
        title: 'HTML'
    },
     {
       id: 2,
        imagePath: '',
        title: 'CSS'
    },
     {
       id: 3,
        imagePath: '<svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>',
        title: 'JavaScript'
    },
     {
       id: 4,
        imagePath: '',
        title: 'React'
    },
     {
       id: 5,
        imagePath: '',
        title: 'Bootstrap'
    },
     {
       id: 6,
        imagePath: '',
        title: 'NextJs'
    },
     {
       id: 7,
        imagePath: '',
        title: 'Bootstrap'
    },
     {
       id: 8,
        imagePath: '',
        title: 'Github'
    },
     {
       id: 9,
        imagePath: '',
        title: 'Clickup'
    },
     {
       id: 10,
        imagePath: '',
        title: 'Laravel'
    },
     {
       id: 11,
        imagePath: '',
        title: 'Photoshop'
    },
     {
       id: 12,
        imagePath: '',
        title: 'Illustrator'
    },
     {
       id: 13,
        imagePath: '',
        title: 'Abobe XD'
    },
     {
       id: 14,
        imagePath: '',
        title: 'Figma'
    },
     {
       id: 15,
        imagePath: '',
        title: 'WordPress'
    },
     {
       id: 15,
        imagePath: '',
        title: 'Tailwind'
    },
]

  return (
    <>
        {
            technologies.map( technology => 
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={4}  display="flex" alignItems="center">
                    <Box key={technology.id} sx={{
                        width: '100%'
                    }}>                    
                            <CardHeader 
                                    className='border w-full rounded-lg'
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <HtmlIcon />
                                   
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