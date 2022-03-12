import { Button, Stack, TextField } from '@mui/material';

export function CommentsInput() {
    return (
        <Stack 
            spacing={3}
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
            />
            <Button variant='contained' sx={{ height: '3.5rem' }} >
                REGISTER
            </Button>
        </Stack>
    )
}