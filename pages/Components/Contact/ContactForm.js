import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Buttons from '../Buttons/Buttons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialIcon from './SocialIcon';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    textarea: Yup.string().required('Textarea is required'),
});

const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    textarea: '',
};

const ContactForm = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (values) => {
        e.preventdefault();
        // Handle form submission logic here
        console.log(values);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="py-16">
                <Container maxWidth="lg">
                    <Grid container spacing={5} display="flex" alignItems="center">
                        <Grid item xs={12} lg={6} >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: '500',
                                    fontFamily: 'SF Pro Display',
                                    marginBottom: '24px'
                                }}
                            >
                                Get in touch!
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: '500',
                                    fontFamily: 'SF Pro Display',
                                    marginBottom: '24px'
                                }}
                            >
                                Get in touch with us by sending a meeage and we will get back to you soon to schedule a discovery call.
                            </Typography>
                            <Box>
                           <SocialIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Card
                                className='p-8'
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: '500',
                                        fontFamily: 'SF Pro Display',
                                        marginBottom: '24px'
                                    }}
                                >
                                    Let’s work together.
                                </Typography>
                                <CardContent
                                    sx={{
                                        padding: 0,
                                    }}
                                >

                                    {/* <Formik
                                        initialValues={{
                                            fullname: '',
                                            email: '',
                                            phone:'',

                                        }}
                                        validationSchema={Yup.object({
                                            fullname: Yup.string()
                                            .max(15, 'Must be 15 characters or less')
                                            .required('Name must be Required'),
                                            email: Yup.string()
                                            .email('Invalid email address')
                                            .required('Required'),
                                            // phone: Yup.string()
                                            // .max(10, 'Must be 10 characters or less')
                                            // .require('Required'),
                                        })}
                                        onSubmit={(values) => {
                                            values
                                          }}
                                    
                                    >
                                        <Form>
                                            <TextField id="filled-basic" label="Full Name" variant="filled" name='fullname' className='w-full' value={name} onChange={(e) => setName(e.target.value)}
                                                sx={{
                                                    marginBottom: '24px'
                                                }}

                                            />
                                            <TextField id="filled-basic" label="Email" variant="filled" name='email' className='w-full mb-3' value={email} onChange={(e) => setEmail(e.target.value)}
                                                sx={{
                                                    marginBottom: '24px'
                                                }}
                                            />
                                            <TextField id="filled-basic" label="Phone Number" variant="filled" name='phone' className='w-full mb-3' value={phone} onChange={(e) => setPhone(e.target.value)}
                                                sx={{
                                                    marginBottom: '24px'
                                                }}
                                            />

                                            <TextField
                                                id="message"
                                                label="Message"
                                                placeholder="Message"
                                                multiline
                                                variant="filled"
                                                rows={4}
                                                className='w-full'
                                                sx={{
                                                    marginBottom: '24px'
                                                }}
                                            />
                                            <Buttons title='Submit' />
                                        </Form>
                                    </Formik> */}

                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <Box sx={{
                                                marginBottom: '24px'
                                            }}>
                                                <TextField type="text" id="filled-basic" label="Full Name" variant="filled" name='fullname' className='w-full' value={name} onChange={(e) => setName(e.target.value)}
                                                />
                                                <ErrorMessage name="fullName" component="div" className="error text-red-600 text-xs mt-1" />
                                            </Box>

                                            <Box sx={{
                                                marginBottom: '24px'
                                            }}>
                                                <TextField type="email" id="filled-basic" label="Email" variant="filled" name='email' className='w-full' value={email} onChange={(e) => setEmail(e.target.value)}

                                                />
                                                <ErrorMessage name="email" component="div" className="error text-red-600 text-xs mt-1" />
                                            </Box>

                                            <Box sx={{
                                                marginBottom: '24px'
                                            }}>
                                                <TextField type="text" id="filled-basic" label="Phone Number" variant="filled" name='phone' className='w-full' value={phone} onChange={(e) => setPhone(e.target.value)}

                                                />
                                                <ErrorMessage name="phone" component="div" className="error text-red-600 text-xs mt-1" />
                                            </Box>

                                            <Box sx={{
                                                marginBottom: '24px'
                                            }}>
                                                <TextField
                                                    id="message"
                                                    label="Message"
                                                    placeholder="Message"
                                                    multiline
                                                    name='textarea'
                                                    variant="filled"
                                                    rows={4}
                                                    className='w-full'
                                                />
                                                <ErrorMessage name="textarea" component="div" className="error text-red-600 text-xs mt-1" />
                                            </Box>
                                            <button type="submit">Submit</button>
                                        </Form>
                                    </Formik>
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