import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyPageBgBox } from './my-page-bgbox';
import { FavoritesCard } from './favorites/favorites-card';
import { CommentsList } from './comments/comments-list';
import { AccountMain } from './account/account-main';



export function MyPageMain(props) {
    const params = useParams('myfavorites');
    const [data, setData] = useState(props.data.params);
    const [menu, setMenu] = useState('myfavorites');
    const [title, setTitle] = useState('My favorite K-Foods');
    const count = data ? data.length : 0;


    console.log('my favorite data : ', props.data.MyFavorites);
    console.log('My Page params : ', params.feature);



    useEffect(() => {
        if (params.feature === undefined || params.feature === 'myfavorites') {
            setData(props.data.MyFavorites);
            setMenu(params);
            setTitle('My favorite K-Foods');
        } else if (params.feature === 'comments') {
            setData(props.data.Comments);
            setMenu(params);
            setTitle('Comments');
        } else if (params.feature === 'testresults') {
            setData(props.data.Tests);
            setMenu(params);
            setTitle('Test Results');
        } else if (params.feature === 'account') {
            setData(props.data.Account);
            setMenu(params);
            setTitle('Account');
        }
    }, [params])


    function SwitchContents(params) {
        if (params.feature === undefined || params.feature === 'myfavorites') {
            console.log('제목 : ', title)
            console.log('데이터 : ', data)
            console.log('count : ', count)
            return (
                <>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mt: 1 }}>
                        Total {count} K-Foods Informations
                    </Typography>
                </>
            )
        } else if (params.feature === 'comments') {
            console.log('제목 : ', title)
            console.log('데이터 : ', data)
            console.log('count : ', count)
            return (
                <>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mt: 1 }}>
                        Total {count} comment you written
                    </Typography>
                </>
            )
        } else if (params.feature === 'testresults') {
            console.log('제목 : ', title)
            console.log('데이터 : ', data)
            console.log('count : ', count)
            return (
                <>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mt: 1 }}>
                        Total {count} test results you did
                    </Typography>
                </>
            )
        } else {
            console.log('제목 : ', title)
            console.log('데이터 : ', data)
            console.log('count : ', count)
            return (
                <>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </>
            )
        }
    }

    return (
        <MyPageBgBox>
            <Box>
                <SwitchContents params={params} />
            </Box>
            {/* {(params.feature !== 'account') 
            ? <FavoritesCard data={data} /> 
            : <AccountMain data={data} />} */}
            {(params.feature === 'myfavorites') ? <FavoritesCard data={data} /> : '' }
            {(params.feature === 'comments') ? <CommentsList data={data} /> : '' }
            {(params.feature === 'testresults') ? <FavoritesCard data={data} /> : '' }
            {(params.feature === 'account') ? <AccountMain data={data} /> : '' }
        </MyPageBgBox>
    );
}