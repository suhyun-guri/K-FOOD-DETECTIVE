import React from 'react';
import { Box, Paper } from '@mui/material';

export function FoodContentLayout({ children }) {
    const PaperStyle = {
        display: 'flex',
        mt: 2,
        mx: 2,
        flexDirection: 'column',
        alignContent: 'center',
        overflow: 'auto'
    }

    const BoxStyle = {
        mx: 8
    }

    return (
        <>
            <Paper sx={PaperStyle}>
                <Box sx={BoxStyle}>
                    {children}
                </Box>
            </Paper>
        </>
    )
}