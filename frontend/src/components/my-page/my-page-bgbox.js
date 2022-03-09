// /mypage 페이지 전체 레이아웃 스타일 설정

import React from 'react';
import { Box, Paper } from '@mui/material';

export function MyPageBgBox({ children }) {
    const PaperStyle = {
        display: 'flex',
        mt: 2,
        mx: 3,
        backgroundColor: '#EDF2FB',
        flexDirection: 'column',
        alignContent: 'center',
        overflow: 'auto'
    }

    const BoxStyle = {
        mx: 3,
        my: 2
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