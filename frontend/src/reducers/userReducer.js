import { createContext } from "react";


export const UserContext = createContext()

export const userInitialState = {
  userInfo : {isLogin: false},
  detectResult : {}
}

export const userReducer = (state, action)=>{
  switch (action.type) {
    case 'setUserInfo': {
      return {
        ...state,
        userInfo: {...action.payload}
      }
    }
    case 'setDetectResult': {
      return {
        ...state,
        detectResult: {...action.payload}
      }
    }
  }
}