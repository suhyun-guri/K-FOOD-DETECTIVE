import { Card, CardContent, CardMedia, Stack, Box, Typography, IconButton } from '@mui/material';
import { Fragment, useState } from 'react';
import { FoodInfoDialog } from '../food-info-dialog';
import { getCardInfo } from '../../../utils/mypage';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function FavoritesCard(props) {
    console.log('Favorites Card의 props : ', props.data)

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
                            <Stack>
                                <Card
                                    elevation={10}
                                    onClick={() => handleCardClick(d.romanized_name)}
                                    sx={{
                                        display: 'flex',
                                        width: '25rem',
                                        height: '15vh',
                                        '&:hover': { backgroundColor: '#EDF2FB' },
                                        mb: 2.5
                                    }} >
                                    <CardMedia
                                        component='img'
                                        sx={{ width: '10rem' }}
                                        image={d.image_url}
                                        alt="Food Picture"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                        <CardContent sx={{ flex: '1 0 auto', mx: 0.5, mt: 1 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                                <Typography
                                                    component="div"
                                                    sx={{
                                                        fontSize: '1.0rem'
                                                    }}
                                                >
                                                    {d.romanized_name.charAt(0).toUpperCase() + d.romanized_name.slice(1)}
                                                </Typography>
                                                <IconButton>
                                                    <CloseRoundedIcon fontSize='small' />
                                                </IconButton>
                                            </Box>
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
                            </Stack>
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>

            <FoodInfoDialog open={open} onClose={() => setOpen(false)} data={data} />

        </>
    )
}