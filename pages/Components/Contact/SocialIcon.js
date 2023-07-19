import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material';

const SocialIcon = () => {
  return (
    <>
        <Box sx={{
            background: '#000',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FacebookIcon sx={{ }} />
        </Box>
    </>
  )
}

export default SocialIcon