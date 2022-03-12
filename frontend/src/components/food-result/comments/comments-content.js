import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { Fragment, useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../reducers/userReducer';
import { delComments } from '../../../utils/comments';


export function CommentsContents(props) {
    const [{userInfo}, dispatch] = useContext(UserContext);
    const handleClick = (e)=>{
        delComments(e.target.id).then(res=>{
            props.setForRender(cur=>!cur);
        }).catch(err=>{
            alert('fail to delete')
        })
    }
    return (
        <Stack 
            spacing={3}
            sx={{ 
                display: 'flex', 
                mx: 15, 
                mb: 5,
                flexDirection: 'column', 
                alignItems: 'left', 
                width: '100%' 
            }}
        >
           {props.data
            ? props.data.map((d, i)=>(
                <Fragment key={i}>
                    <Box display={'flex'} direction="row" sx={{ alignItems: 'center' }}>
                        <Avatar alt='User Image' src={d.user.profile_image} />  
                        <Box direction='column' sx={{ ml: 3 }}>
                            <Box display={'flex'} direction='row' sx={{alignItems:'center'}}>
                                <Typography variant='h6'>{d.user.username}</Typography>
                                <Typography variant='body2' sx={{ ml: 1 }}>{d.created_at}</Typography>
                                {userInfo.username===d.user.username && <Button id={d.id} onClick={handleClick}>Delete</Button>}
                            </Box>
                            <Typography variant='subtitle1'>{d.content}</Typography>
                        </Box>
                    </Box>
                </Fragment>
            ))
            :'loading'
            }
        </Stack>
    )
}