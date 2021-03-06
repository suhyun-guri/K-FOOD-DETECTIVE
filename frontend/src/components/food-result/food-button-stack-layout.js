// /food-detail 페이지에서 survey와 recipe 버튼의 레이아웃을 설정

import React from 'react';
import { Stack } from '@mui/material';

export function FoodButtonStackLayout({ children }) {
    const StackStyle = {
        mt: 8,
        mb: 10,
        mx: 25,
        alignItems: 'center',
        justify: 'space-between'
    }

    return (
        <>
            <Stack 
                display= 'flex'
                spacing={8}
                direction='row'
                justify="center"
                alignItems="center"
                sx={StackStyle}
            >
                {children}
            </Stack>
        </>
    )
}