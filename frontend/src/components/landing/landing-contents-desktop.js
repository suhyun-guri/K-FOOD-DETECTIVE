import { Box, Typography, Stack } from '@mui/material';


export function LandingContentsDesktop(props) {
    return (
        <>
            {/* 1200px 이상일 때  */}

            <Stack
                direction='row'
                spacing={1}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    mt: 3,
                    alignContent: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        height: '15vh',
                        backgroundImage: `url(${'/images/landing-bgimg.jpg'})`,
                        backgroundPosition: 'center',
                        width: '50%',
                        backgroundSize: 'cover',
                        alignContent: 'center',
                        borderRadius: 1
                    }}
                />

                <Stack
                    spacing={1}
                    sx={{
                        mt: 3
                    }}
                >
                    <Typography variant='h6'>{props.data ? props.data.paragraph01[0] : 'Loading'}</Typography>
                    <Typography variant='subtitle2'>{props.data ? props.data.paragraph01[1] : 'Loading'}</Typography>


                </Stack>
            </Stack>
        </>
    )
}