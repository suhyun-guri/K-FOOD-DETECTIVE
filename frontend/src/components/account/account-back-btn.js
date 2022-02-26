import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const AccountNavbarRoot = styled(AppBar)({
    backgroundColor: 'rgba(0,0,0,0.0)',
    boxShadow: 'none'
});

export function AccountBackBtn() {
    return (
        <>
            <AccountNavbarRoot>
                <Box
                    sx={{ flexGrow: 20, ml: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}
                >
                    <Link to='/'>
                    <Button
                        sx={{
                            color: 'white'
                        }}
                        variant='text'
                    >
                        <ArrowBackIosNewRoundedIcon /> 
                        <Typography>Go back to Home</Typography>
                    </Button>
                    </Link>
                </Box>
            </AccountNavbarRoot>
        </>
    )
}