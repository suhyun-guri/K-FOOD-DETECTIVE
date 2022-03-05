import { Box } from '@mui/material';

export function FoodTitleLayout({ children }) {

    const BoxStyle = {
        display: 'flex',
        flexDirection: 'row',
        mt: 4,
        width: '100%',
        height: '10vh',
        borderRadius: 1,
        backgroundColor: '#156AF4'
    }

    return (
        <>
            <Box sx={BoxStyle}>
                {children}
            </Box>
        </>
    )
}