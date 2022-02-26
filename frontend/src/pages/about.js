import { useState, useEffect } from "react";
import { Box, CssBaseline } from '@mui/material';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { LandingContentsLayout } from '../components/landing/landing-contents-layout';
import { Footer } from '../components/footer';
import JsonData from '../data/data.json';

export default function AboutPage() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

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
      {/* <LandingContentsLayout
        title= 'About Our Service'
        subtitle= 'Overview about our service vision, target etc.'
      /> */}
      <LandingContentsLayout data={landingPageData.About} />
      
      <Footer />
    </>
  )
}