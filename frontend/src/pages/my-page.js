import { useState, useEffect } from "react";
import { Box, Button, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { Footer } from "../components/footer";
import { PageSideBar } from "../components/page-sidebar";
import { PageMain } from "../components/page-main";
import { MyPageSideBar } from '../components/my-page/my-page-sidebar';
import { MyPageMain } from '../components/my-page/my-page-main';
import { FavoritesList } from '../components/my-page/favorites/favorites-list'
import JsonData from '../data/data.json';



export default function MyPage() {
    const [UserInfoData, setUserInfoData] = useState(undefined);
    useEffect(() => {
        setUserInfoData(JsonData);
    }, []);

    return (
        <>
            <CssBaseline />
            <Header />
            <Box sx={{ display: 'flex', mt: '7%' }}>
                <Box sx={{ display: 'flex' }}>
                <PageSideBar>
                    {UserInfoData && <MyPageSideBar />}
                </PageSideBar>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <PageMain>
                        {UserInfoData && <MyPageMain data={UserInfoData} />}
                    </PageMain>

                    <Footer />
                </Box>
            </Box>
        </>
    )
}