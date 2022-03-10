// /food-detail에서 관련 음식에 대한 이미지를 DB에서 꺼내 보여줌
// DB에 있는 기본 이미지와 추후에 추가될 사용자 입력 결과 이미지를 나눠 보여주어야 할텐데
// 여기서 나눌지 아니면 food-image-user 컴포넌트를 하나 더 생성해서 조건부 렌더링을 할지 고민 중

import { Box } from '@mui/material';

export function FoodImage({data, id}) {

    return (
        <>
            <Box
                    sx={{
                        height: '30vh',
                        backgroundImage: `url(${data})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        backgroundSize: 'contain',
                    }}
                />
        </>
    )
}