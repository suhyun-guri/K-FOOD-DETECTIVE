import { Card, CardContent, CardMedia, Stack, Box, Typography } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FavoritesCard(props) {
    console.log('Favorites Card의 props : ', props)
    return (
        <>
            <Stack
                direction='column'
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <Fragment key={i}>
                            <Stack direction='row' display='flex' justifyContent='space-between' flexBasis='auto'>
                            <Link
                                to={`/food-detail/${d.romanized_name}`}
                                
                            >
                                <Card
                                    elevation={10}
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '15vh'
                                    }} >
                                    <CardMedia
                                        component='img'
                                        sx={{ width: '10rem' }}
                                        image={d.image_url}
                                        alt="Food Picture"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto', mx: 0.5 }}>
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
                            </Stack>
                            {(i!==0 && (i+1)%3===0) ? <br/> :' '}
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}