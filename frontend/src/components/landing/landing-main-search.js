import { Box, Paper, Typography, InputAdornment, InputBase, TextField } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { width } from '@mui/system';

export function LandingSearch() {
    return (
        <>
            <Paper
                elevation={24}
                square= 'true'
                sx={{
                    position: 'absolute',
                    width: '55%',
                    height: '35%',
                    top: '31.5%',
                    left: '22.5%',  
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    alignItems: 'center',
                    overflow: 'auto'
                }}
            >
                <Box
                    sx = {{
                        my: '8%',
                        textAlign:'center',
                        alignItems: 'center'
                    }}   
                >
                    <Typography variant='h5'>K-Food Image Searching</Typography>
                    <Typography variant='subtitle2'>Paste or drop image here; find the foods from an image</Typography>

                    <TextField 
                    id="input-with-icon-textfield"
                    label="Image URL"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ImageSearchIcon sx={{color:'white'}} />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    sx={{
                        mt: 3,
                        width:'90%' 
                    }}
                    />
                </Box>
            </Paper>
        </>
    )
}