import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import { ProgressBar } from './progress-bar';

export function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const tastes = [ 'oily', 'spicy', 'sour', 'salty' ];

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >

        <Box display={'flex'}>
          <DialogTitle 
            id="scroll-dialog-title" 
            fontSize='1.5rem'
            sx={{ mt: 1 }}
          >
            
          </DialogTitle>
          <DialogActions sx={{ flexGrow:'1' }}>
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon fontSize='large' />
            </IconButton>
          </DialogActions>
        </Box>

        <ProgressBar />
        {/* <DialogContent dividers={scroll === 'paper'}> */}
        <DialogContent>
          <DialogContentText
            variant='h6'
            textAlign='center'
            sx={{ mt: 1, mb: 2 }}
          >
          This surey is to check if this food suits your taste. <br/>
          Please check all questions.
          </DialogContentText>

          <FormControl sx={{ width: '100%' }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            textAlign= 'center'
          >

            {tastes
              .map(
                (taste, i) => (
                  <React.Fragment key={i}>
                    
                    <Box
                      sx= {{ 
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
                        Q{i}. How do you like {taste} taste?
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
            onClick={handleClose}
          >
            SHOW THE RESULT
          </Button>
        </DialogActions>

      </Dialog>
    </>
  );
}
