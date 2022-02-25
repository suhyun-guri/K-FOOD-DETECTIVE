import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { IconButton } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';


export function UploadImageBtn() {

  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const acceptType = ['jpg', 'png'];
  const maxFileSize = 1024;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onError = (errors, files) => {
    if(errors.maxNumber) {
      alert('Number of selected images exceed maxNumber')
    }
    if(errors.acceptType) {
      alert('Your selected file type is not allow')
    }
    if(errors.maxFileSize) {
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
          <div className="upload__image-wrapper">
            <IconButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <ImageSearchIcon />
            </IconButton>
            &nbsp;
           {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>수정</button>
                  <button onClick={() => onImageRemove(index)}>삭제</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  )
}