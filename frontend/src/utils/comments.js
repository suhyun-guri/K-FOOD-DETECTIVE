import axios from 'axios';

const ACCESS_KEY = 'accessKey';
const REFRESH_KEY = 'refreshKey';

export const getComments = (romanized_name)=>{
  const URL = `/api/comment/food/${romanized_name}`

  return axios.get(URL)
}

export const postComments = (romanized_name, userComments)=>{
  const URL = `/api/comment/food/${romanized_name}`
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.post(URL, {content: userComments}, {headers})
}

export const delComments = (comentId)=>{
  const URL = `/api/comment/${comentId}`
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.delete(URL, {headers})
}