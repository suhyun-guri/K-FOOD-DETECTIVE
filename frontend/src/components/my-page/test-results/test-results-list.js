import { Card, CardContent, CardMedia, Stack, Box, Typography, Divider, IconButton } from '@mui/material';
import { Fragment, useState } from 'react';
import { FoodInfoDialog } from '../food-info-dialog';
import { getCardInfo, delTestResult } from '../../../utils/mypage';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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


    const handleClose = (pk) => {
        delTestResult(pk).then(res=>{
            console.log(res.data);
            setOpen(false);
            window.location.reload();
        }).catch(err => {
            console.log('err 내용 : ', err);
            setOpen(false);
            alert('fail to delete')
        })
    }

    function ResultLayout({ children, color, pk }) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1,
                        color: {color}
                    }}
                >
                    {children}
                </Typography>
                <IconButton onClick={() => handleClose(pk)}>
                    <CloseRoundedIcon fontSize='small' />
                </IconButton>
            </Box>
        )
    }


    function MatchResult(num, id) {
        if (num === 0) {
            return (
                <ResultLayout color={'blue'} pk={id}>
                    {'Perfect'}
                </ResultLayout>
            )
        } else if (num === 1) {
            return (
                <ResultLayout color={'green'} pk={id}>
                    {'Great'}
                </ResultLayout>
            )
        } else if (num === 2) {
            return (
                <ResultLayout color={'black'} pk={id}>
                    {'Good'}
                </ResultLayout>
            )
        } else if (num === 3) {
            return (
                <ResultLayout color={'orange'} pk={id}>
                    {'Bad'}
                </ResultLayout>
            )
        } else if (num === 4) {
            return (
                <ResultLayout color={'red'} pk={id}>
                    {'Not Recommend'}
                </ResultLayout>
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
                                        {MatchResult(d.result, d.id)}

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