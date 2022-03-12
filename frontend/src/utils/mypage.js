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
