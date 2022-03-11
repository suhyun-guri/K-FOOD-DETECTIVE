// 이미지 검색 시 서버와 통신하는 코드
import axios from 'axios';

const ACCESS_KEY = 'accessKey';
const REFRESH_KEY = 'refreshKey';


export const detect = (image, navigate, dispatch) => {
  let formData = new FormData();
  const accessToken = localStorage.getItem('accessKey');
  let config = {
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    }
  }
  if (!accessToken) {
    config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
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

export const taste = (userTaste)=>{
  return axios.post('/api/food/test', userTaste)
}

export const tasteSave = (foodName, tasteResult)=>{
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  const data = tasteResult;
  switch (data.result) {
    case 'perfect':
      data.result = 0
      break;
    case 'great':
      data.result = 1
      break;
    case 'good':
      data.result = 2
      break;
    case 'bad':
      data.result = 3
      break;
    case 'not recommend':
      data.result = 4
      break;
    default:
      break;
  }
  const URL = `/api/food/test/${foodName}`;
  return axios.post(URL, data, {headers})
}

export const scrap = (foodName)=>{
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  const data = {romanized_name: foodName};
  const URL = `/api/food/scrap`;
  return axios.post(URL, data, {headers})
}