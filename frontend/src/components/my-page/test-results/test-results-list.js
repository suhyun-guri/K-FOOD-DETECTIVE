import { Card, CardContent, CardMedia, Stack, Box, Typography, Divider } from '@mui/material';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
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
        }).catch(err=>{
            console.log(err);
            //alert('fail');
        })
    }

    function MatchColor(result) {
        if (result === 'perfect') {
            console.log('perfect')
            return 'blue'
        } else if (result === 'great') {
            console.log('great')
            return 'green'
        } else if (result === 'good') {
            console.log('good')
            return 'black'
        } else if (result === 'bad') {
            console.log('bad')
            return 'orange'
        } else {
            console.log('not recommend')
            return 'red'
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
                                    onClick={() => handleCardClick(d.romanized_name)}
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '15vh',
                                        '&:hover': { backgroundColor: '#EDF2FB'},
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
                                                {d.food.romanized_name}
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
                                        <Typography
                                            variant='h5'
                                            sx={{
                                                mb: 1,
                                                color: `${MatchColor(d.result)}`
                                            }}
                                        >
                                            {/* {d.result.charAt(0).toUpperCase() + d.result.slice(1)} */}
                                            {`${d.result}`.toUpperCase()}
                                        </Typography>
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
                            <FoodInfoDialog open={open} onClose={() => setOpen(false)} data={data} />
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}