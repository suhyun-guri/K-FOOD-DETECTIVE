import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';


export function FoodTasteSurveyResult({open, onClose, onRetry, onSave}) {
   
    const tastes = ['oily', 'spicy', 'sour', 'salty'];


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            {/* <Button
                variant='contained'
                sx={{
                    width: '80%',
                    height: '7vh',
                    my: 1,
                    mx: 7
                }}
                startIcon={<ModeRoundedIcon />}
                onClick={handleClickOpen('paper')}
            >
                SHOW THE RESULT
            </Button> */}

            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >

                <Box display={'flex'}>
                    <DialogActions sx={{ flexGrow: '1' }}>
                        <IconButton onClick={onClose}>
                            <CloseRoundedIcon fontSize='large' />
                        </IconButton>
                    </DialogActions>
                </Box>



                <DialogContent>
                    <DialogContentText
                        variant='h6'
                        textAlign='center'
                        sx={{ mt: 1, mb: 2 }}
                    >
                        아주아아아아
                    </DialogContentText>

                    <FormControl sx={{ width: '100%' }}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                            textAlign='center'
                        >

                            {tastes
                                .map(
                                    (taste, i) => (
                                        <React.Fragment key={i}>

                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    mb: 2,
                                                    borderRadius: 0.7,
                                                    backgroundColor: '#EDF2FB'
                                                }}
                                            >
                                                <Typography
                                                    variant='subtitle1'
                                                    sx={{
                                                        my: 0.3,
                                                        color: '#57606e'
                                                    }}
                                                >
                                                    Q{i}.  do you like {taste} taste?
                                                </Typography>

                                                <RadioGroup sx={{ mx: 3 }} row name='row-radio-buttons-group'>
                                                    <FormControlLabel value='Dislike a lot' control={<Radio />} label='Dislike a lot' />
                                                    <FormControlLabel value='Dislikes' control={<Radio />} label='Dislikes' />
                                                    <FormControlLabel value='Fair' control={<Radio />} label='Fair' />
                                                    <FormControlLabel value='Likes' control={<Radio />} label='Likes' />
                                                    <FormControlLabel value='Likes a lot' control={<Radio />} label='Likes a lot' />
                                                </RadioGroup>

                                            </Box>

                                        </React.Fragment>
                                    )
                                )
                            }
                        </DialogContentText>
                    </FormControl>

                </DialogContent>

                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{
                            width: '80%',
                            height: '7vh',
                            my: 1,
                            mx: 7
                        }}
                        startIcon={<ModeRoundedIcon />}
                        onClick={onSave}
                    >
                        SAVE TO MY PAGE 
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            width: '80%',
                            height: '7vh',
                            my: 1,
                            mx: 7
                        }}
                        startIcon={<ModeRoundedIcon />}
                        onClick={onRetry}
                    >
                        RETRY 
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}
