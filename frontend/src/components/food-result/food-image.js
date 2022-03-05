import { Box } from '@mui/material';

export function FoodImage({data, id}) {

    return (
        <>
            <Box
                    sx={{
                        height: '30vh',
                        backgroundImage: `url(${data[id].image_url})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        backgroundSize: 'contain',
                    }}
                />
        </>
    )
}