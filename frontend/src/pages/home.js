import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { Footer } from '../components/footer'

export default function HomePage() {
  return (
    <>
    <CssBaseline />
      
      <Box
      style={{
        filter: 'brightness(30%)',
        backgroundImage: `url(${'/images/landing-bgimg.jpg'})`,
        display: 'flex',
        width: '100%',
        backgroundSize: 'cover',
      }}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '100vh'
      }}
      />
        <LandingNavbar /> 
        <Footer />
    </>
  )
}