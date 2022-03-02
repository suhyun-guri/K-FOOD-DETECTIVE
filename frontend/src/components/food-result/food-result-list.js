import { Card, CardContent, CardMedia, Stack, Box, Typography } from '@mui/material';

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
                            <Card elevation={10} sx={{ display: 'flex', width: '100%', height: '15vh' }} >
                                <CardMedia
                                    component='image'
                                    sx={{ width: '10rem' }}
                                    image={d.image}
                                    alt="Food Picture"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ py: 2, flex: '1 0 auto' }}>
                                        <Typography
                                            component="div"
                                            sx={{
                                                fontSize: {
                                                    lg: '1.1rem',
                                                    md: '0.9rem'
                                                }
                                            }}
                                        >
                                            {d.name}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            component="div"
                                            sx={{
                                                fontSize: {
                                                    lg: '0.8rem',
                                                    md: '0.6rem'
                                                }
                                            }}
                                        >
                                            {d.otherName}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            component="div"
                                            sx={{
                                                mt: 1,
                                                fontSize: {
                                                    lg: '0.6rem',
                                                    md: '0.4rem'
                                                }
                                            }}
                                        >
                                            {d.categories}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}