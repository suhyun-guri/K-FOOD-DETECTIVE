import { Card, CardContent, CardMedia, Stack, Box, Typography, Divider } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CommentsList(props) {
    console.log('CommentsList의 props : ', props.data)
    // console.log('CommentsList의 content : ', props.data[0].content)

    return (
        <>
            <Typography variant='h5'>
                Comments
            </Typography>
            <Typography variant='subtitle1' sx={{ mt: 1 }}>
                Total {props.data.length} comment you written
            </Typography>

            <Stack
                direction='column'
                spacing={1}
                sx={{
                    display: 'flex',
                    // flexWrap: 'wrap',
                    // justifyContent: 'flex-start',
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
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
                                        <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1.5 }}>
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

                                    <Divider orientation="vertical" sx={{ mx: 2 }} />

                                    <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1.5 }}>
                                        <Typography variant='subtitle2'>
                                            {d.username}
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: '#156AF4' }}>
                                            {d.content}
                                        </Typography>
                                        <Typography variant='body2'>
                                            {d.created_at}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}