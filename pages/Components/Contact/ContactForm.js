import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
const ContactForm = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }} className="py-16">
            <Container maxWidth="lg">
                <Grid container spacing={2} display="flex" alignItems="center">
                    <Grid item xs={12} lg={6} > 
                        <h1>CONTACT INFO</h1>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <h2>Let’s work together.</h2>
                        <Card 
                            className='p-5'
                        > 
                            <CardContent 
                                sx={{
                                padding: 0,
                                }}
                            >     
                                <form>
                                    <TextField id="filled-basic" label="First Name" variant="filled" className='w-full' 
                                        sx={{
                                            marginBottom: '24px'
                                        }}
                                    
                                    />                     
                                    <TextField id="filled-basic" label="Email" variant="filled" className='w-full mb-3' 
                                         sx={{
                                            marginBottom: '24px'
                                        }}
                                    />                     
                                    <TextField id="filled-basic" label="Phone Number" variant="filled" className='w-full mb-3' 
                                         sx={{
                                            marginBottom: '24px'
                                        }}
                                    />  
                                    <TextareaAutosize />
                                </form>                                
                            </CardContent>                            
                        </Card>  
                    </Grid>                   
                </Grid>                
            </Container>
        </Box> 
    </>
  )
}

export default ContactForm