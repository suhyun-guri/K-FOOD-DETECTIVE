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
          {FoodPageData && <FoodDetail data={FoodPageData.Foods} />}
          </PageMain>
          
          <Footer />
        </Box>
      </Box>
    </>
  );
}