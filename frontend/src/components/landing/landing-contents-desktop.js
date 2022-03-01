import { Box, Typography, Stack } from '@mui/material';


export function LandingContentsDesktop(props) {
    return (
        <>
            <Stack
                direction='column'
                spacing={1}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    mt: 1,
                    alignContent: 'center'
                }}
            >
                {/* 1200px 이상일 때  */}
                {props.data
                    ? props.data.map((d, i) => (
                        <>
                            <Stack
                            direction='row'
                                spacing={4}
                                sx={{
                                    mt: 3
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        height: '12vh',
                                        backgroundImage: `url(${d.image})`,
                                        backgroundPosition: 'center',
                                        width: '16vw',
                                        backgroundSize: 'cover',
                                        alignContent: 'center',
                                        borderRadius: 1,
                                        mb: 2
                                    }}
                                />
                                <Stack
                                direction='column'
                                spacing={1}
                                >
                                <Typography key={`${d.name}-${i}`} variant='h6'>
                                    {d.title}
                                </Typography>

                                <Typography key={`${d.content}-${i}`} variant='subtitle2'>
                                    {d.content}
                                </Typography>
                                </Stack>
                            </Stack>

                        </>
                    ))
                    : 'loading'}


            </Stack>
        </>
    )
}