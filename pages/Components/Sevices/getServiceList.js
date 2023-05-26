import PsychologyIcon from '@mui/icons-material/Psychology';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';

export const getServices = [
    {
        id: 1,
         icon: <PsychologyIcon 
                color='primary' 
                sx={{
                    fontSize: '50px'
                }} />,
         title: 'Brand Strategy & Art Direction',
         description: 'Creating a higher spacing and how people move through a unique.'
     },
      {
        id: 2,
        icon: <DesignServicesIcon
            color='primary' 
            sx={{
                fontSize: '50px'
            }} />,
         title: 'UX/UI Design & Website/App Design',
         description: 'Creating a higher spacing and how people move through a unique.'
     },
      {
        id: 3,
        icon: <CodeIcon
            color='primary' 
            sx={{
                fontSize: '50px'
            }} />,
         title: 'Web Development',
         description: 'Creating a higher spacing and how people move through a unique.'
     }       
]