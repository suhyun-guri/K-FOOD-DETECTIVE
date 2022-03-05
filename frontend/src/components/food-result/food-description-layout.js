import React from 'react';
import { Box, Paper } from '@mui/material';

export function FoodDescriptionLayout({ children }) {
    const BoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        mt: 4,
        width: '100%'
    }

    return (
        <>
            <Box sx={BoxStyle}>
                {children}
            </Box>
        </>
    )
}