// 이미지 검색 시 서버와 통신하는 코드

import axios from 'axios';


export const detect = (image, navigate, dispatch) => {
  let formData = new FormData();
  const config = {
    header: {'content-type': 'multipart/form-data'}
  }
  formData.append("image", image)
  axios.post('/api/food/detect', formData, config)
    .then(res => {
      console.log(res.data)
      dispatch({type: "setDetectResult", payload: res.data})
      navigate(`/food-detail/${res.data.food_list[0].romanized_name}`)
    })
    .catch(err => {
      console.log(err)
      alert('fail')
    })
}