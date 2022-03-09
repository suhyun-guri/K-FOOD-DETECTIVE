import { Box, Typography } from '@mui/material';
import { MyPageBgBox } from '../my-page-bgbox';

export function FavoritesList() {
    return (
        <MyPageBgBox>
            <Box>
                <Typography variant='h5'>
                   My favorite K-Foods
                </Typography>
                <Typography variant='subtitle1' sx={{mt: 1}}>
                    Total 12 K-Foods Informations
                </Typography>
            </Box>
        </MyPageBgBox>
    );
}