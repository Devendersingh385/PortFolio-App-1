import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Buttons = ({title}) => {
  return (
    <>    
          <Button 
            size='large' 
            variant="contained" 
            sx={{
              backgroundColor: '#1877f2',
              borderRadius: '50px',
              padding: '12px 30px',
              textTransform: 'capitalize',
              fontWeight: 400
            }}         
          >
            {title} 
            <KeyboardArrowRightIcon />
          </Button>
    </>
  )
}

export default Buttons