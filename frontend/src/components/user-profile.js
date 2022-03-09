// 로그인 후 유저의 프로필을 보여주는 컴포넌트
// LoginForm에서 받은 유저 정보를 어떻게 적용해주어야할지 고민 중

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/isLogin';


export function UserProfile({ fontColor }) {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserProfile = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseUserProfile = () => {
    setAnchorElUser(null);
  }

  const handleLogoutCloseUserProfile = () => {
    setAnchorElUser(null);
    logout(navigate);
  }


  return (
    <Box display={'flex'} direction="row">
      <Button sx={{ textAlign: 'left' }} onClick={handleOpenUserProfile}>
        <Avatar alt="Remy Sharp" src="/images/avatar/default01.jpg" />
        <Box direction="column" sx={{ ml: 1 }}>
          <Typography variant='subtitle2' sx={{ color: `${fontColor}` }}>Elice</Typography>
          <Typography variant='body2' sx={{ color: `${fontColor}` }}>Default Nationality</Typography>
        </Box>
      </Button>

      <Menu
        id="menu-user"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserProfile}
      >
        {/* {pages.map((page) => (
          <Link
            to={{ pathname: `/${page.replace(/ /g, "").toLowerCase()}` }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem key={page} onClick={handleCloseUserProfile}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          </Link>
        ))} */}

        <Link
          to={{ pathname: '/mypage' }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem key='mypage' onClick={handleCloseUserProfile}>
            <Typography textAlign="center">My Page</Typography>
          </MenuItem>
        </Link>

        <Link
          to={{ pathname: '/' }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem key='mypage' onClick={handleLogoutCloseUserProfile}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Link>

      </Menu>
    </Box>
  );
}
