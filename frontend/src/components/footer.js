import { Box, Container, Typography } from '@mui/material';

export function Footer() {
  return (
      <Box
        component="footer"
        sx={{
          align: 'center',
          display: 'flex',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '3.2rem',
          backgroundColor: 'white',
          py: 1.5
        }}
      >
        <Container 
          maxWidth="false"
        >
            <Typography variant="body1" color="text.secondary" variant="caption" fontSize='0.3rem'>
                {'Copyright © K-Food Image Searching Service '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>
      </Box>
  );
}