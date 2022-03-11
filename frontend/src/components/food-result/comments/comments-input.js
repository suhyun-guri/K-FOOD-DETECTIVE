import { Box, Button, Stack, TextField } from '@mui/material';

export function CommentsInput() {
    return (
        <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <TextField
                variant="outlined"
                sx={{
                    mt: 3,
                    mr: 2,
                    width: '70%',
                    borderColor: 'blue'
                }}
            />
            <Button variant='contained' sx={{ mt: 3, height: '3.5rem' }} >
                REGISTER
            </Button>
        </Stack>
    )
}