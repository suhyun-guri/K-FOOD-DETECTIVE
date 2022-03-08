import React, { useEffect, useState } from 'react';
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


createGlobalStyle`
  body {
    margin: 0;
  }
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>        
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/team" element={<TeamPage />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/food-detail" element={<FoodDetailDBPage />} exact />
        <Route path="/my-page" element={<MyPage />} exact />
      </Routes>
    </ThemeProvider>
  )
};