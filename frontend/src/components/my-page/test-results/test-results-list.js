import { Card, CardContent, CardMedia, Stack, Box, Typography, Divider } from '@mui/material';
import { Fragment, useState } from 'react';
import { FoodInfoDialog } from '../food-info-dialog';
import { getCardInfo } from '../../../utils/mypage';

export function TestResultsList(props) {
    console.log('TestResultsList props : ', props.data)

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);


    const handleCardClick = (name) => {
        getCardInfo(name).then(res => {
            console.log(res.data);
            setData(res.data);
            setOpen(true);
            //alert('성공');
        }).catch(err => {
            console.log(err);
            //alert('fail');
        })
    }

    function MatchResult(num) {
        if (num === 0) {
            return (
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: `blue`
                    }}
                >
                    Perfect
                </Typography>
            )
        } else if (num === 1) {
            return (
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: `green`
                    }}
                >
                    Great
                </Typography>
            )
        } else if (num === 2) {
            return (
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: `black`
                    }}
                >
                    Good
                </Typography>
            )
        } else if (num === 3) {
            return (
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: `orange`
                    }}
                >
                    Bad
                </Typography>
            )
        } else if (num === 4) {
            return (
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: `red`
                    }}
                >
                    Not Recommend
                </Typography>
            )
        }
    }

    return (
        <>
            <Typography variant='h5'>
                Test Results
            </Typography>
            <Typography variant='subtitle1' sx={{ mt: 1 }}>
                Total {props.data.length} test results you did
            </Typography>
            <Stack
                direction='column'
                spacing={1}
                sx={{
                    display: 'flex',
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <Fragment key={i}>
                            <Stack>
                                <Card
                                    elevation={10}
                                    onClick={() => handleCardClick(d.food.romanized_name)}
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '15vh',
                                        '&:hover': { backgroundColor: '#EDF2FB' },
                                        mb: 3
                                    }} >
                                    <CardMedia
                                        component='img'
                                        sx={{ width: '10rem' }}
                                        image={d.food.image_url}
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
                                                {d.food.romanized_name.charAt(0).toUpperCase() + d.food.romanized_name.slice(1)}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                component="div"
                                                sx={{
                                                    fontSize: '0.7rem'
                                                }}
                                            >
                                                {d.food.english_name}, {d.food.korean_name}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                component="div"
                                                sx={{
                                                    mt: 0.5,
                                                    fontSize: '0.3rem'
                                                }}
                                            >
                                                {d.food.categories}
                                            </Typography>

                                        </CardContent>
                                    </Box>

                                    <Divider orientation="vertical" sx={{ mx: 2 }} />

                                    <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1.5 }}>
                                        {MatchResult(d.result)}

                                        <Typography variant='body1'>
                                            Other recommended foods :
                                            {d.recommend_foods
                                                ? d.recommend_foods.map((r) => (
                                                    // ` ${r.charAt(0).toUpperCase() + r.slice(1)}`
                                                    ` ${r.charAt(0).toUpperCase()}${r.slice(1)}`
                                                )).join(', ')
                                                : ''}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Fragment>
                    ))
                    : 'loading'}
                <FoodInfoDialog open={open} onClose={() => setOpen(false)} data={data} />
            </Stack>
        </>
    )
}