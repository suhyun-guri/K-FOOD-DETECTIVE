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
                        backgroundImage: `url(${props.data ? props.data.images[0] : 'Loading'})`,
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
                    <Typography variant='h6'>{props.data ? props.data.paragraphs[0] : 'Loading'}</Typography>
                    <Typography variant='subtitle2'>{props.data ? props.data.paragraphs[1] : 'Loading'}</Typography>


                </Stack>
            </Stack>
        </>
    )
}