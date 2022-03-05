import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

export function AccountUserProfile() {
  return (
    <Box display={'flex'} direction="row">
        <Avatar alt="Remy Sharp" src="/images/avatar/default01.jpg" />
        <Box direction="column" sx={{ ml: 1 }}>
            <Typography variant='subtitle2'>Elice</Typography>
            <Typography variant='body2'>Default Nationality</Typography>
        </Box>
    </Box>
  );
}
