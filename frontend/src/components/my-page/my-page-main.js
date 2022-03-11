import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyPageBgBox } from './my-page-bgbox';
import { FavoritesCard } from './favorites/favorites-card';
import { CommentsList } from './comments/comments-list';
import { TestResultsList } from './test-results/test-results-list';
import { AccountMain } from './account/account-main';



export function MyPageMain(props) {
    const params = useParams('myfavorites');
    
    const [myfavorites, setMyFavorites] = useState(props.data.MyFavorites);
    const [comments, setComments] = useState(props.data.Comments);
    const [testresults, setTestResults] = useState(props.data.Tests);
    const [account, setAccount] = useState(props.data.Account);

    console.log('My Page params : ', params.feature);



    useEffect(() => {
        if (params.feature === undefined || params.feature === 'myfavorites') {
            setMyFavorites(props.data.MyFavorites);
        } else if (params.feature === 'comments') {
            setComments(props.data.Comments);
        } else if (params.feature === 'testresults') {
            setTestResults(props.data.Tests);
        } else if (params.feature === 'account') {
            setAccount(props.data.Account);
        }
    }, [params])


    return (
        <MyPageBgBox>
            {(params.feature === undefined || params.feature === 'myfavorites') ? <FavoritesCard data={myfavorites} /> : '' }
            {(params.feature === 'comments') ? <CommentsList data={comments} /> : '' }
            {(params.feature === 'testresults') ? <TestResultsList data={testresults} /> : '' }
            {(params.feature === 'account') ? <AccountMain data={account} /> : '' }
        </MyPageBgBox>
    );
}