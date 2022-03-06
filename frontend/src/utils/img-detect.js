// 이미지 검색 시 서버와 통신하는 코드

import axios from 'axios';


export const detect = (image) => {
  let formData = new FormData();
  const config = {
    header: {'content-type': 'multipart/form-data'}
  }
  formData.append("image", image)
  axios.post('/food/detect', formData, config)
    .then(res => {
      console.log(res.data)
      alert('성공')
    })
    .catch(err => {
      console.log(err)
      alert('fail')
    })
}