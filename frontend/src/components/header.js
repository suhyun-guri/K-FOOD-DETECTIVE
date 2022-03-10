import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography, InputAdornment, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UploadImageBtn } from './img-upload-btn';
import { UserProfile } from './user-profile';
import { UserContext } from '../reducers/userReducer';

const LandigNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

const pagesMobile = ['Search', 'Sign In']
const btnColor = 'gray';

function ShowUserProfile(props) {
    const isLoggedIn = props.isLoggedIn;
    const fontColor = 'black';

    if (isLoggedIn) {
        return <UserProfile fontColor={fontColor} />
    }
    return (
        <Link to='/signin'>
            <Button variant='contained' sx={{ width: '10vw' }} >Sign In</Button>
        </Link>
    );
}

export function Header() {
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
                            sx={{ flexGrow: 30, ml: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}
                        >
                            <Link to='/'>
                                <Button
                                    color='primary'
                                    variant='text'
                                >
                                    LOGO
                                </Button>
                            </Link>

                        </Box>

                        <Box
                            sx={{
                                alignItems: 'center',
                                width: '30vw',
                                flexGrow: 20
                            }}
                        >

                            <TextField
                                id="input-with-icon-textfield"
                                label="Image URL"
                                size='small'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <UploadImageBtn btnColor={btnColor} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                sx={{
                                    my: 1,
                                    alignItems: 'center',
                                    display: { xs: 'none', md: 'block' }
                                }}
                            />

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* <Link to='/signin'>
                                <Stack spacing={1} direction='row'>
                                    <Button variant='contained' sx={{ width: '10vw' }}>Sign In</Button>
                                </Stack>
                            </Link> */}
                            <ShowUserProfile isLoggedIn={userInfo.isLogin} />
                        </Box>

                        {/* 모바일용 */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='space-between'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                                sx={{
                                    display: {
                                        xs: 'inline-flex',
                                        md: 'none'
                                    }
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
