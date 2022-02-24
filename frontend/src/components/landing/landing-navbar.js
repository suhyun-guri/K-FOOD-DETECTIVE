import * as React from 'react';
import styled from '@emotion/styled';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const LandigNavbarRoot = styled(AppBar)({
    backgroundColor: 'rgba(0,0,0,0.0)',
    boxShadow: 'none'
});

const pages = ['About', 'Team']
const pagesMobile = ['About', 'Team', 'Sign In', 'Register']

export function LandingNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <LandigNavbarRoot>
                <Container maxWidth="xl" justifyContent='space-between'>
                    <Toolbar disableGutters>
                        <Box
                            sx={{ flexGrow: 20, ml: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}
                        >
                            <Button
                                sx={{
                                    color: 'white'
                                }}
                                variant='text'
                            >
                                LOGO
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Stack spacing={1} direction='row'>
                                <Button variant='outlined' sx={{color: 'white'}}>Register</Button>
                                <Button variant='contained'>Sign In</Button>
                            </Stack>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='space-between'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{
                                    display: {
                                        xs: 'inline-flex',
                                        md: 'none'
                                    },
                                    color: 'white'
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pagesMobile.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </LandigNavbarRoot>
        </>
    )
}
