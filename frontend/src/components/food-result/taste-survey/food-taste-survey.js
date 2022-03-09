import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import { ProgressBar } from './progress-bar';
import { FoodTasteSurveyResult } from './food-taste-survey-result';


export function FoodTasteSurvey({open, onClose, onResultClick}) {
  // const [open, setOpen] = React.useState(false);
  // const [resultOpen, setResultOpen] = React.useState(false);
  const tastes = [ 'oily', 'spicy', 'sour', 'salty' ];
  const answers = [ 'Dislike a lot', 'Dislikes', 'Fair', 'Likes', 'Likes a lot' ];
  const [percentage, setPercentage] = React.useState(0);
  const [answerMap, setAnswerMap] = React.useState({});

  const handlePercentage = (i) => {
    if(answerMap[i]) {
      return ; // undefinded return
    }
    answerMap[i] = true;
    setPercentage(Math.min(100, percentage+(100/tastes.length)));
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
                                (answer) => (
                                  <FormControlLabel 
                                    key={answer}
                                    value={answer}
                                    label={answer}
                                    control={<Radio />}
                                    onChange={() => handlePercentage(i)}
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
            onClick={onResultClick}
          >
            SHOW THE RESULT
          </Button>
        </DialogActions>
  
      </Dialog>
    </>
  );
}






// return (
//   <>
//     <Button
//       variant='contained'
//       size='large'
//       sx={{ width: '20rem' }}
//       startIcon={<AssignmentTurnedInRoundedIcon />}
//       onClick={handleClickOpen('paper')}
//     >
//       Will it suit my taste?
//     </Button>

//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="scroll-dialog-title"
//       aria-describedby="scroll-dialog-description"
//     >

//       <Box display={'flex'}>
//         <DialogActions sx={{ flexGrow:'1' }}>
//           <IconButton onClick={handleClose}>
//             <CloseRoundedIcon fontSize='large' />
//           </IconButton>
//         </DialogActions>
//       </Box>

//       <ProgressBar percentage={percentage} />
//       {/* <DialogContent dividers={scroll === 'paper'}> */}
//       <DialogContent>
//         <DialogContentText
//           variant='h6'
//           textAlign='center'
//           sx={{ mt: 1, mb: 2 }}
//         >
//         This surey is to check if this food suits your taste. <br/>
//         Please check all questions.
//         </DialogContentText>

//         <FormControl sx={{ width: '100%' }}>
//         <DialogContentText
//           id="scroll-dialog-description"
//           ref={descriptionElementRef}
//           tabIndex={-1}
//           textAlign= 'center'
//         >

//           {tastes
//             .map(
//               (taste, i) => (
//                 <React.Fragment key={i}>
                  
//                   <Box
//                     sx= {{ 
//                       width: '100%',
//                       mb: 2, 
//                       borderRadius: 0.7,
//                       backgroundColor: '#EDF2FB'
//                     }}
//                   >
//                     <Typography
//                       variant='subtitle1'
//                       sx={{
//                         my: 0.3,
//                         color: '#57606e'
//                       }}
//                     >
//                       Q{i}. How do you like {taste} taste?
//                     </Typography>

//                       <RadioGroup sx={{ mx: 3 }} row name='row-radio-buttons-group'>
//                           <FormControlLabel value='Dislike a lot' control={<Radio />} label='Dislike a lot' onChange={handlePercentage} />
//                           <FormControlLabel value='Dislikes' control={<Radio />} label='Dislikes' onChange={handlePercentage} />
//                           <FormControlLabel value='Fair' control={<Radio />} label='Fair' onChange={handlePercentage} />
//                           <FormControlLabel value='Likes' control={<Radio />} label='Likes' onChange={handlePercentage} />
//                           <FormControlLabel value='Likes a lot' control={<Radio />} label='Likes a lot' onChange={handlePercentage} />
//                       </RadioGroup>

//                   </Box>
                  
//                 </React.Fragment>
//               )
//             )
//           }
//         </DialogContentText>
//         </FormControl>

//       </DialogContent>

//       <DialogActions>
//         <Button
//           variant='contained'
//           sx={{
//             width: '80%',
//             height: '7vh',
//             my: 1,
//             mx: 7
//           }}
//           startIcon={<ModeRoundedIcon />}
//           onClick={handleClose}
//         >
//           SHOW THE RESULT
//         </Button>
//       </DialogActions>

//     </Dialog>
//   </>
// );