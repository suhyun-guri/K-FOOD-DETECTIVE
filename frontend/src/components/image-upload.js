import React, { useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Box, Button, Dialog, IconButton, Popover, Typography, Stack } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { detect } from '../utils/img-detect';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../reducers/userReducer';
import { spacing } from '@mui/system';



export function ImageUpload() {
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
        <>
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
                    // write your building UI
                    <Box className="upload__image-wrapper"
                        sx={{
                            display: 'flex',
                            margin: 'auto',
                            alignItems: 'center'
                        }}
                    >
                        {/* <Button
                            style={isDragging ? { color: 'green' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            sx={{
                                display: (imageList.length !== 0) ? 'none' : 'flex',
                                '&:hover': { color: 'green' }
                            }}
                            size='large'
                        >
                            Image Upload
                        </Button> */}

                        <Button
                            id="input-with-icon-textfield"
                            label="Image URL"
                            size='small'
                            variant="outlined"
                            style={isDragging ? { color: 'green' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            sx={{
                                my: 1,
                                width: '20rem',
                                alignItems: 'center',
                                display: { xs: 'none', md: 'block' },
                                borderStyle: 'dashed',
                                '&:hover': { color: 'green' }
                            }}
                        >
                            Search K-Food
                        </Button>


                        {/* <IconButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={handleDetect}
              {...dragProps}
              sx={{
                display: (imageList.length !== 0)? 'flex': 'none'
              }}
            >
              <ImageSearchIcon sx={{color: 'red'}} />
            </IconButton> */}

                        {/* &nbsp; */}
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
                    </Box>
                )}
            </ImageUploading>
        </>
    )
}