// /food-detail 페이지의 main관련(우측 컨텐츠) 전체적인 내용을 담음
// Page같이 되어서 이걸 component에 두어도 될지 고민


import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';
import { FoodImage } from './food-image';
import { FoodTitleLayout } from './food-title-layout';
import { FoodContentLayout } from './food-content-layout';
import { FoodDescriptionLayout } from './food-description-layout';
import { FoodButtonStackLayout } from './food-button-stack-layout';
import { FoodFavoriteBtn } from './food-favorite-btn';

export function FoodDetail(props) {
    const params = useParams();
    const data = props.data;
    const [food, setFood] = useState(undefined);
    const [id, setId] = useState(0);
    console.log(params)
    console.log('food-detail에서 id : ', id)

    useEffect(() => {
        props.data.map((d, i) => {
            if (d.romanized_name === params.romanized_name) {
                setFood(params.romanized_name);
                setId(i)
                console.log('food : ', food);
                console.log('id : ', id)
            }
            return food;
        })
    }, [params])

    return (
        <>
            <FoodContentLayout>
                <FoodImage data={data} id={id} />
                <FoodTitleLayout>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    mt: 1.4,
                                    ml: 2,
                                    color: 'white'
                                }}
                            >
                                {props.data[id].romanized_name.charAt(0).toUpperCase() + props.data[id].romanized_name.slice(1)}
                            </Typography>
                            <Typography
                                variant='caption'
                                sx={{
                                    mt: 2,
                                    ml: 0.5,
                                    color: 'white'
                                }}
                            >
                                {props.data[id].english_name + ', ' + props.data[id].korean_name}
                            </Typography>
                        </Box>
                        <Typography
                            variant='caption'
                            sx={{
                                mt: 1,
                                ml: 2,
                                color: 'white'
                            }}
                        >
                            {props.data[id].hit + ' users find and ' + props.data[id].likes + ' users like this food!'}
                        </Typography>
                    </Box>
                    <FoodFavoriteBtn />
                </FoodTitleLayout>


                <FoodDescriptionLayout>
                    <Typography
                        variant='h6'
                        sx={{
                            color: '#1D4ED8'
                        }}
                    >
                        ■ Categories :
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            ml: 2.5
                        }}
                    >
                        {props.data[id].keywords}
                    </Typography>

                    <Typography
                        variant='h6'
                        sx={{
                            mt: 2.5,
                            color: '#1D4ED8'
                        }}
                    >
                        ■ Made with :
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            ml: 2.5
                        }}
                    >
                        {props.data[id].ingredients}
                    </Typography>

                    <Typography
                        variant='h6'
                        sx={{
                            mt: 2.5,
                            color: '#1D4ED8'
                        }}
                    >
                        ■ Information :
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            ml: 2.5
                        }}
                    >
                        {props.data[id].info}
                    </Typography>

                    <FoodButtonStackLayout>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{ width: '20rem' }}
                            startIcon={<AssignmentTurnedInRoundedIcon />}
                        >
                            Will it suit my taste?
                        </Button>

                        <Button
                            variant='contained'
                            size='large'
                            sx={{ width: '20rem' }}
                            startIcon={<SoupKitchenRoundedIcon />}
                        >
                            Show this food recipe
                        </Button>

                    </FoodButtonStackLayout>


                    <FoodTitleLayout>
                        <Typography
                            variant='h5'
                            sx={{
                                mt: 2.7,
                                ml: 2,
                                color: 'white'
                            }}
                        >
                            Comments
                        </Typography>
                    </FoodTitleLayout>

                </FoodDescriptionLayout>
            </FoodContentLayout>

        </>
    )
}

