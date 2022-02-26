import { Box, CssBaseline } from '@mui/material';
import { AccountBackBtn } from '../components/account/account-back-btn';

export default function RegisterPage() {
  return (
    <>
    <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          height: '100vh',
          filter: 'brightness(30%)',
          backgroundImage: `url(${'/images/bgimg/account-bgimg.jpg'})`,
          backgroundPosition: 'center',
          width: '100%',
          backgroundSize: 'cover',
          alignContent: 'center',
          postion: 'reletive'
        }}
      />
      <AccountBackBtn />
    </>
  )
}