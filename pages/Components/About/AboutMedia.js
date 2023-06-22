import React from 'react';
import Image from 'next/image';

const AboutMedia = () => {
  return (
    <>
         <Image 
            src='/about-8.jpg' 
            alt=''
            width={500}
            height={300}
            className='rounded-xl'
        />
    </>
  )
}

export default AboutMedia