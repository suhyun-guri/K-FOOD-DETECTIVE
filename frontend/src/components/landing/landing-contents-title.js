import { Typography } from '@mui/material';

export function LandingContentsTitle(props) {
    return (
        <>
            <Typography variant='h5'>{props.data ? props.data.title : 'Loading'}</Typography>
            <Typography variant='subtitle2'>{props.data ? props.data.subtitle : 'Loading'}</Typography>
        </>
    )
}