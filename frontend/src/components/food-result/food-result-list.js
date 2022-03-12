// /food-detail 페이지에서 좌측의 결과 음식 메뉴 리스트


import { Card, CardContent, CardMedia, Stack, Box, Typography } from '@mui/material';
import { Fragment, useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { UserContext } from '../../reducers/userReducer';

export function FoodResultList(props) {
    // const location = useLocation();
    const [state, dispatch] = useContext(UserContext);

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
                {state.detectResult["food_list"].length !== 0
                    ? state.detectResult["food_list"].map((d, i) => (
                        <Fragment key={i}>
                            <Link
                                to={`/food-detail/${d.romanized_name}`}
                                style={{ textDecoration: 'none' }}
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
                                                {d.keywords}
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