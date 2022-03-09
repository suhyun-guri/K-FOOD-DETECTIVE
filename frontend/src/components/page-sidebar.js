// /food-detail과 /mypage의 레이아웃을 잡기 위한 컴포넌트
// 화면 좌측의 좁은 영역 지정

import React from 'react';
import { Box } from '@mui/material';

export function PageSideBar({ children }) {
    const BoxStyle = {
        width: '50%',
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