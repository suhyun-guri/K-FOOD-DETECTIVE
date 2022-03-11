import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';


export function FoodTasteSurveyResult({ open, onClose, onRetry, onSave, tasteResult }) {

    const descriptionElementRef = React.useRef(null);

    function matchColor(result) {
        if (result === 'perfect') {
            console.log('perfect')
            return 'blue'
        } else if (result === 'great') {
            console.log('great')
            return 'green'
        } else if (result === 'good') {
            console.log('good')
            return 'black'
        } else if (result === 'bad') {
            console.log('bad')
            return 'orange'
        } else {
            console.log('not recommend')
            return 'red'
        }
    }


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
                        variant='h4'
                        textAlign='center'
                        sx={{
                            mt: 1,
                            mb: 2,
                            // color: `${matchColor(tasteResult.result)}`
                        }}
                    >
                        {tasteResult ? `${tasteResult.result}!` : "아하하하"}
                    </DialogContentText>
                    <DialogContentText
                        variant='subtitle1'
                        textAlign='center'
                        sx={{ mt: 1, mb: 2 }}
                    >
                        Maybe you like {tasteResult.romanized_name}!
                    </DialogContentText>



                    <DialogContentText variant='subtitle2'>
                        ◼ Prefered K-foods based on result
                    </DialogContentText>


                    <DialogContentText variant='body2'>
                        ◾ {tasteResult.recommend}
                    </DialogContentText>


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
