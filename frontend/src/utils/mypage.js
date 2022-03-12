import axios from 'axios';

const ACCESS_KEY = 'accessKey';
const REFRESH_KEY = 'refreshKey';

export const getFavorites = ()=>{
  // const URL = "/api/mypage/favorites"
  const URL = "https://ec5fbd63-aaa3-42c5-b672-efdd5707128d.mock.pstmn.io/mypage/favorites"
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.get(URL, {headers})
}

export const getTestResult = ()=>{
  const URL = "https://ec5fbd63-aaa3-42c5-b672-efdd5707128d.mock.pstmn.io/mypage/tests"
  // const URL = "/api/mypage/tests"
  const accessToken = localStorage.getItem(ACCESS_KEY)
  const headers = {"Authorization": `Bearer ${accessToken}`}
  return axios.get(URL, {headers})
}
