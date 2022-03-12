import * as React from 'react';
import { Box, Dialog, DialogActions, DialogContent, IconButton, Typography } from '@mui/material';
import { FoodImage } from '../food-result/food-image';
import { FoodTitleLayout } from '../food-result/food-title-layout';
import { FoodContentLayout } from '../food-result/food-content-layout';
import { FoodDescriptionLayout } from '../food-result/food-description-layout';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FoodFavoriteBtn } from '../food-result/food-favorite-btn';


export function FoodInfoDialog({ open, onClose, data }) {

    console.log('FoodInfoDialog data : ', data)

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Box display={'flex'}>
                <DialogActions sx={{ flexGrow: '1' }}>
                    <IconButton onClick={onClose}>
                        <CloseRoundedIcon fontSize='large' />
                    </IconButton>
                </DialogActions>
            </Box>
            <DialogContent>
                <FoodContentLayout>
                    <FoodImage data={`data:image/jpeg;base64,${data.length!==0 ? data.image_url : ''}`} />
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
                                    {data.length!==0 ? data.romanized_name.charAt(0).toUpperCase() + data.romanized_name.slice(1) : 'loading'}
                                </Typography>
                                <Typography
                                    variant='caption'
                                    sx={{
                                        mt: 2,
                                        ml: 0.5,
                                        color: 'white'
                                    }}
                                >
                                    {data.length!==0 ? data.english_name + ', ' + data.korean_name : 'loading'}
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
                                {data.length!==0 ? data.hit + ' users find and ' + data.likes + ' users like this food!' : 'loading'}
                            </Typography>
                        </Box>
                        {/* <FoodFavoriteBtn foodName={data.length!==0 ? data.romanized_name :''}/> */}
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
                            {data.length!==0 ? data.categories.join(', ') : 'loading'}
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
                            {data.length!==0 ? data.ingredients.join(', ') : 'loading'}
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
                                ml: 2.5,
                                mb: 8
                            }}
                        >
                            {data.length!==0 ? data.info : 'loading'}
                        </Typography>
                    </FoodDescriptionLayout>

                </FoodContentLayout>
            </DialogContent>
        </Dialog>
    )
}

