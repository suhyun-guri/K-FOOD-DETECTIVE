import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import TeamPage from '../pages/team';
import AccountPage from '../pages/account';
import MyPage from '../pages/my-page';
import FoodDetailDBPage from '../pages/food-detail-db';

createGlobalStyle`
  body {
    margin: 0;
  }
`

function Path() {
  const { path } = useParams();
  return 
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/team" element={<TeamPage />} exact />
        <Route path="/signin" element={<AccountPage />} exact />
        <Route path="/register" element={<AccountPage />} exact />
        {/* 음식은 어떻게 받지? 고민.. 이건 일단 DB에서 조회 */}
        <Route path="/food-detail" element={<FoodDetailDBPage />} exact />
        {/* path 수정 필요 */}
        <Route path="/my-page/:id/:category" element={<MyPage />} exact />
      </Routes>
    </ThemeProvider>
  )
};