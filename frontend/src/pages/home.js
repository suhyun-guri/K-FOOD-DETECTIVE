import { Box, Container, CssBaseline } from '@mui/material';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { LandingSearch } from '../components/landing/landing-main-search';
import { Footer } from '../components/footer';

export default function HomePage() {
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
      <LandingSearch />
      <LandingNavbar /> 
      <Footer />
    </>
  )
}