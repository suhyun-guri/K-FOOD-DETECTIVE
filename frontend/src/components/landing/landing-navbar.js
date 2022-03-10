import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserProfile } from '../user-profile';
import { UserContext } from '../../reducers/userReducer';

const LandigNavbarRoot = styled(AppBar)({
    backgroundColor: 'rgba(0,0,0,0.0)',
    boxShadow: 'none'
});

const pages = ['About', 'Team']
const pagesMobile = ['About', 'Team', 'Sign In']

function ShowUserProfile(props) {
    const isLoggedIn = props.isLoggedIn;
    const fontColor = 'white';

    if (isLoggedIn) {
        return <UserProfile fontColor={fontColor} />
    }
    return (
        <Link to='/signin'>
            <Button variant='contained' sx={{ width: '10vw' }} >Sign In</Button>
        </Link>
    );
}

export function LandingNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [{userInfo}, dispatch] = useContext(UserContext);

    return (
        <>
            <LandigNavbarRoot>
                <Container maxWidth="xl" justifyContent='space-between'>
                    <Toolbar disableGutters>
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
                                    LOGO
                                </Button>
                            </Link>
                        </Box>

                        {/* 1200px 이상 일 때 */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link to={{
                                    pathname: `/${page.toLowerCase()}`
                                }}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {/* <Link to='/signin'>
                                    <Button variant='contained' sx={{width: '10vw'}} >Sign In</Button>
                                </Link> */}
                                <ShowUserProfile isLoggedIn={userInfo.isLogin} />
                        </Box>

                        {/* 1200px 이하 일 때 */}
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
                                {/* 나중에 되면 drawer로 해도 좋겠다 */}
                                {pagesMobile.map((page) => (
                                    <Link 
                                        to={{pathname: `/${page.replace(/ /g,"").toLowerCase()}`}}
                                        style={{ textDecoration: 'none', color: 'black' }}    
                                    >
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </LandigNavbarRoot>
        </>
    )
}
