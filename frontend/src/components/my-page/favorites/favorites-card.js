import { Card, CardContent, CardMedia, Stack, Box, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function FavoritesCard(props) {
    console.log('Favorites Card의 props : ', props.data)

    return (
        <>
            <Typography variant='h5'>
                My Favorite K-Foods
            </Typography>
            <Typography variant='subtitle1' sx={{ mt: 1 }}>
                Total {props.data.length} K-Foods what you scrapped
            </Typography>
            <Stack
                direction='row'
                spacing={1}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justify: 'flex-start',
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <Fragment key={i}>
                            <Link
                                to={`/food-detail/${d.romanized_name}`}

                            >
                                <Card
                                    elevation={10}
                                    sx={{
                                        display: 'flex',
                                        width: '25rem',
                                        height: '15vh',
                                        mb: 3
                                    }} >
                                    <CardMedia
                                        component='img'
                                        sx={{ width: '10rem' }}
                                        image={d.image_url}
                                        alt="Food Picture"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1 }}>
                                            <Typography
                                                component="div"
                                                sx={{
                                                    fontSize: '1.0rem'
                                                }}
                                            >
                                                {d.romanized_name.charAt(0).toUpperCase() + d.romanized_name.slice(1)}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                component="div"
                                                sx={{
                                                    fontSize: '0.7rem'
                                                }}
                                            >
                                                {d.english_name}, {d.korean_name}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                component="div"
                                                sx={{
                                                    mt: 0.5,
                                                    fontSize: '0.3rem'
                                                }}
                                            >
                                                {d.categories}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Link>
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}