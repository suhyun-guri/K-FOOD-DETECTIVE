import * as React from 'react';
import { useContext } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Typography, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import { ProgressBar } from './progress-bar';
import { UserContext } from '../../../reducers/userReducer';


export function FoodTasteSurvey({open, onClose, onResultClick, id}) {
  // const [open, setOpen] = React.useState(false);
  // const [resultOpen, setResultOpen] = React.useState(false);
  const tastes = [ 'oily', 'spicy', 'sour', 'salty' ];
  const answers = [ 'Dislike a lot', 'Dislikes', 'Fair', 'Likes', 'Likes a lot' ];
  const [percentage, setPercentage] = React.useState(0);
  const [answerMap, setAnswerMap] = React.useState({});
  const [{detectResult}, dispatch] = useContext(UserContext);

  const handlePercentage = (i, j) => {
    if(answerMap[i]) {
      return ; // undefinded return
    }
    // answerMap[i] = true;
    const newList = {...answerMap};
    newList[i] = j+1
    setAnswerMap(newList)

    setPercentage(Math.min(100, percentage+(100/tastes.length)));
  }

  const handleResultClick = ()=>{
    const userTaste = {
      "romanized_name" : detectResult["food_list"][id].romanized_name,
      "oily" : answerMap[0],
      "spicy" : answerMap[1],
      "sour" : answerMap[2],
      "salty" : answerMap[3]
    }
    onResultClick(userTaste)
  }

  const descriptionElementRef = React.useRef(null);

  
  React.useEffect(() => {
    if (open) {
      setAnswerMap({});
      setPercentage(0);
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
        size='large'
        sx={{ width: '20rem' }}
        startIcon={<AssignmentTurnedInRoundedIcon />}
        onClick={handleClickOpen('paper')}
      >
        Will it suit my taste?
      </Button> */}
  
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
  
        <Box display={'flex'}>
          <DialogActions sx={{ flexGrow:'1' }}>
            <IconButton onClick={onClose}>
              <CloseRoundedIcon fontSize='large' />
            </IconButton>
          </DialogActions>
        </Box>
  
        <ProgressBar percentage={percentage} />
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
                            {answers
                              .map(
                                (answer, j) => (
                                  <FormControlLabel 
                                    key={answer}
                                    value={answer}
                                    label={answer}
                                    control={<Radio />}
                                    onChange={() => handlePercentage(i, j)}
                                  />
                                )
                              )

                            }
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
            onClick={handleResultClick}
          >
            SHOW THE RESULT
          </Button>
        </DialogActions>
  
      </Dialog>
    </>
  );
}