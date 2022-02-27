import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import TeamPage from '../pages/team';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import FindPwdPage from '../pages/find-pwd';
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
        {/* 로그인 여부로 페이지 제한을 위해 Auth 적용 필요 */}
        <Route path="/signin" element={<LoginPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/find-password" element={<FindPwdPage />} exact />
        {/* 음식은 어떻게 받지? 고민.. 이건 일단 DB에서 조회 */}
        <Route path="/food-detail" element={<FoodDetailDBPage />} exact />
        {/* path 수정 필요 */}
        <Route path="/my-page/:id/:category" element={<MyPage />} exact />
      </Routes>
    </ThemeProvider>
  )
};