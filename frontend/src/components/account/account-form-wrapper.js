import React from 'react';
import { Box, Paper } from '@mui/material';

export function AccountFormWrapper({ children }) {
    const PaperStyle = {
        position: 'absolute',
        width: '51%',
        height: '70%',
        top: '13.5%',
        left: '22.5%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        overflow: 'auto'
    };

    const BoxStyle = {
        my: '3%',
        mx: '5%',
        textAlign: 'left',
        alignItems: 'center',
        scrollbarWidth: 'none'
    }

    return (
        <>
            <Paper elevation={24} square='true' sx={PaperStyle}>
                <Box sx={BoxStyle}>
                    {children}
                </Box>
            </Paper>
        </>
    )
}