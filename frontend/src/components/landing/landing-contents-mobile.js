import { Box, Typography, Stack } from '@mui/material';


export function LandingContentsMobile(props) {
    console.log(props.data.title)
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
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        height: '20vh',
                        backgroundImage: `url(${props.data ? props.data.images : 'Loading'})`,
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
                    {/* <Typography variant='h6'>{props.data ? props.data.title : 'Loading'}</Typography> */}
                    <Typography variant='h6'>
                        {props.data
                            ? props.data.map( d => (
                                {d.title}
                            ))
                        : 'loading'}
                    </Typography>
                    <Typography variant='subtitle2'>{props.data ? props.data.content : 'Loading'}</Typography>
                </Stack>
            </Stack>
        </>
    )
}