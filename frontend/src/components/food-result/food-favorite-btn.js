// /food-detail에서 음식을 My page에 스크랩하는 버튼

import * as React from 'react';
import {useEffect, useContext} from 'react';
import { Box, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { scrap } from '../../utils/img-detect';
import { UserContext } from '../../reducers/userReducer';


export function FoodFavoriteBtn({foodName, id}) {
    const [{detectResult}, dispatch] = useContext(UserContext);

    function CheckedFavorite(props) {
        const isFavorite = props.isFavorite;
    
        if (isFavorite) {
            return (
                <IconButton sx={{color: 'red'}}
                    onClick={handleClickedFavorite}
                >
                    <FavoriteRoundedIcon fontSize='large' />
                </IconButton>
            )
        }
        return (
            <IconButton sx={{color: 'white'}}
                onClick={handleClickedFavorite}
            >
                <FavoriteBorderRoundedIcon fontSize='large' />
            </IconButton>
        );
    }

    const handleClickedFavorite = (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem('accessKey');
        if (!accessToken) {
            return alert('먼저 로그인을 진행해주세요');
        }
        scrap(foodName)
            .then(res=>{
                // setFavorite(!favorite)
                const newFoodList = [...detectResult.food_list]
                newFoodList[id].is_liked = !newFoodList[id].is_liked
                dispatch({
                    type: "setDetectResult",
                    payload: {
                        ...detectResult,
                        food_list: newFoodList
                    }
                })
            })
            .catch(err=>{
                console.log(err);
                alert('fail');
            })
    }

    return (
        <Box display={'flex'} direction="row">
            
                <CheckedFavorite isFavorite={detectResult.food_list[id].is_liked} />
            
            
            <Box direction="column" sx={{ mt:3.2 , mr:3.5 }}>
                <Typography variant='subtitle1' color='white'>Add to my favorite</Typography>
            </Box>
        </Box>
    );
}


{/* <IconButton sx={{
    color: 'white',
    '&:focus': {
        color: 'red'
    }
}}
    onClick={handleOpenUserProfile}
></IconButton> */}