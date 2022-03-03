import { useState, useEffect } from "react";
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { FoodResultList } from '../components/food-result/food-result-list';
import { FoodDetail } from '../components/food-result/food-detail';
import { PageSideBar } from "../components/page-sidebar";
import { PageMain } from "../components/page-main";
import JsonData from '../data/data.json';

export default function FoodDetailDBPage() {
  const [FoodPageData, setFoodPageData] = useState({});
  useEffect(() => {
    setFoodPageData(JsonData);
  }, []);

  const contentsNum = 1;

  function createSideBarContents() {
    let contents = [];

    for (let i = 0; i < contentsNum; i++) {
      contents.push(
        <>
          <FoodResultList data={FoodPageData.Foods} />
        </>
      );
    }
    return contents;
  }

  function createMainContents() {
    let contents = [];

    for (let i = 0; i < contentsNum; i++) {
      contents.push(
        <>
          <FoodDetail data={FoodPageData.Foods} />
        </>
      );
    return contents;
  }
}

  return (
    <>
    <CssBaseline />
      <Header /> 
      {/* 양쪽 정렬 필요 */}
      <Box sx={{ display: 'flex', mt: '7%' }}>
          <PageSideBar>
            {createSideBarContents()}
          </PageSideBar>
       
        <Box sx={{ flexGrow: 1 }}>
          <PageMain>
            {createMainContents()}
          </PageMain>
        </Box>
      </Box>
    </>
  );
}