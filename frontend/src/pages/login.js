import { Box, CssBaseline, Paper } from '@mui/material';
import { AccountBackBtn } from '../components/account/account-back-btn';
import { AccountNavTab } from '../components/account/account-nav-tab';

export default function LoginPage() {
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

      
      <Paper
        elevation={24}
        square='true'
        sx={{
          position: 'absolute',
          width: '51%',
          height: '70%',
          top: '13.5%',
          left: '22.5%',
          backgroundColor: 'rgba(255,255,255,0.5)',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >

        <Box
          sx={{
            my: '3%',
            mx: '5%',
            textAlign: 'left',
            alignItems: 'center',
            scrollbarWidth: 'none'
          }}
        >
          <AccountNavTab />
          

        </Box>

      </Paper>

    </>
  )
}