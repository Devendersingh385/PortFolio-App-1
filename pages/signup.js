/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Signup = () => {

  const [inputVal, setInputVal] = useState({
    name:'',
    email:'',
    password:'',
    date:''
  })
  const [data, setData] = useState([])

  console.log(inputVal)

  const getData = (e) => {
      // console.log(e.target.value);
      const {value, name} = e.target;
      // console.log(value, name)

      setInputVal(()=> {
          return {
            ...inputVal,
            [name]:value
          }
      })
  }
const addData = (e) => {
  e.preventDefault();

  const {name, email, password, date} = inputVal

  if (name === '') {
      alert('Name field is required')
  }
  else if (email === '') {
      alert('email is required')
  }
  else if (!email.includes("@")) {
    alert('Please add the valid email')
  }
  else if (date === ''){
    alert('date field is required')
  }
  else if (password === '') {
    alert ('Password is required')
  }
  else if (password.length < 6) {
    alert ('Password needs to be atleast 6 characters')
  }
  else {
    console.log('Data added successfully')
    localStorage.setItem('username', JSON.stringify([...data, inputVal]));

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
                            Create a new account
                        </Typography>
                        <Typography 
                            variant="h5" 
                            display="block" 
                            gutterBottom
                            className='text-center'
                            >
                           It's quick and easy.
                        </Typography>
                        <Box >
                        <TextField 
                        label="Full Name" 
                        variant="outlined"
                        className='w-full'
                        size="small"
                        name='name'
                        id='name'
                        type='text' 
                        onChange={getData}                       
                        />
                        </Box>
                        <Box >
                        <TextField 
                        label="Email address or phone number" 
                        variant="outlined"
                        className='w-full'
                        size="small"
                        name='email'
                        id='email'
                        type='text'
                        onChange={getData}                       
                        />
                        </Box>
                        <Box >
                        <TextField 
                        label="Date of birth" 
                        variant="outlined"
                        className='w-full'
                        size="small"
                        name='date'
                        id='date'
                        type='date'
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
                        type='password'
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
                            Already have an account?
                            <Link href="/login">Login</Link>
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

export default Signup