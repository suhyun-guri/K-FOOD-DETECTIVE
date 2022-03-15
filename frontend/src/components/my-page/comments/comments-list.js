import { Card, CardContent, CardMedia, Stack, Box, Typography, Divider, IconButton } from '@mui/material';
import { Fragment, useState } from 'react';
import { FoodInfoDialog } from '../food-info-dialog';
import { getCardInfo } from '../../../utils/mypage';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function CommentsList(props) {
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
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <Fragment key={i}>
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

                                <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                        <Typography variant='subtitle2'>
                                            {d.user}
                                        </Typography>
                                        <IconButton>
                                            <CloseRoundedIcon fontSize='small' />
                                        </IconButton>
                                    </Box>
                                    <Typography variant='h6' sx={{ color: '#156AF4' }}>
                                        {d.content}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {d.created_at}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
            <FoodInfoDialog open={open} onClose={() => setOpen(false)} data={data} />
        </>
    )
}