import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Stack } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';


export function FoodTasteSurveyResult({ open, onClose, onRetry, onSave, tasteResult }) {

    console.log('tasteResult : ', tasteResult)

    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    function MatchColor(result) {
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

    function SwitchContents(result) {
        if (result === 'perfect') {
            console.log('perfect')
            return (
                <Box sx={{ mb: 3, alignContent: 'center', textAlign: 'center' }}>
                    <DialogContentText
                            variant='subtitle1'
                            textAlign='center'
                            sx={{ mt: 0.5, mb: 2 }}
                    >
                    You perfect fit with this food!
                    </DialogContentText>
                    
                    <img src='/images/survey-results/perfect-avatar.png' alt='Perfect Avatar' />
                </Box>
            )
        } else if (result === 'great') {
            console.log('great')
            return (
                <Box sx={{ mb: 3, alignContent: 'center', textAlign: 'center' }}>
                    <DialogContentText
                            variant='subtitle1'
                            textAlign='center'
                            sx={{ mt: 0.5, mb: 2 }}
                        >
                    Maybe you really like this food!
                    </DialogContentText>
                    <img src='/images/survey-results/great-avatar.png' alt='Great Avatar' />
                </Box>
            )
        } else if (result === 'good') {
            console.log('good')
            return (
                <Box sx={{ mb: 3, alignContent: 'center', textAlign: 'center' }}>
                    <DialogContentText
                            variant='subtitle1'
                            textAlign='center'
                            sx={{ mt: 0.5, mb: 2 }}
                        >
                    Maybe you like this food!
                    </DialogContentText>
                    <img src='/images/survey-results/good-avatar.png' alt='Good Avatar' />
                </Box>
            )
        } else if (result === 'bad') {
            console.log('bad')
            return (
                <Box sx={{ mb: 3, alignContent: 'center', textAlign: 'center' }}>
                    <DialogContentText
                            variant='subtitle1'
                            textAlign='center'
                            sx={{ mt: 0.5, mb: 2 }}
                        >
                    You can try this, but not recommend.
                    </DialogContentText>
                    <img src='/images/survey-results/bad-avatar.png' alt='Bad Avatar' />
                </Box>
            )
        } else {
            console.log('not recommend')
            return (
                <Box sx={{ mb: 3, alignContent: 'center', textAlign: 'center' }}>
                    <DialogContentText
                            variant='subtitle1'
                            textAlign='center'
                            sx={{ mt: 0.5, mb: 2 }}
                        >
                    Maybe you don't like this food.
                    </DialogContentText>
                    <img src='/images/survey-results/not-recommend-avatar.png' alt='Not Recommend Avatar' />
                </Box>
            )
        }
    }


    

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
                            color: `${tasteResult ? MatchColor(tasteResult.result) : 'black'}`
                        }}
                    >
                        {tasteResult ? `${tasteResult.result}`.toUpperCase() + '!' : "아하하하"}
                    </DialogContentText>


                    {tasteResult && SwitchContents(tasteResult.result)}


                    <DialogContentText variant='subtitle2' textAlign='left' sx={{ mb: 1 }}>
                        ◼ Prefered K-foods based on result
                    </DialogContentText>

                <DialogContentText variant='body2' textAlign='left' sx={{ ml: 1.5 }}>
                    : 
                    {tasteResult
                        ? tasteResult.recommend.map((d) => {
                            return ` ${d.charAt(0).toUpperCase() + d.slice(1)}`
                        }).join(', ')
                        : ''
                    }
                </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <Stack
                        sx={{
                            display: 'flex',
                            direction: 'column',

                        }}
                    >
                        <Button
                            variant='contained'
                            sx={{
                                width: '28rem',
                                height: '7vh',
                                my: 1
                            }}
                            startIcon={<ModeRoundedIcon />}
                            onClick={onSave}
                        >
                            SAVE TO MY PAGE
                        </Button>
                        <Button
                            variant='contained'
                            sx={{
                                width: '28rem',
                                height: '7vh',
                                my: 1
                            }}
                            startIcon={<ModeRoundedIcon />}
                            onClick={onRetry}
                        >
                            RETRY
                        </Button>
                    </Stack>
                </DialogActions>

            </Dialog>
        </>
    );
}
