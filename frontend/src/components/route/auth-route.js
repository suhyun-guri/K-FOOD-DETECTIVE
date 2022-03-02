import { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function AuthRoute({isLogin , component : Component , render, ...rest }){

    useEffect(()=>{
      console.log("AuthRoute render path : " + rest.path + " isLogin : " + isLogin);
    })

    
    return (
         <Route
          {...rest}
          render={(props) =>
            isLogin ? (
              render ? (
                render(props)
              ) : (
                <Component {...props} />
              )
            ) : (
              <Navigate to={{ pathname: "/signin", state: { from: props.location } }}
              />
            )
            
          }
        />
      )
}