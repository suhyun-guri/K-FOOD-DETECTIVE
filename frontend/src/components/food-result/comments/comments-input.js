import { useState } from 'react';

import { Button, Stack, TextField } from '@mui/material';
import { postComments } from '../../../utils/comments';

export function CommentsInput({foodName, setForRender}) {
    const [text, setText] = useState();
    const handleClick = ()=>{
        postComments(foodName, text).then(res=>{
            console.log(res.data)
            setText("");
            setForRender(cur=>!cur)
        }).catch(err=>{
            alert('fail to send commet')
            console.log(err);
        })
    }
    return (
        <Stack 
            
            sx={{ 
                display: 'flex', 
                mx: 15,
                mb: 10, 
                flexDirection: 'row', 
                alignItems: 'center', 
                width: '100%' 
            }}
        >
            <TextField
                variant="outlined"
                sx={{
                    mr: 2,
                    width: '70%',
                    borderColor: 'blue'
                }}
                onChange={(e)=>{setText(e.target.value)}}
                value={text}
            />
            <Button variant='contained' sx={{ height: '3.5rem' }} onClick={handleClick}>
                REGISTER
            </Button>
        </Stack>
    )
}