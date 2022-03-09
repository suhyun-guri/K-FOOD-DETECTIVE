// /food-detail 페이지에서 survey와 recipe 버튼의 레이아웃을 설정

import React from 'react';
import { Stack } from '@mui/material';

export function FoodButtonStackLayout({ children }) {
    const StackStyle = {
        mt: 8,
        mb: 10,
        alignItems: 'center'
    }

    return (
        <>
            <Stack 
                spacing={8}
                direction='row'
                justifyContent="center"
                alignItems="center"
                sx={StackStyle}
            >
                {children}
            </Stack>
        </>
    )
}