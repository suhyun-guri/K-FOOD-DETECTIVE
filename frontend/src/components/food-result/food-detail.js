import { Card, CardContent, CardMedia, Stack, Box, Typography, Paper } from '@mui/material';

export function FoodDetail(props) {
    return (
        <>
            <Paper
                direction='column'
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    mt: 2,
                    alignContent: 'center'
                }}
            >
                {props.data
                    ? props.data.map((d, i) => (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                    height: '20vh',
                                    backgroundImage: `url(${d.image})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '70%',
                                    backgroundSize: 'contain',
                                    alignContent: 'center',
                                    borderRadius: 1
                                }}
                            />

                            {/* 음식 이름하고 하트버튼 */}
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    backgroundColor: 'blue',
                                    alignContent: 'center',
                                    borderRadius: 1
                                }}
                            >
                                {/* 음식이름하고 몇명 왔는지 세로로 */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >

                                </Box>

                                {/* 스크랩버튼 담는 곳 */}
                                <Box>

                                </Box>
                            </Box>
                        </>
                    ))
                    : 'loading'}

            </Paper>
        </>
    )
}