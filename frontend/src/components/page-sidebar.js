import React from 'react';
import { Box } from '@mui/material';

export function PageSideBar({ children }) {
    const BoxStyle = {
        width: '25%',
        mx: '2%',
        mb: '5%',
        alignItems: 'center',
        scrollbarWidth: 'none'
    }

    return (
        <>
            <Box sx={BoxStyle}>
                {children}
            </Box>
        </>
    )
}