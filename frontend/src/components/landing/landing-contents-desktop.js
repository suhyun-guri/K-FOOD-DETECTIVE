import { Box, Typography, Stack } from '@mui/material';


export function LandingContentsDesktop(props) {
    return (
        <>
            <Stack
                direction='column'
                spacing={1}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    mt: 3,
                    alignContent: 'center'
                }}
            >
                {/* 1200px 이상일 때  */}
                {props.data
                    ? props.data.map((d, i) => (
                        <>



                            <Stack
                            direction='row'
                                spacing={3}
                                sx={{
                                    mt: 3
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        height: '15vh',
                                        backgroundImage: `url(${d.image})`,
                                        backgroundPosition: 'center',
                                        width: '40vw',
                                        backgroundSize: 'cover',
                                        alignContent: 'center',
                                        borderRadius: 1
                                    }}
                                />
                                <Stack
                                direction='column'
                                spacing={1}
                                >
                                <Typography key={`${d.name}-${i}`} variant='h6'>
                                    {d.title}
                                </Typography>

                                <Typography variant='subtitle2'>
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