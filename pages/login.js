import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <>
    <Box 
        className='flex items-center h-screen'>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card sx={{ minWidth: 396,
                        padding: '32px',
                    }}>
                        <Typography 
                            variant="h5" 
                            display="block" 
                            gutterBottom
                            className='text-center'
                            >
                            Log in to Facebook
                        </Typography>
                        <Box >
                        <TextField 
                        label="Email address or phone number" 
                        variant="outlined"
                        className='w-full'
                        size="small" />
                        </Box>
                        <Box>
                        <TextField 
                        label="Password" 
                        variant="outlined"
                        className='w-full'
                        size="small" />
                        </Box>
                        <Box>
                        <Button variant="contained" color="success" className='w-full'>
                            Success
                        </Button>
                        </Box>
                        <Box>
                        <Typography 
                            variant="h5" 
                            display="block" 
                            gutterBottom
                            className='text-center'
                            >
                            Forgotten account?
                        </Typography>
                        <Typography 
                            variant="h5" 
                            display="block" 
                            gutterBottom
                            className='text-center'
                            >
                            Sign up for Facebook
                        </Typography>
                        </Box>
                        </Card>
                    </Grid>                
                </Grid>
            </Container>
    </Box>

    </>
  )
}

export default Login