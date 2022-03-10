import { Button, Stack } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


export function MyPageSideBar() {

    const navbar = ['My Favorites', 'Comments', 'Test Results', 'Account'];
    const icons = [<ListRoundedIcon />, <ChatRoundedIcon />, <AssignmentRoundedIcon />, <PersonRoundedIcon />];

    return (
        // https://mui.com/components/menus/#icon-menu 아이콘메뉴로 변경
        <>
            <Stack
                direction='column'
                spacing={2}
                sx={{
                    mt: 2,
                    ml: 2,
                    mr: 3,
                    alignContent: 'center',
                    width: '100%'
                }}
            >
                {navbar
                    ? navbar.map((feature, i) => (
                        <Fragment key={i}>
                            <Link
                                to={`/mypage/${feature.replace(/ /g, "").toLowerCase()}`}
                            >
                                <Button
                                    variant='outlined'
                                    startIcon={icons[i]}
                                    sx={{
                                        width: '19.66rem',
                                        height: '7.5vh'
                                    }}
                                >
                                    {feature}
                                </Button>
                            </Link>
                        </Fragment>
                    ))
                    : 'loading'}

            </Stack>
        </>
    )
}