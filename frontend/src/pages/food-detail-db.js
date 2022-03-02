import { useState, useEffect } from "react";
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { FoodResultList } from '../components/food-result/food-result-list';
import { PageSideBar } from "../components/page-sidebar";
import JsonData from '../data/data.json';

export default function FoodDetailDBPage() {
  const [FoodPageData, setFoodPageData] = useState({});
  useEffect(() => {
    setFoodPageData(JsonData);
  }, []);

  const contentsNum = 1;

  function createContents() {
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

  return (
    <>
    <CssBaseline />
      <Header /> 
      <PageSideBar>
        {createContents()}
      </PageSideBar>
    </>
  )
}