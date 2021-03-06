// 이미지 검색할 때 쓰는 버튼 아이콘
// 원래 사용자가 이미지를 업로드 확인 버튼을 누르자마자 바로 검색을 시작하는 것이 목표인데
// 아직은 버튼 하나가 더 있어서 업로드 후 확인 버튼을 눌러주어야함

import React, { useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Box, Button,Dialog, IconButton, Popover, Typography } from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { detect } from '../utils/img-detect';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../reducers/userReducer'



export function UploadImageBtn({ btnColor }) {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const acceptType = ['jpg', 'png'];
  const maxFileSize = 1024;
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);


  const handleDetect = ()=>{
    detect(images[0].file, navigate, dispatch);
  }

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
          <Box className="upload__image-wrapper">

            
            <IconButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              sx={{ 
                display: (imageList.length !== 0)? 'none': 'flex'
              }}
            >
              <ImageSearchIcon sx={{color: `${btnColor}`}} />
            </IconButton>

            
              <IconButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={handleDetect}
              {...dragProps}
              sx={{
                display: (imageList.length !== 0)? 'flex': 'none'
              }}
            >
              <ImageSearchIcon sx={{color: 'red'}} />
            </IconButton>
            
            

            {/* &nbsp; */}
            {imageList.map((image, index) => (
              <Box 
                key={index}
                className="image-item"
                sx={{
                  display: 'flex',
                  backgroundColor: 'orange'
                }}
                >
                <img src={image['data_url']} alt="" width="100" />
                <Box className="image-item__btn-wrapper">
                  <Button variant='outlined' onClick={() => onImageUpdate(index)}>수정</Button>
                  <Button variant='outlined' onClick={() => onImageRemove(index)}>삭제</Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </ImageUploading>
    </>
  )
}



// 이미지 검색할 때 쓰는 버튼 아이콘
// 원래 사용자가 이미지를 업로드 확인 버튼을 누르자마자 바로 검색을 시작하는 것이 목표인데
// 아직은 버튼 하나가 더 있어서 업로드 후 확인 버튼을 눌러주어야함

// import React, { useContext, useState } from 'react';
// import ImageUploading from 'react-images-uploading';
// import { Box, Button, IconButton } from '@mui/material';
// import ImageSearchIcon from '@mui/icons-material/ImageSearch';
// import { detect } from '../utils/img-detect';
// import { useNavigate } from 'react-router-dom';

// import { UserContext } from '../reducers/userReducer'



// export function UploadImageBtn({ btnColor }) {
//   const [images, setImages] = useState([]);
//   const maxNumber = 1;
//   const acceptType = ['jpg', 'png'];
//   const maxFileSize = 1024;
//   const navigate = useNavigate();
//   const [state, dispatch] = useContext(UserContext);
  

//   const handleDetect = ()=>{
//     detect(images[0].file, navigate, dispatch);
//   }

//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   const onError = (errors, files) => {
//     if(errors.maxNumber) {
//       alert('Number of selected images exceed maxNumber')
//     }
//     if(errors.acceptType) {
//       alert('Your selected file type is not allow')
//     }
//     if(errors.maxFileSize) {
//       alert('Selected file size exceed maxFileSize')
//     }
//   }


//   return (
//     <>
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//         onError={onError}
//         >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <Box className="upload__image-wrapper">

            
//             <IconButton
//               style={isDragging ? { color: 'red' } : undefined}
//               onClick={onImageUpload}
//               {...dragProps}
//               sx={{ 
//                 display: (imageList.length !== 0)? 'none': 'flex'
//               }}
//             >
//               <ImageSearchIcon sx={{color: `${btnColor}`}} />
//             </IconButton>

//             <IconButton
//               style={isDragging ? { color: 'red' } : undefined}
//               onClick={handleDetect}
//               {...dragProps}
//               sx={{
//                 display: (imageList.length !== 0)? 'flex': 'none'
//               }}
//             >
//               <ImageSearchIcon sx={{color: 'gray'}} />
//             </IconButton>

//             {/* &nbsp; */}
//             {imageList.map((image, index) => (
//               <Box 
//                 key={index}
//                 className="image-item"
//                 sx={{
//                   backgroundColor: 'orange'
//                 }}
//                 >
//                 <img src={image['data_url']} alt="" width="100" />
//                 <Box className="image-item__btn-wrapper">
//                   <Button variant='outlined' onClick={() => onImageUpdate(index)}>수정</Button>
//                   <Button variant='outlined' onClick={() => onImageRemove(index)}>삭제</Button>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         )}
//       </ImageUploading>
//     </>
//   )
// }