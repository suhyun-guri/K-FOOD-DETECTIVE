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
                    <Typography variant='h5'>K-Food Image Searching</Typography>
                    <Typography variant='subtitle2'>Paste or drop image here; find the foods from an image</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '30rem',
                            height: '12rem',
                            alignItems: 'center',
                            borderColor: '#000046',
                            borderStyle: 'dashed',
                            mx: 4,
                            my: 5,
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