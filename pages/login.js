import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();

    const [inputVal, setInputVal] = useState({
        email:'',
        password: ''
    })
    const getData = (e) => {
        const {value, name} = e.target;
        setInputVal( ()=>{
            return {
                ...inputVal,
                [name]:value
            }
        })   
    }
    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem('username');

        const {email, password} = inputVal       
         if (email === '') {
            alert('email is required')
        }
        else if (!email.includes("@")) {
            alert('Please add the valid email')
        }       
        else if (password === '') {
            alert ('Password is required')
        }
        else if (password.length < 6) {
            alert ('Password needs to be atleast 6 characters')
        }
        else {
           if (getUserArr && getUserArr.length);
           const userData =JSON.parse(getUserArr);
           const userLogin = userData.filter((el, k)=> {
            return el.email === email && el.password === password
           });
           if (userData.length === 0) {
            alert('invalid Crediential')
           }
           else {
            alert('user login successfully')
            localStorage.setItem('userDetails', JSON.stringify(userLogin))
            router.push('/')
           }

        }
    }


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
                        size="small"
                        name='email'
                        id='email'
                        onChange={getData}
                        />
                        </Box>
                        <Box>
                        <TextField 
                        label="Password" 
                        variant="outlined"
                        className='w-full'
                        size="small"
                        name='password'
                        id='password' 
                        onChange={getData}
                        />
                        </Box>
                        <Box>
                        <Button 
                        variant="contained" 
                        color="success" 
                        className='w-full'
                        onClick={addData}
                        >
                            Submit
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
                        <Link href="/signup">Sign up for Facebook</Link>                        
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