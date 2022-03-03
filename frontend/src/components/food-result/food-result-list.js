import { Card, CardContent, CardMedia, Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export function FoodResultList(props) {
    return (
        <>
            <Stack
                direction='column'
                spacing={2}
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <>
                            <Link to={'/'} style={{ textDecoration: 'none' }} >
                            <Card elevation={10} sx={{ display: 'flex', width: '100%', height: '15vh' }} >
                                <CardMedia
                                    component='image'
                                    sx={{ width: '10rem' }}
                                    image={d.image_url}
                                    alt="Food Picture"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography
                                            component="div"
                                            sx={{
                                                fontSize: {
                                                    xl: 'subtitle1',
                                                    lg: '0.5rem',
                                                    md: '0.7rem'
                                                }
                                            }}
                                        >
                                            {d.romanized_name.charAt(0).toUpperCase() + d.romanized_name.slice(1)}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            component="div"
                                            sx={{
                                                fontSize: {
                                                    xl: 'body2',
                                                    lg: '0.3rem',
                                                    md: '0.3rem'
                                                }
                                            }}
                                        >
                                            {d.english_name}, {d.korean_name}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            component="div"
                                            sx={{
                                                mt: 0.5,
                                                fontSize: {
                                                    xl: 'body2',
                                                    lg: '0.2rem',
                                                    md: '0.1rem'
                                                }
                                            }}
                                        >
                                            {d.keywords}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                            </Link>
                        </>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}