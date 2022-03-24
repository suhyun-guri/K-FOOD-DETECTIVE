import axios from 'axios';

const ACCESS_KEY = 'accessKey';
const REFRESH_KEY = 'refreshKey';

export const getFavorites = ()=>{
  const URL = "/api/mypage/favorites"
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.get(URL, {headers})
}

export const getTestResult = ()=>{
  const URL = "/api/mypage/tests"
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.get(URL, {headers})
}

export const getUserComments = ()=>{
  const URL = "/api/mypage/comments"
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.get(URL, {headers})
}

export const getCardInfo = (name) => {
  const URL = `/api/food/detail/${name}`
  return axios.get(URL)
}

export const delFavoritesFood = (romanized_name)=>{
  const URL = `/api/mypage/favorites/${romanized_name}`
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.delete(URL, {headers})
}

export const delTestResult = (pk)=>{
  const URL = `/api/mypage/tests/${pk}`
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.delete(URL, {headers})
}

export const delMyComments = (pk)=>{
  const URL = `/api/mypage/comments/${pk}`
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.delete(URL, {headers})
}