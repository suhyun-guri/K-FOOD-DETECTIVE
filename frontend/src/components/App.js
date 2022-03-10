import React, { useEffect, useState, useReducer } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import TeamPage from '../pages/team';
import SignInPage from '../pages/sign-in';
import MyPage from '../pages/my-page';
import FoodDetailDBPage from '../pages/food-detail-db';
import {UserContext, userReducer, userInitialState } from "../reducers/userReducer";

createGlobalStyle`
  html {
    font-size: 50%;
  }
  body {
    margin: 0;
  }
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={useReducer(userReducer, userInitialState)}>
        <Routes>        
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/team" element={<TeamPage />} exact />
          <Route path="/signin" element={<SignInPage />} exact />

          <Route path="/food-detail">
            <Route index element={<FoodDetailDBPage />} />
            <Route path=":romanized_name" element={<FoodDetailDBPage />} />
          </Route>
          

          {/* <Route path="/mypage" element={<MyPage />} exact /> */}
          <Route path="/mypage">
            <Route index element={<MyPage />} />
            <Route path=":feature" element={<MyPage />} />
          </Route>
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  )
};
