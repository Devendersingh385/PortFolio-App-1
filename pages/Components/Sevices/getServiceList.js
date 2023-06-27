import PsychologyIcon from '@mui/icons-material/Psychology';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CodeIcon from '@mui/icons-material/Code';

export const getServices = [
    {
        id: 1,
         icon: <PsychologyIcon 
                sx={{
                    fontSize: '60px',
                    color: '#1877f2'
                }} />,
         title: 'Brand Strategy & Art Direction',
         description: 'Creating a higher spacing and how people move through a unique.'
     },
      {
        id: 2,
        icon: <DesignServicesOutlinedIcon
            sx={{
                fontSize: '60px',
                color: '#1877f2'
            }} />,
         title: 'UX/UI Design & Website/App Design',
         description: 'Creating a higher spacing and how people move through a unique.'
     },
      {
        id: 3,
        icon: <CodeIcon
            sx={{
                fontSize: '60px',
                color: '#1877f2'
            }} />,
         title: 'Web Development',
         description: 'Creating a higher spacing and how people move through a unique.'
     }       
]