import { Box, Typography, Stack } from '@mui/material';

export function LandingContentsMobile(props) {
    return (
        <>
            {/* 1200px 이하일 때  */}
            <Stack
                direction='column'
                spacing={1}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    mt: 3,
                    alignContent: 'center'
                }}
            >

                {props.data
                    ? props.data.map((d, i) => (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                    height: '20vh',
                                    backgroundImage: `url(${d.image})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    backgroundSize: 'contain',
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
                                <Typography key={`${d.title}-${i}`} variant='h6'>
                                    {d.title}
                                </Typography>

                                <Typography key={`${d.content}-${i}`} variant='subtitle2'>
                                    {d.content}
                                </Typography>
                            </Stack>
                        </>
                    ))
                    : 'loading'}
            </Stack >
        </>
    )
}