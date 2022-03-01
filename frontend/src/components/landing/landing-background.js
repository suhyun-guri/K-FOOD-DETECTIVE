import React from 'react';
import { Box, CssBaseline } from '@mui/material';

export function LandingBackground() {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '100vh',
        filter: 'brightness(30%)',
        backgroundImage: `url(${'/images/bgimg/landing-bgimg.jpg'})`,
        backgroundPosition: 'center',
        width: '100%',
        backgroundSize: 'cover',
        alignContent: 'center',
        postion: 'reletive'
    };

    return (
        <>
            <CssBaseline />
            <Box sx={style} />
        </>
    )
}