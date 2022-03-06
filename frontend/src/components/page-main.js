// /food-detail과 /mypage의 레이아웃을 잡기 위한 컴포넌트
// 화면 우측의 넓은 영역 지정

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