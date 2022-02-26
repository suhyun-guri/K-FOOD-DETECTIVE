import { Box, CssBaseline } from '@mui/material';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { Footer } from '../components/footer';

export default function TeamPage() {
  return (
    <>
    <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          height: '100vh',
          filter: 'brightness(30%)',
          backgroundImage: `url(${'/images/landing-bgimg.jpg'})`,
          backgroundPosition: 'center',
          width: '100%',
          backgroundSize: 'cover',
          alignContent: 'center',
          postion: 'reletive'
        }}
      />
      <LandingNavbar /> 
      <Footer />
    </>
  )
}