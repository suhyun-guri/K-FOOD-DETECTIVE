import { useState, useEffect } from "react";
import { Box, CssBaseline, Paper } from '@mui/material';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { LandingContentsTitle } from "../components/landing/landing-contents-title";
import { LandingContentsMobile } from '../components/landing/landing-contents-mobile';
import { LandingContentsDesktop } from '../components/landing/landing-contents-desktop';
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
      
      <Paper
        elevation={24}
        square='true'
        sx={{
          position: 'absolute',
          width: '51%',
          height: '70%',
          top: '13.5%',
          left: '22.5%',
          backgroundColor: 'rgba(255,255,255,0.5)',
          alignItems: 'center',
          overflow: 'auto'
        }}
      >
        <Box
          sx={{
            my: '3%',
            mx: '5%',
            textAlign: 'left',
            alignItems: 'center'
          }}
        >
          <LandingContentsTitle data={landingPageData.About} />
          {/* 1200px 이하일 때 */}
          <LandingContentsMobile data={landingPageData.About} />
          {/* 1200px 이상일 때 */}
          <LandingContentsDesktop data={landingPageData.About} />
        </Box>
      </Paper>

      <Footer />
    </>
  )
}