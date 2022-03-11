// Login과 Logout, Register관련하여 서버와 통신하는 코드


import axios from 'axios';

const ACCESS_KEY = 'accessKey';
const REFRESH_KEY = 'refreshKey';


export const Register = (userInfo, navigate) => {
    const URL = "/api/account/register"

    // promise return
    return axios.post(URL, userInfo)
}

export const login = (userInfo, navigate, dispatch) => {
    const URL = "/api/account/login";

    axios.post(URL, userInfo).then(res => {
        localStorage.setItem(ACCESS_KEY, res.data.access);
        localStorage.setItem(REFRESH_KEY, res.data.refresh);
        const {userId, username, nationality, profileImage} = res.data;
        dispatch({type: "setUserInfo", payload: {isLogin: true, userId, username, nationality, profileImage}})
        navigate('/');
    }).catch(err=>console.log(err))
}

export const logout = (navigate, dispatch) => {
    const URL = "/api/account/logout"
    const refreshToken = localStorage.getItem(REFRESH_KEY);
    const accessToken = localStorage.getItem(ACCESS_KEY)
    const headers = {"Authorization": `Bearer ${accessToken}`}
    axios.post(URL, {refresh: refreshToken}, {headers}).then(res=>{
        console.log(res.data);
        dispatch({type: "setUserInfo", payload: {isLogin: false}})
        localStorage.removeItem(ACCESS_KEY);
        localStorage.removeItem(REFRESH_KEY);
        navigate('/');
    }).catch(err=>{
        console.log(err);
        alert("실패");
    })
}

export const refresh = () => {
    // const URL = "/account/refresh"
    const URL = "https://ec5fbd63-aaa3-42c5-b672-efdd5707128d.mock.pstmn.io/account/refresh"
    const data = {refresh: localStorage.getItem(REFRESH_KEY)};
    const headers = {Authorization: "Bearer " + localStorage.getItem(ACCESS_KEY)}
    axios.post(URL, data, headers).then(res => {
        console.log(res.data);
        localStorage.setItem(ACCESS_KEY, res.data.access);
        alert("성공");
    }).catch(err=>{
        console.log(err);
        alert("실패");
    })
}


export const isLogin = () => {
    if (localStorage.getItem(ACCESS_KEY)) {
        return true;
    }
    return false;
}