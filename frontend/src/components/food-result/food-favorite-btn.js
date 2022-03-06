// /food-detail에서 음식을 My page에 스크랩하는 버튼

import * as React from 'react';
import { Box, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export function FoodFavoriteBtn() {

    const [favorite, setFavorite] = React.useState(false)

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
        if(favorite === false) {
            setFavorite(true);
            console.log(favorite)
        }
        else{
            setFavorite(false);
        }
    }



    return (
        <Box display={'flex'} direction="row">
            
                <CheckedFavorite isFavorite={favorite} />
            
            
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