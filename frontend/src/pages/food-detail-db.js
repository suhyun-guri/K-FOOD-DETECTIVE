// /food-detail에서 사용자가 입력한 이미지 없이 그냥 순수히 DB를 조회한 경우의 음식정보를 보여주는 페이지
// 현재는 food-detail-search와 food-detail-db를 나누었는데 조건부 렌더링으로 한 파일로 합칠지
// 계속 나누어둘지 고민 중


import { useState, useEffect } from "react";
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { FoodResultList } from '../components/food-result/food-result-list';
import { FoodDetail } from '../components/food-result/food-detail';
import { PageSideBar } from "../components/page-sidebar";
import { PageMain } from "../components/page-main";
import { Footer } from "../components/footer";
import JsonData from '../data/data.json';

export default function FoodDetailDBPage() {

  const [FoodPageData, setFoodPageData] = useState(undefined);
  useEffect(() => {
    setFoodPageData(JsonData);
  }, []);


  return (
    <>
    <CssBaseline />
      <Header /> 
      <Box sx={{ display: 'flex', mt: '7%' }}>
          <PageSideBar>
          {FoodPageData && <FoodResultList data={FoodPageData.Foods} />}
          </PageSideBar>
       
        <Box sx={{ flexGrow: 1 }}>
          <PageMain>
          {FoodPageData && <FoodDetail data={FoodPageData} />}
          </PageMain>
          
          <Footer />
        </Box>
      </Box>
    </>
  );
}