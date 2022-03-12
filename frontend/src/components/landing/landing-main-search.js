import { Box, Paper, Typography } from '@mui/material';
import { LandingImgUpload } from './landing-img-upload';

export function LandingSearch() {
    const btnColor = 'white';

    return (
        <>
            <Paper
                elevation={24}
                square='true'
                sx={{
                    position: 'absolute',
                    width: '34rem',
                    height: '25rem',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    alignItems: 'center',
                    overflow: 'auto'
                }}
            >
                <Box
                    sx={{
                        direction: 'column',
                        my: 6,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant='h4' color='#343D6A'>Hello, K-Food!</Typography>
                    <Typography variant='subtitle2' color='#343D6A'>You can find Korean foods based on image. Paste or drop image here!</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '30rem',
                            height: '13rem',
                            alignItems: 'center',
                            borderColor: '#000046',
                            borderStyle: 'dashed',
                            mx: 4,
                            mt: 3,
                            mb: 6,
                            backgroundColor: 'rgba(255,255,255,0.5)'
                        }}
                    >
                        <LandingImgUpload/>
                    </Box>
                    
                </Box>
            </Paper>
        </>
    )
}