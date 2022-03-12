import React, { useEffect, useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Popover, Typography, Stack } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { detect } from '../utils/img-detect';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../reducers/userReducer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



export function ImageUpload({ open, onClose }) {
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const acceptType = ['jpg', 'png'];
    const maxFileSize = 1024;
    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);

    const handleDetect = () => {
        detect(images[0].file, navigate, dispatch);
    }

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const onError = (errors, files) => {
        if (errors.maxNumber) {
            alert('Number of selected images exceed maxNumber')
        }
        if (errors.acceptType) {
            alert('Your selected file type is not allow')
        }
        if (errors.maxFileSize) {
            alert('Selected file size exceed maxFileSize')
        }
    }


    return (
        <Dialog
            open={open}
            onClose={onClose}

        >
            <Box display={'flex'}>
          <DialogActions sx={{ flexGrow:'1' }}>
            <IconButton onClick={onClose}>
              <CloseRoundedIcon fontSize='large' />
            </IconButton>
          </DialogActions>
        </Box>
            <DialogContent>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                onError={onError}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    <>
                        <Box className="upload__image-wrapper"
                            sx={{
                                display: 'flex',
                                margin: 'auto',
                                alignItems: 'center'
                            }}
                        >
                            {imageList.length===0 && <DialogActions sx={{ flexGrow: '1' }}>
                                <Button
                                    id="input-with-icon-textfield"
                                    label="Image URL"
                                    size='small'
                                    variant="outlined"
                                    style={isDragging ? { color: 'green' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    sx={{
                                        my: 0,
                                        mb: 2,
                                        width: '20rem',
                                        height: '10rem',
                                        alignItems: 'center',
                                        display: { xs: 'none', md: 'block' },
                                        borderStyle: 'dashed',
                                        '&:hover': { color: 'green' }
                                    }}
                                >
                                    Upload or Drag searching image
                                </Button>
                            </DialogActions>}
                        </Box>


                        {imageList.map((image, index) => (
                            <Box
                                key={index}
                                className="image-item"
                                sx={{
                                    display: 'flex',
                                    margin: 'auto',
                                    alginItems: 'center',
                                    height: '10rem',
                                    position: 'bottom'
                                }}
                            >
                                <img src={image['data_url']} alt="" />

                                <Stack spacing={2} sx={{ ml: 2 }}>
                                    <Button variant='contained' onClick={() => onImageUpdate(index)}>Change Image</Button>
                                    <Button variant='contained' onClick={() => onImageRemove(index)}>Delete Image</Button>
                                    <Button variant='contained' onClick={handleDetect}>Searching this food</Button>
                                </Stack>
                            </Box>
                        ))}
                    </>
                )}
            </ImageUploading>
            </DialogContent>
        </Dialog>
    )
}





// import React, { useContext, useState } from 'react';
// import ImageUploading from 'react-images-uploading';
// import { Box, Button, Dialog, IconButton, Popover, Typography, Stack } from '@mui/material';
// import ImageSearchIcon from '@mui/icons-material/ImageSearch';
// import { detect } from '../utils/img-detect';
// import { useNavigate } from 'react-router-dom';

// import { UserContext } from '../reducers/userReducer';
// import { spacing } from '@mui/system';



// export function ImageUpload() {
//     const [images, setImages] = useState([]);
//     const maxNumber = 1;
//     const acceptType = ['jpg', 'png'];
//     const maxFileSize = 1024;
//     const navigate = useNavigate();
//     const [state, dispatch] = useContext(UserContext);


//     const handleDetect = () => {
//         detect(images[0].file, navigate, dispatch);
//     }

//     const onChange = (imageList, addUpdateIndex) => {
//         // data for submit
//         console.log(imageList, addUpdateIndex);
//         setImages(imageList);
//     };

//     const onError = (errors, files) => {
//         if (errors.maxNumber) {
//             alert('Number of selected images exceed maxNumber')
//         }
//         if (errors.acceptType) {
//             alert('Your selected file type is not allow')
//         }
//         if (errors.maxFileSize) {
//             alert('Selected file size exceed maxFileSize')
//         }
//     }


//     return (
//         <>
//             <ImageUploading
//                 multiple
//                 value={images}
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//                 dataURLKey="data_url"
//                 onError={onError}
//             >
//                 {({
//                     imageList,
//                     onImageUpload,
//                     onImageRemoveAll,
//                     onImageUpdate,
//                     onImageRemove,
//                     isDragging,
//                     dragProps,
//                 }) => (
//                     <>
//                     // write your building UI
//                         <Box className="upload__image-wrapper"
//                             sx={{
//                                 display: 'flex',
//                                 margin: 'auto',
//                                 alignItems: 'center'
//                             }}
//                         >

//                             <Button
//                                 id="input-with-icon-textfield"
//                                 label="Image URL"
//                                 size='small'
//                                 variant="outlined"
//                                 style={isDragging ? { color: 'green' } : undefined}
//                                 onClick={onImageUpload}
//                                 {...dragProps}
//                                 sx={{
//                                     my: 0,
//                                     mb: 2,
//                                     width: '20rem',
//                                     alignItems: 'center',
//                                     display: { xs: 'none', md: 'block' },
//                                     borderStyle: 'dashed',
//                                     '&:hover': { color: 'green' }
//                                 }}
//                             >
//                                 Upload searching image
//                             </Button>
//                         </Box>


//                         {imageList.map((image, index) => (
//                             <Box
//                                 key={index}
//                                 className="image-item"
//                                 sx={{
//                                     display: 'flex',
//                                     margin: 'auto',
//                                     alginItems: 'center',
//                                     height: '10rem',
//                                     position: 'bottom',
//                                     backgroundColor: 'orange'
//                                 }}
//                             >
//                                 <img src={image['data_url']} alt="" />

//                                 <Stack spacing={2} sx={{ ml: 2 }}>
//                                     <Button variant='contained' onClick={() => onImageUpdate(index)}>Change Image</Button>
//                                     <Button variant='contained' onClick={() => onImageRemove(index)}>Delete Image</Button>
//                                     <Button variant='contained' onClick={handleDetect}>Searching this food</Button>
//                                 </Stack>
//                             </Box>
//                         ))}
//                     </>
//                 )}
//             </ImageUploading>
//         </>
//     )
// }