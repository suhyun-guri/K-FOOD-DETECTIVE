// 이미지 검색할 때 쓰는 버튼 아이콘
// 원래 사용자가 이미지를 업로드 확인 버튼을 누르자마자 바로 검색을 시작하는 것이 목표인데
// 아직은 버튼 하나가 더 있어서 업로드 후 확인 버튼을 눌러주어야함

import React, { useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Box, Button, Stack } from '@mui/material';
import { detect } from '../../utils/img-detect';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../reducers/userReducer';

export function LandingImgUpload() {
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
                            alignItems: 'center',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Button
                            style={isDragging ? { color: 'green' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            sx={{
                                display: (imageList.length !== 0) ? 'none' : 'flex',
                                '&:hover': { color: 'green' },
                                width: '100%',
                                height: '100%'
                            }}
                            size='large'
                        >
                            Image Upload
                        </Button>
                        
                        {imageList.map((image, index) => (
                            <Box
                                key={index}
                                className="image-item"
                                sx={{
                                    display: 'flex',
                                    margin: 'auto',
                                    alginItems: 'center',
                                    height: '10rem'
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