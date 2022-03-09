// /food-detail페이지의 Categories, Made with, Info 컨텐츠 스타일 레이아웃


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