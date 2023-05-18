import React from 'react'
import Technologies from './Technologies'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Skills = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }} className="py-16">
                <Container maxWidth="lg">
                    <Grid container spacing={2} >
                                               
                            <Technologies />                        
                    </Grid>                
                </Container>
            </Box>         
    </>
  )
}

export default Skills