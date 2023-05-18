import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Buttons = ({title}) => {
  return (
    <>
        <Button size='large' variant="contained">{title} <KeyboardArrowRightIcon /></Button>
    </>
  )
}

export default Buttons