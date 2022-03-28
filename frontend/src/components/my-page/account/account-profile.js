import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { detect } from '../../../utils/img-detect';


export function AccountProfile(props) {
    console.log('Account Profile의 props : ', props.data)

    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const acceptType = ['jpg', 'png'];
    const maxFileSize = 1024;

    const handleDetect = () => {
        detect(images[0].file);
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
            <Card {...props}>
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
                        <Box>
                            <CardContent>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {imageList.map((image, index) => (
                                        <Avatar
                                            key={index}
                                            src={image['data_url']}
                                            sx={{
                                                height: 64,
                                                my: 2,
                                                width: 64
                                            }}
                                        />
                                    ))}

                                    <Typography
                                        color="textPrimary"
                                        gutterBottom
                                        variant="h5"
                                    >
                                        {props.data.username}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {`${props.data.nationality}`}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <Divider />
                          
                            <CardActions>
                                {imageList.length===0 && 
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Button
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        sx={{ width: '100%' }}
                                        {...dragProps}
                                    >
                                        Select picture
                                    </Button>
                                </Box>
                                }
                                
                                
                                {imageList.map((image, index) => (
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Button
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={() => onImageUpdate(index)}
                                            sx={{ width: '100%' }}
                                            {...dragProps}
                                        >
                                            Select picture
                                        </Button>
                                    </Box>
                                ))}

                            </CardActions>
                        </Box>
                    )}
                </ImageUploading>
            </Card>
        </>
    )
}