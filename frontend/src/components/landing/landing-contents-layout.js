import { Box, Paper, Typography, InputAdornment, TextField, IconButton, Stack } from '@mui/material';


export function LandingContentsLayout(props) {
    return (
        <>
            <Paper
                elevation={24}
                square= 'true'
                sx={{
                    position: 'absolute',
                    width: '51%',
                    height: '70%',
                    top: '13.5%',
                    left: '22.5%',  
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    alignItems: 'center',
                    overflow: 'auto'
                }}
            >
                <Box
                    sx = {{
                        my: '3%',
                        mx: '5%',
                        textAlign:'left', // 1200px 이상은 left, 이하는 center로 변경해주기
                        alignItems: 'center'
                    }}   
                >
                    <Typography variant='h5'>{props.data ? props.data.title : 'Loading'}</Typography>
                    <Typography variant='subtitle2'>{props.data ? props.data.subtitle : 'Loading'}</Typography>
                    
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
                            backgroundImage: `url(${'/images/landing-bgimg.jpg'})`,
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
                        <Typography variant='h6'>{props.data ? props.data.paragraph01[0] : 'Loading'}</Typography>
                        <Typography variant='subtitle2'>{props.data ? props.data.paragraph01[1] : 'Loading'}</Typography>
                        </Stack>
                    </Stack>


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
                </Box>
            </Paper>
        </>
    )
}