import React from 'react';
import { Box } from '@mui/material';

export function PageMain({ children }) {
    const BoxStyle = {
        width: '100%',
        mb: '5%',
        alignItems: 'center',
        scrollbarWidth: 'auto',
    }

    return (
        <>
            <Box sx={BoxStyle}>
                {children}
            </Box>
        </>
    )
}